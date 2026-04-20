import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import MotivationSection from "@/components/sections/MotivationSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import DomainsSection from "@/components/sections/DomainsSection";
import ConformanceSection from "@/components/sections/ConformanceSection";
import EnvelopeSection from "@/components/sections/EnvelopeSection";
import VersionsSection from "@/components/sections/VersionsSection";
import DownloadsSection from "@/components/sections/DownloadsSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      <HeroSection />
      <MotivationSection />
      <ArchitectureSection />
      <DomainsSection />
      <ConformanceSection />
      <EnvelopeSection />
      <VersionsSection />
      <DownloadsSection />
      <Footer />
    </main>
  );
};

export default Index;
