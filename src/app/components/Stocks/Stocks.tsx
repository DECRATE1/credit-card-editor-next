import StocksCard from "./StocksCard/StocksCard";

export default function Stocks() {
  return (
    <div className="w-full min-h-[50rem] text-white">
      <div className="flex bg-black w-6/12 h-full m-auto rounded-2xl flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl">POPULAR PRO STOCKS</h2>
          <span className="mt-5">
            Choose a design according to your category then order as soon as
            possible
          </span>
        </div>

        <div>SEARCH BAR</div>

        <div className="w-4/5">
          <ul className="flex flex-row gap-10">
            <li>LATEST</li>
            <li>POPULAR</li>
            <li>PREMIUM</li>
          </ul>
        </div>

        <div className="w-4/5 flex flex-row items-center justify-between">
          <StocksCard path={"/credit-1.png"} title={"yes"}></StocksCard>
          <StocksCard path={"/credit-2.png"} title={"da"}></StocksCard>
          <StocksCard path={"/credit-3.png"} title={"no"}></StocksCard>
        </div>

        <div className="text-black flex border-2 mt-10 p-3 rounded-full justify-center w-36 bg-white">
          Next Page
        </div>
      </div>
    </div>
  );
}
