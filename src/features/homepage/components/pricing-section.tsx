import Link from "next/link";

import { CountUpOnView } from "@/components/count-up-on-view";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative z-10 mx-auto my-8 max-w-[1080px] rounded-[2.75rem] bg-[#fffaf4] px-6 py-14 text-center md:py-16"
    >
      <div className="mx-auto max-w-[46rem]">
        <h2 className="text-balance text-[2.8rem] font-semibold leading-[0.96] tracking-[-0.045em] text-zinc-900 md:text-[3.55rem]">
          Studio-grade audio with{" "}
          <span className="font-serif text-[0.98em] font-medium italic text-zinc-700">
            precise control
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-[36rem] text-[16px] font-medium leading-[1.7] text-zinc-600 md:text-[17px]">
          Shape delivery with fine-tuned controls, generate long-form voice
          output, and work with built-in or custom voices in one workflow.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-10 sm:mt-12 md:grid-cols-3 md:gap-6 lg:gap-10">
        <div>
          <p className="text-[3.3rem] font-semibold leading-[0.88] tracking-[-0.055em] text-zinc-900 md:text-[4.25rem]">
            <CountUpOnView to={4} />
          </p>
          <p className="mx-auto mt-3 max-w-[17rem] text-[14px] font-medium leading-[1.65] text-zinc-600 md:max-w-[16rem] md:text-[15px]">
            Precision controls for creativity, voice variety, expression, and
            flow
          </p>
        </div>

        <div>
          <p className="text-[3.3rem] font-semibold leading-[0.88] tracking-[-0.055em] text-zinc-900 md:text-[4.25rem]">
            <CountUpOnView to={5} suffix="k" />
          </p>
          <p className="mx-auto mt-3 max-w-[17rem] text-[14px] font-medium leading-[1.65] text-zinc-600 md:max-w-[16rem] md:text-[15px]">
            Characters per generation for long-form voice output
          </p>
        </div>

        <div>
          <p className="text-balance text-[2.05rem] font-semibold leading-[0.9] tracking-[-0.045em] text-zinc-900 md:text-[2.6rem]">
            Built-in or custom
          </p>
          <p className="mx-auto mt-3 max-w-[17rem] text-[14px] font-medium leading-[1.65] text-zinc-600 md:max-w-[16rem] md:text-[15px]">
            Start fast or tailor a voice to your brand
          </p>
        </div>
      </div>

      <div className="mt-10 sm:mt-12">
        <Link
          href="/dashboard"
          className="inline-flex h-12 items-center rounded-full bg-zinc-900 px-7 text-[15px] font-medium text-white shadow-sm transition-colors hover:bg-zinc-800"
        >
          Start creating
        </Link>
      </div>
    </section>
  );
}
