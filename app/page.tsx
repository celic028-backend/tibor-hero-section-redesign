import Hero from "./components/Hero";
import Booking from "./components/Booking";
import Benefits from "./components/Benefits";
import Results from "./components/Results";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Booking />
      <Benefits />
      <Results />
    </main>
  );
}
