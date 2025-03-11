import { useState, useEffect } from "react";
import love1 from "./teste1.png"
import love2 from "./teste2.png"
import love3 from "./teste3.png"

const images = [
    love1, love2, love3
];

interface CarouselProps {
  interval: number
  showIndicators: boolean;
}

export function RomanticCarousel( {interval, showIndicators}: CarouselProps) {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full text-white">
      {/* Container da Imagem */}
      <div className="flex justify-center items-center h-[44vh] w-max-[88vw] md:h-[52vh] overflow-hidden rounded-2xl shadow-2xl">
        <img
          src={images[currentIndex]}
          alt={`Imagem ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
        />
      </div>

      {/* Indicadores */}
      {showIndicators && (
        <div className="absolute bottom-2 flex gap-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full shadow-md shadow-black/75 ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}