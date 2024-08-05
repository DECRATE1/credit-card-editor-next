import RatingCard from "./RatingCard/RatingCard";

export default function RatingList() {
  return (
    <div className="bg-green-500 min-h-[45rem] md:max-h-[100rem]">
      <div className="bg-red-500 w-11/12 h-[45rem] m-auto flex flex-col items-center justify-between text-white">
        <div className="flex mt-5 w-96">
          <span className="text-center text-4xl">
            SEE WHAT OUT USER ARE SAYING
          </span>
        </div>

        <div className="flex w-full overflow-hidden">
          <RatingCard
            stars="adsfdsafadsfa"
            comment="dskajflasdjf"
            name="hihi"
            time="2 days ago"
          ></RatingCard>
          <RatingCard
            stars="adsfdsafadsfa"
            comment="dskajflasdjf"
            name="hihi"
            time="2 days ago"
          ></RatingCard>
          <RatingCard
            stars="adsfdsafadsfa"
            comment="dskajflasdjf"
            name="hihi"
            time="2 days ago"
          ></RatingCard>
        </div>

        <div className="mb-14">SEE ALL REVIEW</div>
      </div>
    </div>
  );
}
