import Image from "next/image";
import Join from "./JoinCom/JoinCom";
export default function Hero() {
  return (
    <div className="flex w-full h-3/4 bg-black text-white flex-wrap">
      <div className="flex w-1/2 flex-col">
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

      <div className="w-2/4 h-full min-w-2/4 min-h-full bg-[url('/TotalSeks.png')] bg-no-repeat bg-contain bg-right"></div>
    </div>
  );
}
