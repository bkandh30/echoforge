import { FeaturesSection } from "@/features/homepage/components/features-section";
import { HomepageFooter } from "@/features/homepage/components/homepage-footer";
import { HomepageHero } from "@/features/homepage/components/homepage-hero";
import { HomepageNav } from "@/features/homepage/components/homepage-nav";
import { HowItWorksSection } from "@/features/homepage/components/how-it-works-section";
import { PricingSection } from "@/features/homepage/components/pricing-section";
import { ProblemSection } from "@/features/homepage/components/problem-section";
import { SolutionSection } from "@/features/homepage/components/solution-section";

export default function HomePage() {
  return (
    <div className="relative z-0 min-h-screen overflow-hidden bg-[#fffafa] font-sans text-zinc-900 selection:bg-orange-200/50">
      <div className="absolute inset-0 -z-20 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,white,transparent_85%)]" />
      <div className="pointer-events-none fixed left-1/2 top-0 -z-10 h-[800px] w-[100vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,#ffe4d6_0%,transparent_70%)] opacity-60" />

      <HomepageNav />

      <main className="relative z-10 mx-auto max-w-[1200px] px-6 pb-20 pt-40 text-center">
        <HomepageHero />
      </main>

      <ProblemSection />
      <SolutionSection />
      <PricingSection />
      <HowItWorksSection />
      <FeaturesSection />
      <HomepageFooter />
    </div>
  );
}
