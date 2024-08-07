"use client";
import Image from "next/image";
import MakeYourSkinCard from "../components/MakeYourSkinCard/MakeYourSkinCard";
import { useState } from "react";

export default function MakeYourSkin() {
  const [isClicked, setIsClicked] = useState(false);
  const handleSetIsClicked = (boolean: boolean) => {
    setIsClicked(boolean);
  };
  return (
    <div className="w-screen h-screen">
      <div className="flex w-screen h-screen">
        <div
          className="w-4/5 flex justify-center items-center"
          onClick={() => handleSetIsClicked(false)}
        >
          <Image src={"/change.png"} alt="img" width={700} height={700}></Image>
        </div>

        <div className="flex w-1/5 h-full">
          <MakeYourSkinCard
            handleSetIsClicked={handleSetIsClicked}
            isClicked={isClicked}
          ></MakeYourSkinCard>
        </div>
      </div>
    </div>
  );
}
