import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col">
      <Header></Header>
      <Hero></Hero>
    </main>
  );
}
