import Background from "../components/Background";
import ProYouTubeAudioPlayer from "./components/AudioPlayer";
import TopBar from "../components/TopBar";
import { RomanticCarousel } from "./components/Carrossel";
import { Names } from "./components/Nomes";
import { Timer } from "./components/Timer";
import { Mensagem } from "./components/Mensagem";

const Dedicatoria2Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center w-[100vw]">
      <Background />
      <TopBar />
      <RomanticCarousel interval={4500} showIndicators={true}/>
      <Names nomes="Augusto e Leticia"/>
      <ProYouTubeAudioPlayer urlOrId="https://www.youtube.com/watch?v=7pOr3dBFAeY" visual="hidden"/>
      <Timer data_inicio="2022-11-20T16:30:00Z"/>
      <Mensagem mensagem="Eae meu amor? To mais maduro e mais seguro do que  eu quero, ganhei uns quilo e na aparencia to mais velho. E ainda, te gosto taaanto, te amo mesmo, tanto!"/>
    </div>
  );
};

export default Dedicatoria2Page;
