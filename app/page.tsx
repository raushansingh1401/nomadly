import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import FeaturedJourneys from "@/components/sections/FeaturedJourneys";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <div className="relative">
        <Navbar />
        <Hero />
      </div>

      {/* Featured packages */}
      <FeaturedJourneys />

      {/* Contact */}
      <ContactSection />
    </main>
  );
}