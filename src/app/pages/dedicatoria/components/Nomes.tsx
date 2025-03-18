
interface NamesProps {
  nomes: string
}

export function Names( {nomes}: NamesProps) {


  return (
    <div className="flex justify-center w-full pt-1">
        <h1 className="text-white text-4xl md:text-5xl font-tangerine-bold">
            {nomes}
        </h1>
    </div>
  );
}