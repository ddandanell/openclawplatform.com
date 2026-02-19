import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicesGrid from "@/components/ServicesGrid";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import CaseStudies from "@/components/CaseStudies";
import ProcessSection from "@/components/ProcessSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0B]">
      <Navbar />
      <Hero />
      <ProblemSection />
      <ServicesGrid />
      <ArchitectureDiagram />
      <CaseStudies />
      <ProcessSection />
      <Pricing />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
