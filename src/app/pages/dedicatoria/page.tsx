import Background from "./components/Background";
import { PlayerMusica } from "./components/PlayerMusica";

const Page = () => {
  return (
    <div className="h-screen">
      <Background />
      <PlayerMusica videoUrl="https://www.youtube.com/watch?v=PkQH67mwHPw"/>
    </div>
  );
};

export default Page;
