import { useState, useEffect } from "react";
import love1 from "./teste1.jpeg"

interface SobreCasalProps {
    data_inicio: string,
    nomes: string
}

const NOISE_SVG = encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'>
  <filter id='n'>
    <feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/>
  </filter>
  <rect width='100%' height='100%' filter='url(#n)'/>
</svg>
`);
  
export function SobreCasal( {data_inicio, nomes}: SobreCasalProps) {
    const calculateTimeElapsed = () => {
        const startDate = new Date(data_inicio);
        const now = new Date();
        
        const diffInSeconds = Math.floor((now.getTime() - startDate.getTime()) / 1000);
        let seconds = diffInSeconds % 60;
        let minutes = Math.floor((diffInSeconds / 60) % 60);
        let hours = Math.floor((diffInSeconds / 3600) % 24);
        let days = Math.floor(diffInSeconds / (3600 * 24));
        let months = Math.floor(days / 30.44);
        let years = Math.floor(months / 12);
        months %= 12;
        days %= 30.44;
        
        return { years, months, days: Math.floor(days), hours, minutes, seconds };
      };
    
      const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setTimeElapsed(calculateTimeElapsed());
        }, 1000);
        return () => clearInterval(interval);
      }, []);

return (
    <div className="w-full px-5 py-9">

        <div className="backdrop-blur-[6px] bg-[rgb(44,44,44,0.75)] w-full max-w-md  aspect-[3/5] rounded-[36px]
        flex flex-col overflow-hidden">

            <div className="h-1/2 bg-cover bg-center relative isolate" style={{ backgroundImage: `url(${love1})` }}>
                <span
                    aria-hidden
                    className="absolute inset-0 bg-black/40"
                />
                <span
                    aria-hidden
                    className="absolute inset-0 mix-blend-overlay opacity-50 pointer-events-none"
                    style={{
                    backgroundImage: `url("data:image/svg+xml,${NOISE_SVG}")`,
                    backgroundSize: "260px 260px",
                    backgroundRepeat: "repeat",
                    }}
                />
                <h3 className="relative z-10 m-5 text-white font-montserrat-600 text-[1.3rem] 
                    [text-shadow:4px_4px_5px_rgba(0,0,0)]">
                    Sobre o casal
                </h3>
            </div>

            <div className="h-1/2 p-4 pt-2">
                <div className="pb-3 h-1/4">
                    <h2 className="font-montserrat-700 text-[23px]">{nomes}</h2>
                    <h3 className="font-montserrat-500 text-[16px] text-neutral-400">Juntos desde {new Date(data_inicio).getUTCFullYear()}</h3>     
                </div>

                <div className="h-3/4 flex flex-col gap-1.5 py-0.5">

                    <div className="h-1/2 py-1 flex justify-between">
                        <div className="rounded-lg border-3 border-b-7 border-[rgba(10,10,10,0.38)] w-[30%]
                            flex flex-col justify-center items-center">
                            <h3 className="text-white font-montserrat-600 text-2xl">
                                {timeElapsed.years}
                            </h3>
                            <h4 className="text-white font-montserrat-500 text-[14px]">
                                Anos
                            </h4>
                        </div>

                        <div className="rounded-lg border-3 border-b-7 border-[rgba(10,10,10,0.38)] w-[30%]
                            flex flex-col justify-center items-center">
                            <h3 className="text-white font-montserrat-600 text-2xl">
                                {timeElapsed.months}
                            </h3>
                            <h4 className="text-white font-montserrat-500 text-[14px]">
                                Meses
                            </h4>
                        </div>

                        <div className="rounded-lg border-3 border-b-7 border-[rgba(10,10,10,0.38)] w-[30%]
                            flex flex-col justify-center items-center">
                            <h3 className="text-white font-montserrat-600 text-2xl">
                                {timeElapsed.days}
                            </h3>
                            <h4 className="text-white font-montserrat-500 text-[14px]">
                                Dias
                            </h4>
                        </div>
                    </div>

                    <div className="h-1/2 py-1 flex justify-between">

                        <div className="rounded-lg border-3 border-b-7 border-[rgba(10,10,10,0.38)] w-[30%]
                            flex flex-col justify-center items-center">
                            <h3 className="text-white font-montserrat-600 text-2xl">
                                {timeElapsed.hours}
                            </h3>
                            <h4 className="text-white font-montserrat-500 text-[14px]">
                                Horas
                            </h4>
                        </div>

                        <div className="rounded-lg border-3 border-b-7 border-[rgba(10,10,10,0.38)] w-[30%]
                            flex flex-col justify-center items-center">
                            <h3 className="text-white font-montserrat-600 text-2xl">
                                {timeElapsed.minutes}
                            </h3>
                            <h4 className="text-white font-montserrat-500 text-[14px]">
                                Minutos
                            </h4>
                        </div>

                        <div className="rounded-lg border-3 border-b-7 border-[rgba(10,10,10,0.38)] w-[30%]
                            flex flex-col justify-center items-center">
                            <h3 className="text-white font-montserrat-600 text-2xl">
                                {timeElapsed.seconds}
                            </h3>
                            <h4 className="text-white font-montserrat-500 text-[14px]">
                                Segundos
                            </h4>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>

);
}