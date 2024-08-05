import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
export default function Info() {
  return (
    <div className="w-full min-h-[50rem] mt-20 md:mt-0">
      <div className="flex w-11/12 h-full m-auto flex-col md:flex-row justify-center items-center">
        <div className="flex w-1/2 md:h-[50rem] h-[10rem] justify-center items-center">
          <div>
            <Image
              src={"/credit.png"}
              alt="img"
              width={550}
              height={550}
            ></Image>
          </div>
        </div>

        <div className="md:flex w-1/2 h-[50rem] justify-center items-start flex-col md:text-start">
          <div className="md:block flex flex-col items-center">
            <div className="md:w-10/12 w-full mb-5">
              <span className="md:block md:text-start w-full flex text-center items-center justify-center text-5xl">
                THE BEST SKIN WITH VINYL MATERIAL.
              </span>
            </div>

            <div className="flex text-start md:w-6/12 mb-5 text-2xl">
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
