import Image from "next/image";
import Join from "./JoinCom/JoinCom";
import { FaRegCheckCircle } from "react-icons/fa";
export default function Hero() {
  return (
    <div className="flex w-full h-auto text-black">
      <div className="flex w-11/12 h-full m-auto">
        <div className="w-2/3 h-full">
          <div className="text-8xl h-60 w-1/2">
            <h1>CUSTOM SKIN</h1>
            <h1>FOR YOUR</h1>
            <h1>CARD</h1>
          </div>

          <div className="flex flex-col h-44 w-1/2 mt-24 text-xl">
            <div>
              <span>Upload your photo and get your custom</span>
            </div>
            <div>
              <span>skin for your card only $10</span>
            </div>
          </div>

          <div className="mt-14">
            <Join></Join>
          </div>
        </div>

        <div className="flex w-1/3 h-full items-center justify-center">
          <div>
            <Image
              src={"/TotalSeks.png"}
              width={950}
              height={700}
              alt="hehe"
            ></Image>
            <div className="relative flex border-4 w-52 h-20 p-2.5 items-center justify-center rounded-full bg-black border-black text-white bottom-44 left-24">
              <div className=" flex border-2 pl-10 pr-10 h-14 rounded-full items-center justify-center">
                <span>ORDER SKIN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
