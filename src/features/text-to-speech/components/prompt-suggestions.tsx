"use client";

import {
    BookOpen,
    Smile,
    Mic,
    Languages,
    Clapperboard,
    Gamepad2,
    Podcast,
    Brain,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import type { LucideIcon } from "lucide-react";

const PROMPT_SUGGESTIONS: {
    label: string;
    prompt: string;
    icon: LucideIcon;
}[] = [
    {
        label: "Narrate a story",
        prompt:
            "Deep in a village surrounded by foggy mountains, an elderly clockmaker built timepieces that never showed the correct hour, yet somehow always revealed the truth. Then, on a stormy night, a traveler arrived asking for a clock that could reveal what lay ahead.",
        icon: BookOpen,
    },
    {
        label: "Tell a silly joke",
        prompt:
            "Why do scientists avoid trusting atoms? Because they make up absolutely everything! I even asked one atom if it was certain, and it said it had lost an electron. I asked, really? It answered, I'm positive!",
        icon: Smile,
    },
    {
        label: "Record an advertisement",
        prompt:
            "Meet BrightBean Coffee, the rich and velvety roast your mornings have been waiting for. Grown on high-altitude farms, carefully slow-roasted, and shipped fresh to your doorstep every week. Start your day with something special and claim your first bag free.",
        icon: Mic,
    },
    {
        label: "Speak in different languages",
        prompt:
            "Hello and welcome! Today we are taking a trip across the globe through language. Bonjour, comment allez-vous? Hola, bienvenidos a todos. Guten Tag, herzlich willkommen. Ciao a tutti, benvenuti. Let's enjoy the wonder of speaking in many tongues.",
        icon: Languages,
    },
    {
        label: "Direct a dramatic movie scene",
        prompt:
            "Rain pounded the glass as she slowly turned toward him. You knew all along, didn't you? she said, her voice trembling. He moved closer, his jaw tight. I made the only choice I could. The quiet between them felt heavier than the thunder outside.",
        icon: Clapperboard,
    },
    {
        label: "Hear from a video game character",
        prompt:
            "Listen carefully, adventurer. Ashenvale is falling apart, and the Crystal of Eternity now lies broken into seven fragments. Only you can restore it. Take up your weapon, steel your resolve, and meet me at the Gates of Dawn. We do not have much time.",
        icon: Gamepad2,
    },
    {
        label: "Introduce your podcast",
        prompt:
            "Hey everyone, and welcome back to The Curious Mind, the show where we explore the stories, science, and surprising ideas that shape the world around us. I'm your host, and today's guest is here to challenge the way you think about everything.",
        icon: Podcast,
    },
    {
        label: "Guide a meditation class",
        prompt:
            "Gently close your eyes and take a slow, deep breath in. Hold it softly, then let it go. Feel the stress of the day begin to loosen and fade. With every breath, allow yourself to settle deeper into stillness. There is nowhere to go, nothing to do, only this moment. Breathe in calm, and breathe out tension.",
        icon: Brain,
    },
];

export function PromptSuggestions({
    onSelect,
}: {
    onSelect: (prompt: string) => void;
}) {
    return (
        <div className="space-y-2.5">
            <p className="text-sm text-muted-foreground">Get started with</p>
            <div className="flex flex-wrap gap-2">
                {PROMPT_SUGGESTIONS.map((suggestion) => (
                    <Badge
                        key={suggestion.label}
                        variant="outline"
                        className="cursor-pointer gap-1.5 py-1 px-2.5 text-xs hover:bg-accent rounded-md"
                        onClick={() => onSelect(suggestion.prompt)}
                    >
                        <suggestion.icon className="size-3.5 shrink-0" />
                        {suggestion.label}
                    </Badge>
                ))}
            </div>
        </div>
    );
};
