"use client";

import { useEffect } from "react";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log error for diagnostics
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-20 text-slate-900">
      {/* Light Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(200,32,45,0.08),transparent_40%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-100/50 blur-3xl" />

      <section className="relative z-10 w-full max-w-2xl text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-amber-500/30 bg-amber-50 text-amber-600 shadow-sm">
          <AlertTriangle className="h-7 w-7" />
        </div>

        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-primary-600">
          World Mini Mini Football
        </p>

        <h1 className="font-heading text-3xl font-bold tracking-tight text-secondary-900 sm:text-5xl">
          An Unexpected Error Occurred
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
          We encountered an issue while loading this page. You can try reloading
          the page or return to the Football Association WMMF homepage.
        </p>

        {error.digest && (
          <p className="mt-4 text-xs font-mono text-slate-400">
            Error reference: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary-600 px-6 text-sm font-semibold text-white shadow-md transition hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-100"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-secondary-200 hover:bg-secondary-50 hover:text-secondary-700 focus:outline-none focus:ring-4 focus:ring-secondary-100"
          >
            <Home className="h-4 w-4" />
            Return to Home
          </Link>
        </div>

        <div className="mx-auto mt-12 max-w-md rounded-2xl border border-secondary-100 bg-secondary-50/60 p-5 text-left shadow-sm backdrop-blur-sm">
          <p className="text-sm font-semibold text-slate-800">
            Still having trouble?
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            Refresh the page or navigate back to home. If the issue persists,
            please contact the Football Association WMMF support team.
          </p>
        </div>
      </section>
    </main>
  );
}

