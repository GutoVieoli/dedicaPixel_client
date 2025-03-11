import Background from "./components/Background";
import { PlayerMusica } from "./components/PlayerMusica";
import { RomanticCarousel } from "./components/Carrossel";

const Page = () => {
  return (
    <div className="h-screen">
      <Background />
      <RomanticCarousel interval={2200} showIndicators={true}/>
      <PlayerMusica videoUrl="https://www.youtube.com/watch?v=g0EH6P4Bgjg"/>
    </div>
  );
};

export default Page;
