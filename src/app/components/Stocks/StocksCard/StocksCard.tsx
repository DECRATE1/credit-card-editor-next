import Image from "next/image";

interface StockCardInterface {
  path: string;
  title: string;
}

export default function StocksCard({ path, title }: StockCardInterface) {
  return (
    <div className="flex flex-col w-80 h-72 bg-red-950 mb-5 items-center rounded-xl">
      <div>
        <Image
          src={path}
          alt="img"
          width={300}
          height={300}
          className="rounded-xl mt-2"
        ></Image>
      </div>
      <div className="mt-3">{title}</div>
      <div className="flex mt-3 border-2 p-3 rounded-full w-32 justify-center">
        Order Now
      </div>
    </div>
  );
}
