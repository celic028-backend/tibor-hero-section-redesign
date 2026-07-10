import PageBackground from "./components/PageBackground";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Results from "./components/Results";
import IClosedWidget from "./components/IClosedWidget";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-bg">
      <PageBackground />
      <div className="relative z-10">
        <Hero />
        <Benefits />
        <Results />
      </div>
      <IClosedWidget />
    </main>
  );
}
