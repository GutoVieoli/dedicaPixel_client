
interface MensagemProps {
    mensagem: string
  }
  
  export function Mensagem( {mensagem}: MensagemProps) {
  
  
    return (
        <div className="w-full px-5">
            <div className="w-full bg-[#3e0b52] p-5 rounded-3xl">
                <h2 className="text-white font-montserrat-600 text-[1.2rem]">
                    Mensagem especial
                </h2>
    
                <h3 className="text-white font-montserrat-700 text-[1.5rem] py-4 mb-3 leading-snug max-h-[9.6rem]"
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: '4',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
            
                        // O gradiente de máscara que corta o texto. Ele vai de preto (visível) para transparente.
                        maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)'
                        }}
                    >
                        {mensagem}
                </h3>

                <button className="bg-amber-50 text-fuchsia-950 font-montserrat-700 text-[0.9rem]
                rounded-full px-3 py-2">
                    Mostrar Mensagem
                </button>
            </div>
        </div>
    );
  }