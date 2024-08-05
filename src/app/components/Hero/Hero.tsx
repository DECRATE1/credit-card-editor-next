import Image from "next/image";
import Join from "./JoinCom/JoinCom";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="flex w-full h-auto text-black m-auto">
      <div className="flex flex-col md:flex-row w-11/12 h-full m-auto ">
        <div className="w-full md:w-2/3 h-full">
          <div className="text-center md:text-start text-5xl md:text-8xl h-60 w-full md:w-1/2">
            <h1>CUSTOM SKIN</h1>
            <h1>FOR YOUR</h1>
            <h1>CARD</h1>
          </div>

          <div className="flex flex-col w-full h-44 md:w-1/2 mt-10 text-lg md:mt-24 md:text-xl text-center md:text-start">
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

        <div className="flex w-full md:w-1/3 h-full items-center justify-center mt-10 md:mt-0">
          <div className="flex md:block justify-center flex-col items-center">
            <Image
              src={"/TotalSeks.png"}
              width={950}
              height={700}
              alt="hehe"
            ></Image>
            <div className="relative flex border-4 w-52 h-20 p-2.5 md:items-center md:justify-center rounded-full bg-black border-black text-white md:bottom-44 md:left-24 mt-10 md:mt-0">
              <Link href={"./makeYourSkin"}>
                <div className="flex border-2 pl-10 pr-10 h-14 rounded-full items-center justify-center">
                  <span>ORDER SKIN</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
