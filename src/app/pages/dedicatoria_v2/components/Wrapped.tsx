import wrapped_bg from "./wrappedbg.png"
  
export function Wrapped( ) {
    return (
        <div className="w-full px-5 py-10 pb-10">
            <div 
                className="h-[530px] bg-cover bg-center rounded-4xl w-full flex flex-col items-center border-gray-800 border-2" 
                style={{ backgroundImage: `url(${wrapped_bg})` }}
            >
                <div className="pt-[75px] w-full text-center flex flex-col gap-4">
                    <h2 className="text-white font-montserrat-700 text-[2.1rem] leading-[1.15]">
                        Seu<br/>Relacionamento<br/>Wrapped
                    </h2>
                    <h3 className="text-white font-montserrat-500 text-[1.15rem]">
                        Explore o seu tempo em casal
                    </h3>
                </div>

                <h3 className="bg-purple-300 text-black font-montserrat-700 text-[1.4rem]
                rounded-full px-6 py-3 mt-[170px] max-w-1/2 text-center">
                    Vamos lá
                </h3>
            </div>
        </div>
    );
}