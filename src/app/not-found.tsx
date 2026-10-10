"use client";
import Link from "next/link";
import { ArrowLeft, Home, MoveRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-20 text-slate-900">
      {/* Light Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(200,32,45,0.06),transparent_40%)]" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-primary-600/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-72 w-72 rounded-full bg-secondary-600/10 blur-3xl" />

      <section className="relative z-10 w-full max-w-3xl text-center">
        {/* 404 Indicator */}
        <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary-600 lg:text-9xl font-heading">
          404
        </h1>

        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary-600">
          World Mini Mini Football
        </p>

        <h1 className="font-heading text-4xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
          Page Offside or Not Found
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
          The page you are looking for does not exist, may have moved, or the
          web address was mistyped. Let&apos;s get you back on the pitch.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-600 px-6 text-sm font-semibold text-white shadow-md transition hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-100"
          >
            <Home className="h-4 w-4" />
            Return to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-6 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-slate-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        <div className="mx-auto mt-12 flex max-w-md items-center justify-center gap-3 text-xs text-slate-400">
          <span className="h-px flex-1 bg-slate-200" />
          <span>Explore World Mini Mini Football</span>
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="mt-5 flex items-center justify-center gap-6 text-sm font-medium">
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-slate-600 transition hover:text-primary-600"
          >
            About WMMF
            <MoveRight className="h-4 w-4" />
          </Link>
          <Link
            href="/rules-regulations"
            className="inline-flex items-center gap-1.5 text-slate-600 transition hover:text-primary-600"
          >
            Competition Rules
            <MoveRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

