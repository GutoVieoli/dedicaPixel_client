import Background from "./components/Background";
import { PlayerMusica } from "./components/PlayerMusica";
import { RomanticCarousel } from "./components/Carrossel";
import { Names } from "./components/Nomes";
import { Timer } from "./components/Timer";

const Page = () => {
  return (
    <div className="h-screen">
      <Background />
      <Names nomes="Augusto e Leticia"/>
      <RomanticCarousel interval={2200} showIndicators={true}/>
      <Timer data_inicio="2022-11-20T16:30:00Z"/>
      <PlayerMusica videoUrl="https://www.youtube.com/watch?v=g0EH6P4Bgjg"/>
    </div>
  );
};

export default Page;
