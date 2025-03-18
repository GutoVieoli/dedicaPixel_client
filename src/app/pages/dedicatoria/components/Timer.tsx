import { useState, useEffect } from "react";

interface TimerProps {
    data_inicio: string
}
  
export function Timer( {data_inicio}: TimerProps) {
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
    <div className="flex flex-col justify-center items-center w-[80vw] pb-9 pt-7 mx-auto">
        <h1 className="text-white text-[2.25rem] md:text-6xl font-yellowtail pb-2">
            Juntos por
        </h1>
        <p className="text-2xl md:text-[2rem] text-white font-semibold">
            {timeElapsed.years} anos, {timeElapsed.months} meses e {timeElapsed.days} dias
        </p>
        <p className="text-xl md:text-2xl text-gray-300 font-semibold">
            {timeElapsed.hours}h {timeElapsed.minutes}min e {timeElapsed.seconds} segundos
        </p>
        <div className="w-[70vw] max-w-[500px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent mt-6"></div>
    </div>
);
}