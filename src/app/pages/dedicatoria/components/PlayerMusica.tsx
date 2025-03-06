interface VideoPlayerProps {
  videoUrl: string;
}

export function PlayerMusica( {videoUrl}: VideoPlayerProps) {

    const videoId = videoUrl.split("v=")[1]?.split("&")[0];

    if (!videoId) {
        return <p className="text-red-400 text-center text-xl w-dvw font-bold">
            URL de música inválida!
        </p>;
    }
    
  return (
    <div className="w-dvw flex justify-center">
      <iframe
        className="w-3/4 md:min-w-[576px] md:w-3/5 max-w-[660px] aspect-video"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
