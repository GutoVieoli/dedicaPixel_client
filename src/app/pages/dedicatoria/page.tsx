import Background from "./components/Background";
import { PlayerMusica } from "./components/PlayerMusica";
import { RomanticCarousel } from "./components/Carrossel";
import { Names } from "./components/Nomes";
import { Timer } from "./components/Timer";
import { Mensagem } from "./components/Mensagem";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center w-[100vw]">
      <Background />
      <RomanticCarousel interval={2200} showIndicators={true}/>
      <Names nomes="Augusto e Leticia"/>
      <Timer data_inicio="2022-11-20T16:30:00Z"/>
      <Mensagem mensagem="Eae meu amor? To mais maduro e mais seguro do que  eu quero, ganhei uns quilo e na aparencia to mais velho. E ainda, te gosto taaanto, te amo mesmo, tanto!"/>
      <PlayerMusica videoUrl="https://www.youtube.com/watch?v=g0EH6P4Bgjg"/>
    </div>
  );
};

export default Page;
