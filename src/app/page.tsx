import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import RatingList from "./components/Rating/Rating";
import Stocks from "./components/Stocks/Stocks";
import TextPart from "./components/TextPart/TextPart";
import Ad from "./components/Advertising/Advertising";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col">
      <Header></Header>
      <Hero></Hero>
      <TextPart></TextPart>
      <Stocks></Stocks>
      <Info></Info>
      <RatingList></RatingList>
      <Ad></Ad>
      <Footer></Footer>
    </main>
  );
}
