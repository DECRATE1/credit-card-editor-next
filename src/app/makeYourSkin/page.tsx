"use client";
import Image from "next/image";
import MakeYourSkinCard from "../components/MakeYourSkinCard/MakeYourSkinCard";
import { useState } from "react";
import { Url } from "next/dist/shared/lib/router/router";

export default function MakeYourSkin() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState<string | undefined>(undefined);
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
        <div>
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setUrl(URL.createObjectURL(file));
              }
            }}
          ></input>
        </div>
        <div className="flex w-1/5 h-full">
          {url && (
            <MakeYourSkinCard
              handleSetIsClicked={handleSetIsClicked}
              isClicked={isClicked}
              url={url}
            ></MakeYourSkinCard>
          )}
        </div>
      </div>
    </div>
  );
}
