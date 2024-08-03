import RatingCard from "./RatingCard/RatingCard";

export default function RatingList() {
  return (
    <div className="bg-green-500">
      <div>
        <span>SEE WHAT OUT USER ARE SAYING</span>
      </div>

      <div>
        <RatingCard></RatingCard>
      </div>

      <div>SEE ALL REVIEW</div>
    </div>
  );
}
