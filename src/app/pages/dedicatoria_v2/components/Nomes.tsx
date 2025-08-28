
interface NamesProps {
  nomes: string
}

export function Names( {nomes}: NamesProps) {


  return (
    <div className="flex flex-start w-full pt-4 pb-2">
        <h1 className="font-montserrat-800 text-[1.7rem] text-left leading-[1.1] pt-[10px] mx-9
            bg-gradient-to-r from-[#80ACFF] via-[#A215DA] to-[#FF8CCB] bg-clip-text text-transparent
        ">
            {nomes}
        </h1>
    </div>
  );
}