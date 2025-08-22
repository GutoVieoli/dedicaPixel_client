import { useNavigate } from "react-router-dom";
import logoCoracao from "../assets/coracaoLogo.png"

const TopBar = () => {
    const navigate = useNavigate();
    
    return (
        <div 
            className="flex flex-row items-center py-5 gap-0.5"
            onClick={() => navigate("/")}
        >
            <img
                src={logoCoracao}
                alt={`Arte de destaque`}
                className="w-[22px] h-auto"
            />

            <h1 className="font-montserrat-700 text-lg leading-[none]
                bg-gradient-to-r from-[#80ACFF]  to-[#FF8CCB] bg-clip-text text-transparent
            ">
            Dedica Pixel
            </h1>
        </div>
        )
};

export default TopBar;
