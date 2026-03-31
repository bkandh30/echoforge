import Link from "next/link";

import { homepageHowItWorksSteps } from "@/features/homepage/data/homepage-content";

export function HowItWorksSection() {
  return (
    <section className="relative z-10 mx-auto max-w-[1200px] px-6 py-22 md:py-24">
      <div className="relative overflow-hidden rounded-[3rem] border border-[#ddd9e8] bg-[#f1f0f7] px-6 py-12 shadow-[0_24px_70px_rgba(24,24,27,0.05)] sm:px-8 sm:py-14 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#fcfcfe_0%,transparent_42%),radial-gradient(circle_at_bottom_right,#e3e0ee_0%,transparent_34%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-80 bg-[linear-gradient(to_right,#b8b1cf14_1px,transparent_1px),linear-gradient(to_bottom,#b8b1cf14_1px,transparent_1px)] bg-[size:28px_28px]" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="block text-[13px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
            How it works
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.01] tracking-tight text-zinc-900 md:text-5xl">
            From script to{" "}
            <span className="font-serif font-medium italic text-zinc-700">
              studio audio
            </span>{" "}
            in minutes
          </h2>
        </div>

        <div className="relative mt-10 grid grid-cols-1 gap-4 sm:mt-12 md:grid-cols-3 md:gap-5 lg:gap-6">
          {homepageHowItWorksSteps.map(({ step, title, description }) => (
            <div
              key={step}
              className="rounded-[2.1rem] border border-white/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.97)_0%,rgba(241,240,248,0.94)_100%)] p-6 shadow-[0_16px_34px_rgba(24,24,27,0.05)] backdrop-blur-sm sm:p-7"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-[1.15rem] border border-[#d4cee6] bg-[linear-gradient(180deg,#ffffff_0%,#e5e1f0_100%)] text-sm font-semibold tracking-[-0.02em] text-[#5f5a7b] shadow-[0_12px_24px_rgba(95,90,123,0.12)]">
                  {step}
                </div>
                <span className="h-px flex-1 bg-[#d8d3e6]" />
              </div>

              <h3 className="mt-6 max-w-[14rem] text-[1.4rem] font-semibold leading-[1.08] tracking-tight text-zinc-900 md:text-[1.5rem]">
                {title}
              </h3>

              <p className="mt-3 text-[15px] font-medium leading-7 text-zinc-600">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative mt-10 text-center sm:mt-12">
          <Link
            href="/dashboard"
            className="inline-flex h-12 items-center rounded-full bg-zinc-900 px-7 text-[15px] font-medium text-white shadow-sm transition-colors hover:bg-zinc-800"
          >
            Start creating
          </Link>
        </div>
      </div>
    </section>
  );
}
