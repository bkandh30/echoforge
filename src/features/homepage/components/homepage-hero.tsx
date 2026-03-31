import Link from "next/link";
import { CheckCircle2, Mic, Play, SlidersHorizontal, Sparkles } from "lucide-react";

import {
  homepageHeroControls,
  homepageHeroHistory,
  homepageVoiceLibrary,
} from "@/features/homepage/data/homepage-content";

export function HomepageHero() {
  return (
    <section className="mx-auto max-w-5xl">
      <div className="mx-auto max-w-3xl">
        <h1 className="mx-auto max-w-4xl text-balance text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-zinc-900 md:text-[4.85rem]">
          A modern voice studio for{" "}
          <span className="font-serif text-[0.98em] font-medium italic text-zinc-700">
            creators, products, and teams
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-[18px] font-medium leading-8 text-zinc-500 md:text-[19px]">
          Create natural AI voiceovers, explore built-in voices, and build
          custom voices in a clean, flexible workflow.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/dashboard"
            className="inline-flex h-12 items-center rounded-full bg-zinc-900 px-6 text-[15px] font-medium text-white shadow-sm transition-colors hover:bg-zinc-800"
          >
            Start creating
          </Link>
          <Link
            href="/voices"
            className="inline-flex h-12 items-center rounded-full border border-zinc-200 bg-white px-6 text-[15px] font-medium text-zinc-700 shadow-sm transition-colors hover:border-zinc-300 hover:text-zinc-900"
          >
            Explore voices
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-5xl flex-col gap-4 text-left lg:relative lg:block lg:pb-10">
        <div className="overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white shadow-[0_24px_70px_rgba(24,24,27,0.08)]">
          <div className="border-b border-zinc-200/80 bg-[#fcfcf9] px-4 py-3 sm:px-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-1.5 sm:flex">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-tight text-zinc-900">
                    Text-to-speech workspace
                  </p>
                  <p className="text-xs font-medium text-zinc-500">
                    Generate, review, and refine in one view
                  </p>
                </div>
              </div>

              <div className="hidden items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700 sm:flex">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Ready to generate
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[minmax(0,1.55fr)_300px]">
            <div className="space-y-4 border-b border-zinc-200/80 p-4 sm:p-6 lg:border-b-0 lg:border-r">
              <div className="flex flex-col gap-3 rounded-[1.5rem] border border-amber-100 bg-amber-50/50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-sm shadow-amber-100">
                    <Mic className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700/70">
                      Selected voice
                    </p>
                    <p className="text-sm font-semibold tracking-tight text-zinc-900">
                      Maya - Product Explainer
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
                  <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-sky-700">
                    Built-in
                  </span>
                  <span className="rounded-full border border-amber-200 bg-white px-3 py-1.5 text-amber-700">
                    Preview 18s
                  </span>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-zinc-200/80 bg-white">
                <div className="flex items-center justify-between border-b border-zinc-200/80 bg-[#fcfcfa] px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold tracking-tight text-zinc-900">
                      Script
                    </p>
                    <p className="text-xs font-medium text-zinc-500">
                      1,284 / 5,000 characters
                    </p>
                  </div>
                  <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                    Auto-save on
                  </span>
                </div>

                <div className="space-y-4 px-4 py-5 text-[15px] leading-7 text-zinc-600 sm:px-5">
                  <p className="font-medium text-zinc-900">
                    Introducing the fastest way to turn product copy into
                    polished voiceovers.
                  </p>
                  <p>
                    Drop in a launch script, choose a built-in voice, then
                    fine-tune pacing, expression, and delivery before you
                    generate.
                  </p>
                  <p>
                    Review past takes, swap voices, and keep every version in
                    one clean workflow.
                  </p>
                </div>

                <div className="flex flex-col gap-3 border-t border-zinc-200/80 bg-[#fcfcfa] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3 text-xs font-medium text-zinc-500">
                    <div className="flex h-9 items-end gap-1 rounded-full border border-amber-200 bg-amber-50/70 px-3 py-2">
                      <span className="h-2.5 w-1 rounded-full bg-amber-200" />
                      <span className="h-4 w-1 rounded-full bg-amber-500" />
                      <span className="h-3 w-1 rounded-full bg-orange-300" />
                      <span className="h-5 w-1 rounded-full bg-zinc-900" />
                      <span className="h-2.5 w-1 rounded-full bg-amber-200" />
                    </div>
                    <span>
                      Estimated cost <span className="text-amber-700">$0.0216</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-10 items-center rounded-full border border-sky-200 bg-sky-50 px-4 text-sm font-medium text-sky-700">
                      History
                    </span>
                    <span className="inline-flex h-10 items-center rounded-full bg-zinc-900 px-4 text-sm font-medium text-white">
                      Generate audio
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 bg-[#fafaf7] p-4 sm:p-5">
              <div className="rounded-[1.5rem] border border-zinc-200/80 bg-white p-4">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold tracking-tight text-zinc-900">
                      Generation controls
                    </p>
                    <p className="text-xs font-medium text-zinc-500">
                      Shape tone and consistency
                    </p>
                  </div>
                  <SlidersHorizontal className="h-4 w-4 text-sky-500" />
                </div>

                <div className="space-y-4">
                  {homepageHeroControls.map(
                    ({ label, hint, value, trackClassName, fillClassName }) => (
                      <div key={label} className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-medium">
                          <span className="text-zinc-700">{label}</span>
                          <span className="text-zinc-400">{hint}</span>
                        </div>
                        <div className={`h-2 rounded-full ${trackClassName}`}>
                          <div
                            className={`h-full rounded-full ${fillClassName}`}
                            style={{ width: value }}
                          />
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-zinc-200/80 bg-white p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold tracking-tight text-zinc-900">
                      Recent history
                    </p>
                    <p className="text-xs font-medium text-zinc-500">
                      Keep every take within reach
                    </p>
                  </div>
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-semibold text-amber-700">
                    12 items
                  </span>
                </div>

                <div className="space-y-2.5">
                  {homepageHeroHistory.map(
                    ({ title, voice, time, avatarClassName }) => (
                      <div
                        key={title}
                        className="flex items-center gap-3 rounded-[1rem] border border-zinc-200/80 px-3 py-2.5"
                      >
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-xl text-xs font-semibold ${avatarClassName}`}
                        >
                          {voice.slice(0, 2)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-zinc-900">
                            {title}
                          </p>
                          <p className="text-xs font-medium text-zinc-500">
                            {voice} - {time}
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-zinc-200/80 bg-white p-4 shadow-[0_20px_45px_rgba(24,24,27,0.1)] lg:absolute lg:-bottom-2 lg:right-8 lg:w-[320px]">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-semibold tracking-tight text-zinc-900">
                Built-in voice library
              </p>
              <p className="text-xs font-medium text-zinc-500">
                Browse, preview, and switch instantly
              </p>
            </div>
            <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[11px] font-semibold text-sky-700">
              248 voices
            </span>
          </div>

          <div className="space-y-2.5">
            {homepageVoiceLibrary.map(
              ({
                name,
                role,
                tag,
                rowClassName,
                buttonClassName,
                tagClassName,
              }) => (
                <div
                  key={name}
                  className={`flex items-center gap-3 rounded-[1rem] border px-3 py-2.5 ${rowClassName}`}
                >
                  <button
                    type="button"
                    className={`flex h-9 w-9 items-center justify-center rounded-full border ${buttonClassName}`}
                  >
                    <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                  </button>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-zinc-900">{name}</p>
                    <p className="truncate text-xs font-medium text-zinc-500">
                      {role}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${tagClassName}`}
                  >
                    {tag}
                  </span>
                </div>
              ),
            )}
          </div>

          <div className="mt-4 flex items-center gap-3 rounded-[1rem] border border-dashed border-rose-200 bg-rose-50/40 px-3 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-rose-200 bg-white text-rose-500">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-900">Brand Narrator</p>
              <p className="text-xs font-medium text-zinc-500">
                Custom voice training ready
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
