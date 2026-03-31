import Image from "next/image";
import Link from "next/link";

export function HomepageFooter() {
  return (
    <footer className="relative z-10 border-t border-zinc-200/60 py-7 sm:py-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-6 text-center md:flex-row md:items-center md:text-left">
        <Link href="/" className="flex items-center gap-2 px-0.5 py-0.5">
          <Image
            src="/logo.svg"
            alt="EchoForge"
            width={28}
            height={28}
            className="h-7 w-7 rounded-md"
          />
          <span className="text-sm font-semibold tracking-tight text-zinc-900">
            EchoForge
          </span>
        </Link>

        <div className="flex flex-col items-center gap-1 md:items-end md:text-right">
          <Link
            href="mailto:bhavya.kandhari.eng@gmail.com"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
          >
            Contact Support
          </Link>
          <span className="text-xs font-medium text-zinc-400">
            {`© ${new Date().getFullYear()} Bhavya Kandhari. All rights reserved.`}
          </span>
        </div>
      </div>
    </footer>
  );
}
