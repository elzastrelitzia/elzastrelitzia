import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] flex-col justify-center px-[var(--gutter)] pb-[var(--footer-height)] pt-[var(--header-height)]">
      <div className="mx-auto flex w-full max-w-[var(--max-width)] flex-col items-center text-center">
        <h1 className="text-[clamp(7rem,28vw,20rem)] leading-[0.8] tracking-[-0.05em]">
          404
        </h1>
        <p className="mt-6 max-w-[32ch] text-[var(--step-1)] text-muted">
          This page does not exist.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block text-[var(--step--1)] uppercase tracking-[0.18em] underline-offset-8 hover:underline"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
