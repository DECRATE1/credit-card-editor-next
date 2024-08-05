import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Stocks from "./components/Stocks/Stocks";
import TextPart from "./components/TextPart/TextPart";

export default function Home() {
  return (
    <main className="flex w-screen h-full flex-col">
      <Header></Header>
      <Hero></Hero>
      <TextPart></TextPart>
      <Stocks></Stocks>
      <Info></Info>
    </main>
  );
}
