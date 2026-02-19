import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicesGrid from "@/components/ServicesGrid";
import TrustCredentials from "@/components/TrustCredentials";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import CaseStudies from "@/components/CaseStudies";
import ProcessSection from "@/components/ProcessSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0B]">
      <Navbar />
      <ScrollReveal direction="none" duration={0.8}>
        <Hero />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <ProblemSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <ServicesGrid />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <TrustCredentials />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <ArchitectureDiagram />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <CaseStudies />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <ProcessSection />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <Pricing />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.1}>
        <FAQ />
      </ScrollReveal>
      {/* Team video moved into TrustCredentials for better context */}
      <ScrollReveal direction="up" delay={0.1}>
        <CTASection />
      </ScrollReveal>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
