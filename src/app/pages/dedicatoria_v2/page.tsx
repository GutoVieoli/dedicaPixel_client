import Background from "../components/Background";
import ProYouTubeAudioPlayer from "./components/AudioPlayer";
import TopBar from "../components/TopBar";
import { RomanticCarousel } from "./components/Carrossel";
import { Mensagem } from "./components/Mensagem";
import { SobreCasal } from "./components/SobreCasal";

const Dedicatoria2Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center w-[100vw]">
      <Background />
      <TopBar />
      <RomanticCarousel interval={4500} showIndicators={false}/>
      <ProYouTubeAudioPlayer urlOrId="https://www.youtube.com/watch?v=g0EH6P4Bgjg" visual="hidden"/>
      <SobreCasal nomes="Augusto e Leticia" data_inicio="2022-11-20T16:30:00Z"/>
      <Mensagem mensagem="Eae meu amor? To mais maduro e mais seguro do que  eu quero, ganhei uns quilo e na aparencia to mais velho. E ainda, te gosto taaanto, te amo mesmo, tanto!"/>
    </div>
  );
};

export default Dedicatoria2Page;
