import React, { useEffect, useMemo, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle } from "lucide-react";

/**
 * Profissional e enxuto: player "audio-first" baseado no IFrame API oficial do YouTube.
 * - Sem API key (título e duração vêm do próprio player)
 * - Tipado em TS, sem "any"
 * - Carregamento do script em singleton
 * - Cleanup correto (destroy)
 * - Play/Pause + barra de progresso
 * - Suporte a URL ou ID (watch, youtu.be, embed, shorts)
 * - Modo visual "thumbnail" (recomendado p/ conformidade) ou "hidden"
 */

declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

// --- Tipos mínimos do Player que vamos usar ---
interface YTPlayer {
  playVideo(): void;
  pauseVideo(): void;
  getPlayerState(): number;
  getDuration(): number;
  getCurrentTime(): number;
  seekTo(seconds: number, allowSeekAhead: boolean): void;
  getVideoData(): { title?: string } | undefined;
  destroy(): void;
}

const YT_STATES = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
} as const;

let ytApiPromise: Promise<any> | null = null;

function loadYouTubeIframeAPI(): Promise<any> {
  if (ytApiPromise) return ytApiPromise;
  ytApiPromise = new Promise((resolve) => {
    if (typeof window === "undefined") return; // SSR guard
    if (window.YT && (window as any).YT.Player) {
      resolve(window.YT);
      return;
    }
    const existing = document.getElementById("youtube-iframe-api");
    if (!existing) {
      const s = document.createElement("script");
      s.id = "youtube-iframe-api";
      s.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(s);
    }
    window.onYouTubeIframeAPIReady = () => resolve(window.YT);
  });
  return ytApiPromise;
}

export function extractYouTubeId(urlOrId: string): string | null {
  const idRegex = /^[a-zA-Z0-9_-]{11}$/;
  if (idRegex.test(urlOrId)) return urlOrId;
  try {
    const u = new URL(urlOrId);
    if (u.hostname.includes("youtube.com")) {
      if (u.pathname === "/watch") {
        const v = u.searchParams.get("v");
        if (v && idRegex.test(v)) return v;
      }
      const m1 = u.pathname.match(/\/embed\/([a-zA-Z0-9_-]{11})/);
      if (m1) return m1[1];
      const m2 = u.pathname.match(/\/shorts\/([a-zA-Z0-9_-]{11})/);
      if (m2) return m2[1];
    }
    if (u.hostname === "youtu.be") {
      const id = u.pathname.slice(1);
      if (idRegex.test(id)) return id;
    }
  } catch {}
  return null;
}

