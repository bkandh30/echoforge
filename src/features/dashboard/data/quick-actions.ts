export interface QuickAction {
    title: string;
    description: string;
    gradient: string;
    href: string;
}

export const quickActions: QuickAction[] = [
    {
        title: "Tell a Tale",
        description: "Give your stories voice with rich, emotive AI narration",
        gradient: "from-cyan-400 to-cyan-50",
        href: "/text-to-speech?text=At the edge of a sun-bleached desert, an old mapmaker drew cartographies of places that didn't exist—until they did. One morning, a child with dusty shoes arrived and asked for a map to yesterday. The mapmaker smiled and began to draw.",
    },
    {
        title: "Create a Commercial",
        description: "Produce polished ad spots using natural-sounding AI voiceovers",
        gradient: "from-pink-400 to-pink-100",
        href: "/text-to-speech?text=Meet TerraRest — the mattress that remembers how you sleep. Engineered with adaptive foam that learns your curves and contours night after night. Drift off faster. Wake up lighter. Transform your bedroom into a sanctuary. Order today and sleep on it risk-free for 100 nights.",
    },
    {
        title: "Film Dialogue",
        description: "Add powerful spoken dialogue to your film and video projects",
        gradient: "from-violet-500 to-violet-100",
        href: "/text-to-speech?text=The elevator doors slid open. She stood there, briefcase in hand. We need to talk, she said. He didn't move. I've been expecting this. The floor numbers ticked past. When we get to twelve, one of us leaves. The other stays. Your call.",
    },
    {
        title: "Character Voiceover",
        description: "Enrich gaming experiences with distinctive character voices",
        gradient: "from-orange-400 to-orange-100",
        href: "/text-to-speech?text=Welcome aboard, rookie. This is the Nebula Runner, and I'm Captain Vex. We've got a cargo hold full of contraband, three systems on our tail, and a jump gate that closes in six hours. Strap in. Follow orders. Don't ask questions. Let's see if you've got what it takes.",
    },
    {
        title: "Podcast Intro",
        description: "Make a memorable first impression on every episode",
        gradient: "from-blue-500 to-blue-100",
        href: "/text-to-speech?text=What's up, night owls? This is Byte by Byte — the show where we break down the tech that's actually changing your life. I'm your host, and in this episode we're diving into AI, automation, and why your job might look completely different in five years. Let's get into it.",
    },
    {
        title: "Meditation Guide",
        description: "Produce serene, mindful audio for relaxation and wellness",
        gradient: "from-lime-400 to-lime-100",
        href: "/text-to-speech?text=Picture yourself walking through a forest. Ancient trees tower above you. Sunlight filters through the leaves. With each step, the ground softens beneath your feet. The birdsong fades. The wind carries the scent of moss and earth. You are safe here. You are held. Breathe, and rest.",
    },
];