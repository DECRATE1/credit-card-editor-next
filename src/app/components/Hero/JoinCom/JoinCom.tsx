import Image from "next/image";
export default function Join() {
  return (
    <>
      <div className="flex">
        <Image src={""} alt="img" width={50} height={50}></Image>
        <Image src={""} alt="img" width={50} height={50}></Image>
        <Image src={""} alt="img" width={50} height={50}></Image>
      </div>
      <div className="flex flex-col">
        <span>Join our community</span>
        <span>We're waiting for your</span>
      </div>
    </>
  );
}
