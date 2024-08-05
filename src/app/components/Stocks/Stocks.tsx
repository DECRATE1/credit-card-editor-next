import SearchBar from "./SearchBar/SearchBar";
import StocksCard from "./StocksCard/StocksCard";

export default function Stocks() {
  return (
    <div className="w-full min-h-[60rem] text-white mt-10 md:mt-0">
      <div className="flex bg-black w-full md:w-6/12 h-min-10 m-auto rounded-2xl flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl md:text-3xl mt-5">POPULAR PRO STOCKS</h2>
          <span className="md:text-start text-center mt-5">
            Choose a design according to your category then order as soon as
            possible
          </span>
        </div>

        <div>
          <SearchBar></SearchBar>
        </div>

        <div className="w-4/5">
          <ul className="flex flex-row justify-center gap-10 text-gray-400 ">
            <li className="hover:underline">LATEST</li>
            <li className="hover:underline">POPULAR</li>
            <li className="hover:underline text-purple-800">PREMIUM</li>
          </ul>
        </div>

        <div className="md:w-4/5 w-auto md:flex md:flex-row flex-col md:items-center md:justify-between gap-10">
          <StocksCard path={"/credit-1.png"} title={"yes"}></StocksCard>
          <StocksCard path={"/credit-2.png"} title={"da"}></StocksCard>
          <StocksCard path={"/credit-3.png"} title={"no"}></StocksCard>
        </div>

        <div className="text-black flex border-2 mt-10 mb-10 p-3 rounded-full justify-center w-36 bg-white">
          Next Page
        </div>
      </div>
    </div>
  );
}
