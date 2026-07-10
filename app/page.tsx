import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Results from "./components/Results";
import IClosedWidget from "./components/IClosedWidget";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Benefits />
      <Results />
      <IClosedWidget />
    </main>
  );
}