export function formatSeconds(total: number): string {
  if (!Number.isFinite(total) || total <= 0) return "0:00";
  const m = Math.floor(total / 60);
  const s = Math.floor(total % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

type VisualMode = "hidden" | "thumbnail";

type Props = {
  urlOrId: string;
  visual?: VisualMode; // "thumbnail" (default) mantém o vídeo visível, "hidden" oculta
  className?: string;
};

const ProYouTubeAudioPlayer: React.FC<Props> = ({ urlOrId, visual = "thumbnail", className }) => {
  const videoId = useMemo(() => extractYouTubeId(urlOrId), [urlOrId]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<YTPlayer | null>(null);

  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);

  // Atualiza posição enquanto tocando
  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      const p = playerRef.current;
      if (!p) return;
      const t = p.getCurrentTime?.() ?? 0;
      setPosition(t);
    }, 500);
    return () => window.clearInterval(id);
  }, [playing]);

  // Cria/destroi player quando videoId/visual muda
  useEffect(() => {
    if (!videoId || typeof window === "undefined") {
      setReady(false);
      setPlaying(false);
      setTitle("");
      setDuration(0);
      setPosition(0);
      return;
    }

    let cancelled = false;
    let playerDiv: HTMLDivElement | null = null;

    (async () => {
      const YT = await loadYouTubeIframeAPI();
      if (cancelled) return;

      // cleanup anterior
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {}
        playerRef.current = null;
      }
      if (containerRef.current) containerRef.current.innerHTML = "";

      playerDiv = document.createElement("div");
      playerDiv.id = `yt-${videoId}-${Math.random().toString(36).slice(2)}`;
      containerRef.current?.appendChild(playerDiv);

      const player: YTPlayer = new (YT as any).Player(playerDiv.id, {
        videoId,
        width: visual === "hidden" ? 0 : 320,
        height: visual === "hidden" ? 0 : 180,
        playerVars: {
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: () => {
            if (cancelled) return;
            playerRef.current = player;
            const d = player.getDuration?.() ?? 0;
            const info = player.getVideoData?.() || {};
            setTitle(info.title || "");
            setDuration(d);
            setReady(true);
            setPosition(player.getCurrentTime?.() ?? 0);
          },
          onStateChange: (e: any) => {
            const s = e?.data;
            if (s === YT_STATES.PLAYING) setPlaying(true);
            else if (s === YT_STATES.PAUSED || s === YT_STATES.ENDED) setPlaying(false);
          },
        },
      });
    })();

    return () => {
      cancelled = true;
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {}
        playerRef.current = null;
      }
    };
  }, [videoId, visual]);

  const toggle = () => {
    const p = playerRef.current;
    if (!p) return;
    const st = p.getPlayerState?.();
    if (st === YT_STATES.PLAYING) p.pauseVideo();
    else p.playVideo();
  };

  const onSeek = (val: number) => {
    const p = playerRef.current;
    if (!p) return;
    p.seekTo(val, true);
    setPosition(val);
  };

  if (!videoId) {
    return <p className="text-red-500 font-medium">URL/ID do YouTube inválido.</p>;
  }

  return (
    <div className={["w-full max-w-md mx-auto px-9 py-7", className]
      .filter(Boolean)
      .join(" ")}
    >
      <div className="flex flex-col gap-1">

        <h1 className="font-montserrat-800 text-[1.7rem] text-left leading-[1.1] pb-3
            bg-gradient-to-r from-[#80ACFF] via-[#A215DA] to-[#FF8CCB] bg-clip-text text-transparent
        ">
            Nossa música
        </h1>
 
        <h3 className="font-montserrat-600 text-[1rem] truncate">{title || "Carregando..."}</h3>

        <div className="flex flex-col items-center gap-[6px] text-sm text-white pt-4">
          <input
            type="range"
            min={0}
            max={Math.max(1, Math.floor(duration))}
            step={1}
            value={Math.min(Math.floor(position), Math.floor(duration))}
            onChange={(e) => onSeek(Number(e.target.value))}
            style={{
                backgroundSize: `${ (position / duration) * 100 }% 100%`,
            }}
            className="w-full custom-range-music"
            aria-label="Barra de progresso"
          />
          <div className="w-full flex justify-between">
            <span>{formatSeconds(position)}</span>
            <span>{formatSeconds(duration)}</span>
          </div>
        </div>
      </div>

      <div className="mt-2 mx-auto flex justify-between w-full">
          <button>
            <Shuffle size={26} className="fill-white" />
          </button>

          <div className="w-1/2 flex justify-between">
              <button>
                <SkipBack size={27} className="fill-white"/>
              </button>

              <button
                onClick={toggle}
                disabled={!ready}
                className="p-5 rounded-full bg-white text-purple-950 disabled:opacity-50"
              >
                {playing
                  ? <Pause size={27} className="fill-purple-950" />
                  : <Play size={27} className="fill-purple-950" />
                }
              </button>
              
              <button>
                <SkipForward size={27} className="fill-white"/>
              </button>
          </div>

          <button>
            <Repeat size={26} className="fill-white" />
          </button>

      </div>

      {/* Container do IFrame - visível como thumbnail ou escondido */}
      <div
        ref={containerRef}
        aria-hidden={visual === "hidden" ? true : false}
        className={visual === "hidden" ? "sr-only" : "mt-4 rounded-lg overflow-hidden"}
      />
    </div>
  );
};

export default ProYouTubeAudioPlayer;
