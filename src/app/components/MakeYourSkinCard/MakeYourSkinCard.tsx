"use client";
import Image from "next/image";
import { useRef } from "react";
import Moveable from "react-moveable";

interface MakeYourSkinCardProps {
  handleSetIsClicked: (boolean: boolean) => void;
  isClicked: boolean;
}
export default function MakeYourSkinCard({
  handleSetIsClicked,
  isClicked,
}: MakeYourSkinCardProps) {
  const refa = useRef(null);
  return (
    <div className="bg-black text-white w-full">
      <div className="w-full bg-red-600 h-1/4 relative">
        <div className="w-11/12 h-full" ref={refa}>
          <Image
            src={"/man1.png"}
            alt="img"
            fill
            onClick={() => handleSetIsClicked(true)}
          ></Image>
        </div>

        {isClicked && (
          <Moveable
            target={refa}
            draggable={true}
            throttleDrag={1}
            edgeDraggable={false}
            startDragRotate={0}
            throttleDragRotate={0}
            onDrag={(e) => {
              e.target.style.transform = e.transform;
            }}
            resizable={true}
            onResize={(e) => {
              e.target.style.width = `${e.width}px`;
              e.target.style.height = `${e.height}px`;
              e.target.style.transform = e.drag.transform;
            }}
          />
        )}
      </div>
    </div>
  );
}
