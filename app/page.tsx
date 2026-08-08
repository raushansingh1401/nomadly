import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedJourneys from "@/components/sections/FeaturedJourneys";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Navbar />
        <Hero />
      </div>

      <FeaturedJourneys />
    </main>
  );
}