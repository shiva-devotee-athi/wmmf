import Image from "next/image";

export default function Loading() {
  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 text-slate-900"
      aria-label="Loading World Mini Mini Football"
      aria-busy="true"
    >
      {/* Light background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(200,32,45,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-primary-600/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/3 h-72 w-72 rounded-full bg-secondary-600/10 blur-3xl" />

      <section className="relative z-10 flex w-full max-w-sm flex-col items-center text-center">
        {/* Circular Progress Bar Container */}
        <div className="relative flex h-36 w-36 items-center justify-center">
          {/* Center Logo Spinning Clockwise */}
          <div className="absolute inset-0 flex items-center justify-center p-3">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white p-2 shadow-md border border-slate-100">
              <Image
                src="/images/logos/logo.png"
                alt="World Mini Mini Football Logo"
                width={80}
                height={80}
                priority
                className="h-full w-full object-contain animate-[spin_8s_linear_infinite]"
              />
            </div>
          </div>
        </div>

        {/* Content Details */}
        <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-primary-600">
          World Mini Mini Football
        </p>

        <h1 className="mt-2 text-2xl font-bold tracking-tight text-secondary-900 font-heading">
          Loading Page Content
        </h1>

        <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-slate-600">
          Please wait while we load the page info.
        </p>

        {/* Bottom subtle progress line */}
        <div className="mt-7 h-1 w-44 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-primary-600 to-secondary-600" />
        </div>
      </section>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </main>
  );
}
