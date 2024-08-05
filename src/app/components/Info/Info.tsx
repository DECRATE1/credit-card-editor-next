import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
export default function Info() {
  return (
    <div className="w-full min-h-[50rem]">
      <div className="flex w-11/12 h-full m-auto">
        <div className="flex w-1/2 h-[50rem] justify-center items-center">
          <div>
            <Image
              src={"/credit.png"}
              alt="img"
              width={550}
              height={550}
            ></Image>
          </div>
        </div>

        <div className="flex w-1/2 h-[50rem] justify-center items-start flex-col">
          <div>
            <div className="w-10/12 mb-5">
              <span className="text-5xl">
                THE BEST SKIN WITH VINYL MATERIAL.
              </span>
            </div>

            <div className="w-6/12 mb-5">
              <span>
                By using high quality vinyl, we have several advantages that
                other not have
              </span>
            </div>

            <div className="mb-5">
              <ul className="flex flex-col">
                <li className="flex mb-5 items-center gap-2">
                  <FaRegCheckCircle />
                  water proof
                </li>
                <li className="flex mb-5 items-center gap-2">
                  <FaRegCheckCircle />
                  Not easy to fade
                </li>
                <li className="flex mb-5 items-center gap-2">
                  <FaRegCheckCircle />
                  Not easy to fade
                </li>
              </ul>
            </div>

            <div className="flex w-48 bg-black text-white p-5 justify-center rounded-full">
              <span>ORDER SKIN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
