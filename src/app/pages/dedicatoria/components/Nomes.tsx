
interface NamesProps {
  nomes: string
}

export function Names( {nomes}: NamesProps) {


  return (
    <div className="flex justify-center w-full py-4">
        <h1 className="text-white text-[3.5rem] md:text-7xl font-fleur">
            {nomes}
        </h1>
    </div>
  );
}