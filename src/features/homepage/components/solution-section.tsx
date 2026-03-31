import { CheckCircle2 } from "lucide-react";

import {
  homepageSolutionControls,
  homepageSolutionTags,
} from "@/features/homepage/data/homepage-content";

export function SolutionSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-24 pt-12 md:pt-20">
      <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-1 max-w-xl md:order-1">
          <span className="block text-[13px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
            The Solution
          </span>
          <h2 className="mt-3 text-[2.15rem] font-semibold leading-[0.98] tracking-tight text-zinc-900 sm:text-4xl md:text-5xl md:leading-[1.02]">
            Never settle for a <br />
            <span className="font-serif font-medium italic text-zinc-700">
              bad take again
            </span>
          </h2>
          <p className="mt-2.5 max-w-md text-lg leading-7 text-zinc-500 sm:mt-3.5 sm:max-w-lg">
            EchoForge gives you the director&apos;s chair. Four precise sliders
            allow you to shape creativity, voice variety, expression, and
            flow. The result? Audio that sounds exactly how you heard it in
            your head.
          </p>
          <ul className="mt-3.5 space-y-2 sm:mt-5 sm:space-y-2.5">
            <li className="flex items-center gap-3 text-base font-medium text-zinc-600 sm:text-[17px]">
              <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-emerald-500" />
              Granular control over every parameter
            </li>
            <li className="flex items-center gap-3 text-base font-medium text-zinc-600 sm:text-[17px]">
              <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-emerald-500" />
              Generate up to 5,000 characters instantly
            </li>
            <li className="flex items-center gap-3 text-base font-medium text-zinc-600 sm:text-[17px]">
              <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-emerald-500" />
              Clone your own voice securely
            </li>
          </ul>
        </div>

        <div className="order-2 relative flex min-h-[304px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-[#d8ebe5] bg-[#f3faf7] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:min-h-[344px] sm:p-7 md:order-2">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#9fd4c214_1px,transparent_1px),linear-gradient(to_bottom,#9fd4c214_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="relative z-10 w-full max-w-[380px] rounded-[1.6rem] border border-zinc-200/80 bg-white/95 p-4 shadow-sm sm:p-4">
            <div className="flex items-center justify-between gap-3 border-b border-zinc-100 pb-3">
              <div>
                <p className="text-sm font-semibold tracking-tight text-zinc-900">
                  Tuned generation
                </p>
                <p className="text-xs font-medium text-zinc-500">
                  Delivery is aligned and ready to publish
                </p>
              </div>
              <span className="inline-flex h-7 shrink-0 items-center rounded-full border border-emerald-200 bg-emerald-50 px-2.5 text-[11px] font-semibold text-emerald-700">
                Approved take
              </span>
            </div>

            <div className="mt-2.5 rounded-[1.15rem] border border-emerald-100/80 bg-emerald-50/45 px-3 py-2.5">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-semibold tracking-tight text-zinc-900">
                    Maya - Product Explainer
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-zinc-500">
                    Version 04 tuned for launch narration
                  </p>
                </div>
                <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-emerald-700 shadow-sm">
                  Ready
                </span>
              </div>
            </div>

            <div className="mt-2.5 space-y-2">
              {homepageSolutionControls.map(
                ({ label, value, width, trackClassName, fillClassName }) => (
                  <div
                    key={label}
                    className="rounded-[1.1rem] border border-emerald-100/60 bg-white px-3 py-2.5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold tracking-tight text-zinc-900">
                        {label}
                      </p>
                      <span className="text-xs font-medium text-zinc-500">
                        {value}
                      </span>
                    </div>
                    <div className={`mt-2 h-2 rounded-full ${trackClassName}`}>
                      <div
                        className={`h-full rounded-full ${fillClassName}`}
                        style={{ width }}
                      />
                    </div>
                  </div>
                ),
              )}
            </div>

            <div className="mt-2.5 flex flex-wrap gap-2">
              {homepageSolutionTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-semibold text-zinc-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
