interface RatinCardInterface {
  stars: string;
  comment: string;
  name: string;
  time: string;
}

export default function RatingCard({
  stars,
  comment,
  name,
  time,
}: RatinCardInterface) {
  return (
    <div className="bg-[#333044] w-4/12 h-72 rounded-xl min-w-min ml-96">
      <div>{stars}</div>

      <div>
        <span>{comment}</span>
      </div>

      <div>
        <span>{name}</span>
      </div>

      <div>
        <span>{time}</span>
      </div>
    </div>
  );
}
