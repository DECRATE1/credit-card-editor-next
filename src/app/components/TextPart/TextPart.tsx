import Image from "next/image";

export default function TextPart() {
  return (
    <div className="w-full min-h-[16rem] mt-52">
      <div className="flex w-11/12 h-full m-auto">
        <div className="text-4xl font-bold w-1/3">
          <h2>GET YOUR CARD SKIN</h2>
          <h2>WITH THE TWO PACKS</h2>
          <h2>WE HAVE</h2>
        </div>

        <div className="flex justify-between w-1/3 text-black">
          <div>
            <div className="flex bg-black w-10 h-10 justify-center rounded-xl">
              <Image
                src={"./gallery_2_(1).svg"}
                width={30}
                height={30}
                alt="img"
                className="bg-black rounded-lg"
              ></Image>
            </div>

            <span className="w-48 flex mt-5">
              Custom Design you can upload your design for your card skin.
            </span>
          </div>

          <div>
            <div className="flex bg-black w-10 h-10 justify-center rounded-xl">
              <Image
                src={"./gallery(1).svg"}
                width={30}
                height={30}
                alt="img"
                className="bg-black rounded-lg"
              ></Image>
            </div>
            <span className="w-56 flex mt-5">
              Design Stock, we have hundreads of stock for you to choose.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
