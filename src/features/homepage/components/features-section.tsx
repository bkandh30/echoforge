import type { ComponentType } from "react";
import {
  LibraryBig,
  MessageSquareQuote,
  Mic,
  Settings2,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

import {
  type HomepageFeatureIcon,
  homepageFeatures,
} from "@/features/homepage/data/homepage-content";

const featureIcons: Record<HomepageFeatureIcon, ComponentType<{ className?: string }>> = {
  slidersHorizontal: SlidersHorizontal,
  mic: Mic,
  libraryBig: LibraryBig,
  messageSquareQuote: MessageSquareQuote,
  settings2: Settings2,
  sparkles: Sparkles,
};

export function FeaturesSection() {
  return (
    <section className="relative z-10 mx-auto max-w-[1200px] px-6 pb-22 pt-24">
      <div className="mb-14 text-center md:mb-15">
        <span className="mb-4 block text-[15px] font-bold uppercase tracking-wider text-zinc-400">
          Features
        </span>
        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
          Everything you need <br />
          <span className="font-serif font-medium italic">
            to sound professional
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {homepageFeatures.map(({ icon, iconWrapperClassName, title, description }) => {
          const Icon = featureIcons[icon];

          return (
            <div
              key={title}
              className="flex h-full flex-col rounded-[2rem] border border-zinc-200/70 bg-white/92 p-8 shadow-[0_10px_24px_rgba(24,24,27,0.04)] transition-shadow hover:shadow-[0_14px_30px_rgba(24,24,27,0.06)]"
            >
              <div className="mb-3.5 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-[1rem] ${iconWrapperClassName}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-900">{title}</h3>
              </div>
              <p className="text-[15px] font-medium leading-6 text-zinc-600">
                {description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
