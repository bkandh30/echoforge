import { XCircle } from "lucide-react";

import {
  homepageProblemTags,
  homepageProblemTakes,
} from "@/features/homepage/data/homepage-content";

export function ProblemSection() {
  return (
    <section id="use-cases" className="mx-auto max-w-[1200px] px-6 pb-12 pt-20 md:pb-24">
      <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative flex min-h-[304px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-[#eaded1] bg-[#faf3ec] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:min-h-[360px] sm:p-8">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#cbb8a614_1px,transparent_1px),linear-gradient(to_bottom,#cbb8a614_1px,transparent_1px)] bg-[size:24px_24px]" />

          <div className="relative z-10 w-full max-w-[380px] rounded-[1.6rem] border border-zinc-200/80 bg-white/95 p-4 shadow-sm sm:p-5">
            <div className="flex items-center justify-between gap-3 border-b border-zinc-100 pb-3">
              <div>
                <p className="text-sm font-semibold tracking-tight text-zinc-900">
                  Generation review
                </p>
                <p className="text-xs font-medium text-zinc-500">
                  Recent takes missed the intended delivery
                </p>
              </div>
              <span className="inline-flex h-7 shrink-0 items-center rounded-full border border-rose-200 bg-rose-50 px-2.5 text-[11px] font-semibold text-rose-700">
                3 failed takes
              </span>
            </div>

            <div className="mt-3 space-y-2 sm:space-y-2.5">
              {homepageProblemTakes.map(({ take, title, note }) => (
                <div
                  key={take}
                  className="flex items-center gap-3 rounded-[1.1rem] border border-rose-100/70 bg-rose-50/35 px-3 py-2.5 sm:py-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-rose-500 shadow-sm">
                    <XCircle className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold tracking-tight text-zinc-900">
                        {title}
                      </p>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                        {take}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-medium text-zinc-500">
                      {note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {homepageProblemTags.map((tag) => (
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

        <div className="max-w-xl">
          <span className="block text-[13px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
            The Problem
          </span>
          <h2 className="mt-3 text-[2.15rem] font-semibold leading-[0.98] tracking-tight text-zinc-900 sm:text-4xl md:text-5xl md:leading-[1.02]">
            You lose control <br />
            <span className="font-serif font-medium italic text-zinc-700">
              once you hit generate
            </span>
          </h2>
          <p className="mt-3 max-w-lg text-lg leading-7 text-zinc-500 sm:mt-4 sm:max-w-xl">
            You&apos;ve written a great script. You know exactly how it should
            sound. But when standard AI reads it, it falls flat. You&apos;re
            forced to re-generate blindly, hoping the AI randomly guesses the
            emotion you wanted.
          </p>
          <ul className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
            <li className="flex items-center gap-3 text-base font-medium text-zinc-600 sm:text-[17px]">
              <XCircle className="h-4.5 w-4.5 shrink-0 text-rose-500" />
              Wasting credits on bad takes
            </li>
            <li className="flex items-center gap-3 text-base font-medium text-zinc-600 sm:text-[17px]">
              <XCircle className="h-4.5 w-4.5 shrink-0 text-rose-500" />
              Settling for monotone delivery
            </li>
            <li className="flex items-center gap-3 text-base font-medium text-zinc-600 sm:text-[17px]">
              <XCircle className="h-4.5 w-4.5 shrink-0 text-rose-500" />
              No way to fine-tune the final output
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
