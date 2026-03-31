export const homepageHeroControls = [
  {
    label: "Creativity",
    hint: "Balanced",
    value: "71%",
    trackClassName: "bg-sky-100",
    fillClassName: "bg-sky-500",
  },
  {
    label: "Expression",
    hint: "Natural",
    value: "84%",
    trackClassName: "bg-amber-100",
    fillClassName: "bg-amber-500",
  },
  {
    label: "Flow",
    hint: "Steady",
    value: "62%",
    trackClassName: "bg-emerald-100",
    fillClassName: "bg-emerald-500",
  },
] as const;

export const homepageHeroHistory = [
  {
    title: "Launch teaser - take 04",
    voice: "Maya",
    time: "2m ago",
    avatarClassName: "bg-amber-100 text-amber-700",
  },
  {
    title: "Product tour intro",
    voice: "Avery",
    time: "18m ago",
    avatarClassName: "bg-sky-100 text-sky-700",
  },
] as const;

export const homepageVoiceLibrary = [
  {
    name: "Maya",
    role: "Product Explainer",
    tag: "Default",
    rowClassName: "border-amber-200 bg-amber-50/60",
    buttonClassName: "border-amber-200 bg-white text-amber-700",
    tagClassName: "bg-amber-100 text-amber-800",
  },
  {
    name: "Aaron",
    role: "Audiobook",
    tag: "Narration",
    rowClassName: "border-zinc-200/80 bg-white",
    buttonClassName: "border-zinc-200 bg-zinc-50 text-zinc-700",
    tagClassName: "bg-sky-50 text-sky-700",
  },
  {
    name: "Kei",
    role: "Support",
    tag: "Conversational",
    rowClassName: "border-zinc-200/80 bg-white",
    buttonClassName: "border-zinc-200 bg-zinc-50 text-zinc-700",
    tagClassName: "bg-emerald-50 text-emerald-700",
  },
] as const;

export const homepageProblemTakes = [
  {
    take: "Take 01",
    title: "Flat emphasis",
    note: "Low contrast",
  },
  {
    take: "Take 02",
    title: "Robotic delivery",
    note: "Rigid pacing",
  },
  {
    take: "Take 03",
    title: "Off-brand pacing",
    note: "Needs direction",
  },
] as const;

export const homepageProblemTags = [
  "Weak delivery",
  "Robotic pacing",
  "No emotional range",
] as const;

export const homepageSolutionControls = [
  {
    label: "Expression",
    value: "Dramatic",
    width: "82%",
    trackClassName: "bg-emerald-100",
    fillClassName: "bg-emerald-500",
  },
  {
    label: "Natural Flow",
    value: "Varied",
    width: "74%",
    trackClassName: "bg-teal-100",
    fillClassName: "bg-teal-500",
  },
  {
    label: "Creativity",
    value: "Expressive",
    width: "68%",
    trackClassName: "bg-cyan-100",
    fillClassName: "bg-cyan-500",
  },
] as const;

export const homepageSolutionTags = [
  "Consistent tone",
  "Clear pacing",
  "Publish-ready",
] as const;

export const homepageHowItWorksSteps = [
  {
    step: "01",
    title: "Write your script",
    description:
      "Paste up to 5,000 characters, shape the wording, and prepare your narration in one workspace.",
  },
  {
    step: "02",
    title: "Choose a voice",
    description:
      "Start with a built-in voice or switch to a custom voice tailored to your brand.",
  },
  {
    step: "03",
    title: "Direct and generate",
    description:
      "Adjust creativity, voice variety, expression, and flow, then generate polished audio.",
  },
] as const;

export type HomepageFeatureIcon =
  | "slidersHorizontal"
  | "mic"
  | "libraryBig"
  | "messageSquareQuote"
  | "settings2"
  | "sparkles";

export const homepageFeatures = [
  {
    icon: "slidersHorizontal" as HomepageFeatureIcon,
    iconWrapperClassName:
      "bg-blue-50/85 text-blue-600 ring-1 ring-inset ring-blue-100",
    title: "Precision Controls",
    description:
      "Don't leave it to chance. Fine-tune your audio by adjusting creativity, voice variety, expression range, and natural flow on the fly.",
  },
  {
    icon: "mic" as HomepageFeatureIcon,
    iconWrapperClassName:
      "bg-orange-50/85 text-orange-600 ring-1 ring-inset ring-orange-100",
    title: "Voice Cloning",
    description:
      "Securely clone your own voice to generate unlimited, consistent audio for your personal brand without having to record it yourself.",
  },
  {
    icon: "libraryBig" as HomepageFeatureIcon,
    iconWrapperClassName:
      "bg-emerald-50/85 text-emerald-600 ring-1 ring-inset ring-emerald-100",
    title: "Explore Voices",
    description:
      "Browse a diverse library of pre-made AI voices. Find the exact style, tone, and character you need for your specific project.",
  },
  {
    icon: "messageSquareQuote" as HomepageFeatureIcon,
    iconWrapperClassName:
      "bg-amber-50/85 text-amber-600 ring-1 ring-inset ring-amber-100",
    title: "Long-form Ready",
    description:
      "Generate up to 5,000 characters at a time. Perfect for narrating entire audiobook chapters, lengthy podcasts, or deep-dive video essays.",
  },
  {
    icon: "settings2" as HomepageFeatureIcon,
    iconWrapperClassName:
      "bg-rose-50/85 text-rose-600 ring-1 ring-inset ring-rose-100",
    title: "Consistent Outputs",
    description:
      "Lock in your parameters so every generation sounds like it was recorded in the exact same studio session, on the exact same day.",
  },
  {
    icon: "sparkles" as HomepageFeatureIcon,
    iconWrapperClassName:
      "bg-zinc-50 text-zinc-600 ring-1 ring-inset ring-zinc-200/80",
    title: "Studio Quality",
    description:
      "Export high-fidelity, polished audio files that are immediately ready to drop into your timeline or publish to your audience.",
  },
] as const;
