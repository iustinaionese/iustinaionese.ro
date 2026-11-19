import { Hero } from "@/components/hero/Hero";
import { ValueStory } from "@/components/home/ValueStory";
import { PositioningBar } from "@/components/home/PositioningBar";
import { SystemDiagram } from "@/components/home/SystemDiagram";
import { Capabilities } from "@/components/home/Capabilities";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { EngineeringProof } from "@/components/home/EngineeringProof";
import { Testimonials } from "@/components/home/Testimonials";
import { Process } from "@/components/home/Process";
import { Pricing } from "@/components/home/Pricing";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStory />
      <PositioningBar />
      <div className="theme-light">
        <SystemDiagram />
      </div>
      <FeaturedWork />
      <div className="theme-light">
        <Testimonials />
      </div>
      <Capabilities />
      <div className="theme-light">
        <EngineeringProof />
      </div>
      <Process />
      <div className="theme-light">
        <Pricing />
      </div>
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
