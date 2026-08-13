import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandStatement } from "@/components/BrandStatement";
import { Services } from "@/components/Services";
import { AIShowcase } from "@/components/AIShowcase";
import { Portfolio } from "@/components/Portfolio";
import { WhySylo } from "@/components/WhySylo";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { AboutTeam } from "./components/AboutTeam";

/**
 * Celotna SYLO stran. Ta komponenta je edini vstopni point —
 * v klasičnem Vite projektu jo renderiraj iz App.tsx.
 */
export function SyloPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <BrandStatement />
        <AboutTeam />
        <Services />
        <AIShowcase />
        <Portfolio />
        <WhySylo />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default SyloPage;
