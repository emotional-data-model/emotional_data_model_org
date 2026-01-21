import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import WhySection from "@/components/sections/WhySection";
import WhatSection from "@/components/sections/WhatSection";
import DdnaSection from "@/components/sections/DdnaSection";
import SubstrateSection from "@/components/sections/SubstrateSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import DownloadsSection from "@/components/sections/DownloadsSection";
import VersionSection from "@/components/sections/VersionSection";
import CitationSection from "@/components/sections/CitationSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      <HeroSection />
      <div className="section-divider" />
      <WhySection />
      <WhatSection />
      <div className="section-divider" />
      <DdnaSection />
      <SubstrateSection />
      <div className="section-divider" />
      <UseCasesSection />
      <DownloadsSection />
      <div className="section-divider" />
      <VersionSection />
      <CitationSection />
      <div className="section-divider" />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
