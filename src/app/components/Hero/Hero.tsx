import Image from "next/image";
import Join from "./JoinCom/JoinCom";
export default function Hero() {
  return (
    <div className="flex w-full h-3/4 min-h-[60rem] bg-black text-white">
      <div className="flex w-full flex-col">
        <div className="text-white w-full h-full">
          <h1>CUSTOM SKIN FOR YOUR CARD</h1>
          <span>
            Upload your photo and get your custom skin for your card only $10
          </span>
        </div>

        <div className="flex flex-row w-full h-1/5 place-self-end">
          <Join></Join>
        </div>
      </div>
      <div className="flex w-2/5 h-full justify-center">
        <Image
          className="self-center"
          src={"/TotalSeks.png"}
          alt={"alt"}
          width={700}
          height={700}
        ></Image>
      </div>
    </div>
  );
}
