import { useNavigate } from "react-router-dom";
import Background from "../components/Background";
import arte_destaque from "./components/hook.webp"
import TopBar from "../components/TopBar";

const LandingPage = () => {
  const navigate = useNavigate();
  
  const cores_titulo = {
      blue: "text-[#80ACFF]",
      deep_blue: "text-[#4F39F6]",
      purple: "text-[#A215DA]",
      pink: "text-[#FF8CCB]",
  };

  return (

    <div className="min-h-screen flex flex-col items-center w-[100vw]">

      <div className="w-[88%] flex flex-col items-center">
        
        <TopBar />

        <h2 className="font-montserrat-900 text-[2.6rem]  leading-[1.1] pt-[10px]
            bg-gradient-to-r from-[#80ACFF] via-[#A215DA] to-[#FF8CCB] bg-clip-text text-transparent
        ">
            Transforme momentos em memórias
        </h2>

        <p className="font-montserrat text-sm leading-[22px] py-[22px]  space-y-1">
            📸 Crie um espaço de <span className={cores_titulo.pink}>memórias</span> com fotos, música e mensagens.
            <br/>  <div></div>
            ✨ Surpreenda quem você ama com uma lembrança <span className={cores_titulo.blue}>inesquecível!</span> Só apontar o QR Code.
            <br/>  <div></div>
            🔗 Personalize agora e <span className={cores_titulo.pink}>eternize</span> esse momento!
        </p>

        <button
          onClick={() => navigate("/create")}
          className="font-montserrat-800 text-xl w-[88%] h-[60px] rounded-[1.3rem] mt-1.5"
          style={{
              background: "linear-gradient(to right, #80ACFF, #4F39F6, #A215DA, #FF8CCB)"
        }}>
            Quero criar minha página
        </button>

        <img
          src={arte_destaque}
          alt={`Arte de destaque`}
          className="min-w-[105%] py-4"
        />

      </div>
      <Background/>
    </div>
  );
};

export default LandingPage;
