import Image from "next/image";
import Link from "next/link";

export function HomepageNav() {
  return (
    <div className="fixed left-0 right-0 top-5 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-1 rounded-full border border-zinc-200/80 bg-white/92 px-1.5 py-1.5 shadow-sm backdrop-blur-sm transition-all md:gap-5">
        <Link href="/" className="flex items-center gap-2.5 rounded-full px-3 py-1.5">
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

        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="#use-cases"
            className="rounded-full px-3 py-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
          >
            Use cases
          </Link>
        </div>

        <div className="flex items-center gap-1 sm:gap-1.5">
          <Link
            href="/sign-in"
            className="hidden rounded-full px-3 py-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 sm:inline-flex"
          >
            Log in
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex h-9 items-center rounded-full bg-zinc-900 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800"
          >
            Go to Dashboard
          </Link>
        </div>
      </nav>
    </div>
  );
}
