"use client";
import Image from "next/image";
import MakeYourSkinCard from "../components/MakeYourSkinCard/MakeYourSkinCard";

export default function MakeYourSkin() {
  return (
    <div className="w-screen h-screen">
      <div className="flex w-screen h-screen">
        <div className="w-4/5 flex justify-center items-center">
          <Image src={"/change.png"} alt="img" width={700} height={700}></Image>
        </div>

        <div className="flex w-1/5 h-full">
          <MakeYourSkinCard></MakeYourSkinCard>
        </div>
      </div>
    </div>
  );
}
