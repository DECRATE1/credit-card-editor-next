import StocksCard from "./StocksCard/StocksCard";

export default function Stocks() {
  return (
    <div className="bg-lime-400 text-white">
      <div>
        <h2>POPULAR PRO STOCKS</h2>
        <span>
          Choose a design according to your category then order as soon as
          possible
        </span>
      </div>

      <div>SEARCH BAR</div>

      <div>LATEST POPULAR PREMIUM</div>

      <div>
        <StocksCard></StocksCard>
        <StocksCard></StocksCard>
        <StocksCard></StocksCard>
      </div>

      <div>next page</div>
    </div>
  );
}
