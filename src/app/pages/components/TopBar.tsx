import logoCoracao from "../assets/coracaoLogo.png"

const TopBar = () => {
  return (
    <div className="flex flex-row items-center py-5 gap-0.5">
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
