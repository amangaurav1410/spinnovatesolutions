import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Pillars } from "@/components/home/Pillars";
import { Workflow } from "@/components/home/Workflow";
import { FeaturedCases } from "@/components/home/FeaturedCases";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Stats />
      <Pillars />
      <Workflow />
      <FeaturedCases />
      <Testimonials />
      <CtaBanner />
    </div>
  );
}
