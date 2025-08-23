import Background from "../components/Background";
import TopBar from "../components/TopBar";

import { useState } from "react";


const CreatePage = () => {

    const [isOn, setIsOn] = useState(Boolean);

    const handleToggle = (state: boolean) => {
        setIsOn(state);
    };

    return (
        <div className="min-h-screen flex flex-col items-center w-[100vw]">
            <div className="w-[88%] flex flex-col items-center">

                <TopBar />

                <div className="w-full flex items-start">
                    <h2 className="font-montserrat-900 text-[2.8rem] text-left leading-[1.1] pt-[10px]
                        bg-gradient-to-r from-[#80ACFF] via-[#A215DA] to-[#FF8CCB] bg-clip-text text-transparent
                    ">
                        Quase Lá!
                    </h2>
                </div>

                <p className="font-montserrat-600 text-[1rem] text-left leading-[22px] py-[16px] w-full">
                    Preencha os dados para criar o seu contador
                </p>

                <div className="my-3"></div>


                <div className="relative flex justify-center w-full h-18 p-2 my-3">
                    <div className="absolute p-[3px] inset-0 rounded-2xl gradient-mistic-l mask-borda"></div>
                    <button
                        className={`w-[50%] py-2 font-montserrat text-sm rounded-xl ${
                        isOn && "gradient-mistic-r"
                        }`}
                        onClick={() => handleToggle(true)}
                    >
                        2 meses, 3 fotos
                        <br></br>
                        R$14,00
                    </button>
                    <button
                        className={`w-[50%] py-2 font-montserrat text-sm rounded-xl ${
                        !isOn && "gradient-mistic-r"
                        }`}
                        onClick={() => handleToggle(false)}
                    >
                        Pra sempre, 7 fotos
                        <br></br>
                        R$29,00
                    </button>
                </div>



                <div className="w-full flex flex-col gap-1 my-2.5">
                    <p className="font-montserrat-600 text-[14px] text-left w-full">
                        Nome do casal:
                    </p>
                    <div className="relative flex justify-center w-full h-12 p-2">
                        <div className="absolute p-[3px] inset-0 rounded-xl gradient-mistic-l mask-borda"></div>
                        <input
                            type="text"
                            className="w-full h-full px-3 text-white outline-none"
                            placeholder="João e Maria"
                        />
                    </div>
                </div>


                <div className="w-full flex flex-col gap-1 my-2.5">
                    <p className="font-montserrat-600 text-[14px] text-left w-full">
                        Início do relacionamento:
                    </p>

                    <div className="flex flex-row gap-2">
                        <div className="relative flex justify-center w-full h-12 p-2">
                            <div className="absolute p-[3px] inset-0 rounded-xl gradient-mistic-l mask-borda"></div>
                            <input
                                className="outline-none"
                                type="date"
                            />
                        </div>
                        <div className="relative flex justify-center w-full h-12 p-2">
                            <div className="absolute p-[3px] inset-0 rounded-xl gradient-mistic-l mask-borda"></div>
                            <input
                                className="outline-none"
                                type="time"
                            />
                        </div>
                    </div>
                </div>


                <div className="w-full flex flex-col gap-1 my-2.5">
                    <p className="font-montserrat-600 text-[14px] text-left w-full">
                        Mensagem:
                    </p>
                    <div className="relative flex justify-center w-full h-28 px-2 py-3">
                        <div className="absolute p-[3px] inset-0 rounded-xl gradient-mistic-l mask-borda"></div>
                        <textarea
                            className="w-full h-full px-3 text-white outline-none leading-snug"
                            placeholder="Expresse todo o seu amor aqui. Capriche bastante hein 💖"
                        >
                        </textarea>
                    </div>
                </div>


                <div className="w-full flex flex-col gap-1 my-2.5">
                    <p className="font-montserrat-600 text-[14px] text-left w-full">
                        Música da Youtube: (Opcional)
                    </p>
                    <div className="relative flex justify-center w-full h-12 p-2">
                        <div className="absolute p-[3px] inset-0 rounded-xl gradient-mistic-l mask-borda"></div>
                        <input
                            type="text"
                            className="w-full h-full px-3 text-white outline-none"
                            placeholder="https://www.youtube.com/watch?v=SQzbMwAtD6w"
                        />
                    </div>
                </div>


            </div>

            <Background/>
        </div>
    )
};

export default CreatePage;
