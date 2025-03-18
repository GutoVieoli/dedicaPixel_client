
interface MensagemProps {
    mensagem: string
  }
  
  export function Mensagem( {mensagem}: MensagemProps) {
  
  
    return (
        <div className="flex justify-center w-[75vw] md:w-[68vw] lg:w-[52vw]">
            <h1 className="text-white text-[1.1rem] md:text-3xl font-montserrat-lyric text-center">
                {mensagem}
            </h1>
        </div>
    );
  }