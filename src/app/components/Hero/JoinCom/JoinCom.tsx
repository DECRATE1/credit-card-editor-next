import Image from "next/image";
export default function Join() {
  return (
    <div className="flex gap-10 text-xl">
      <div className="flex">
        <div>
          <Image
            src={"/man2.png"}
            alt="img"
            width={50}
            height={50}
            className="rounded-full border-2"
          ></Image>
        </div>

        <div>
          <Image
            src={"/man2.png"}
            alt="img"
            width={50}
            height={50}
            className="rounded-full border-2"
          ></Image>
        </div>

        <div>
          <Image
            src={"/man2.png"}
            alt="img"
            width={50}
            height={50}
            className="rounded-full border-2"
          ></Image>
        </div>
      </div>

      <div className="flex flex-col">
        <span>Join our community</span>
        <span>We're waiting for your</span>
      </div>
    </div>
  );
}
