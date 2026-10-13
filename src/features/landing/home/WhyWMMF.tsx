"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Target, Globe2, Check } from "lucide-react";

const checklistItems = [
  "Family & Community Focus",
  "Inclusive for All Ages",
  "Affordable & Accessible",
  "Fast-Paced & Exciting",
];

export default function WhyWMMF() {
  return (
    <section className="relative overflow-hidden bg-white py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
      {/* Background Drawing / Sketches Watermark */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.22]">
        <Image
          src="/images/sketches/sketch_1.webp"
          alt="Sports sketch background"
          fill
          className="object-cover object-center mix-blend-multiply"
        />
      </div>

      {/* Decorative side sports silhouettes (SVG) */}
      <div className="pointer-events-none absolute -left-12 top-1/4 z-0 hidden h-80 w-80 opacity-[0.06] xl:block">
        <svg
          viewBox="0 0 200 200"
          fill="currentColor"
          className="h-full w-full text-secondary-900"
        >
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 6"
          />
          <path
            d="M70 100 L130 100 M100 70 L100 130"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 xl:px-0">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Team Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="group relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xl transition-all duration-500 hover:shadow-2xl">
              <Image
                src="/images/about/about_2.webp"
                alt="WMMF Team and Official Mini Mini Football Crest"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-7"
          >
            {/* Watermark Outline Text */}
            <div className="pointer-events-none absolute -top-8 left-0 select-none font-heading text-[52px] font-black tracking-widest text-slate-900/[0.04] sm:text-[70px] md:text-[84px]">
              WHY WMMF
            </div>

            {/* Badge */}
            <div className="relative flex items-center gap-2">
              <span className="font-heading text-[13px] font-bold uppercase tracking-[0.2em] text-secondary-900">
                Why Choose Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-3 font-heading text-[32px] font-extrabold uppercase leading-[1.08] tracking-tight text-secondary-950 sm:text-[40px] lg:text-[46px]">
              Fewer Players {" "}
              <span className="text-primary-600">   More Football</span>
            </h2>

            {/* Description */}
            <p className="mt-4 font-body text-[14.5px] leading-relaxed text-muted-foreground">
              WMMF takes football to its essential elements: the player, the ball, the space,
              and the decision. With only three players on each side,
              the game becomes faster, closer, and more demanding — placing every
              player at the center of the action.
            </p>
            <p className="mt-4 font-body text-[14.5px] leading-relaxed text-muted-foreground">
              This is what makes WMMF different. We have reduced the numbers,
              the space, and the distance to the ball — but not the football.
            </p>

            <h1 className="font-heading text-[15px] font-bold uppercase tracking-wide text-secondary-900 sm:gap-8 pt-5"> Everyone Is in the Game
            </h1>
            <p className="mt-4 font-body text-[14.5px] leading-relaxed text-muted-foreground">
              Three players means three players fully involved. Attack, defend, create,
              support, and compete — every player carries responsibility for the team.</p>
            <h1 className="font-heading text-[15px] font-bold uppercase tracking-wide text-secondary-900 sm:gap-8 pt-5">
              Every Touch Matters
            </h1>
            <p className="mt-4 font-body text-[14.5px] leading-relaxed text-muted-foreground">
              With less space and less time, technical quality becomes decisive. Control, movement,
              creativity, and quick decision-making are tested on every possession.</p>
            <h1 className="font-heading text-[15px] font-bold uppercase tracking-wide text-secondary-900 sm:gap-8 pt-5">
              Play It Anywhere
            </h1>
            <p className="mt-4 font-body text-[14.5px] leading-relaxed text-muted-foreground">
              WMMF is designed to fit modern communities and modern lifestyles. Its compact format makes the game
              easier to organize and bring to clubs, schools, communities, and new football spaces.</p>
            <h1 className="font-heading text-[15px] font-bold uppercase tracking-wide text-secondary-900 sm:gap-8 pt-5">
              One Game. One Global Framework
            </h1>
            <p className="mt-4 font-body text-[14.5px] leading-relaxed text-muted-foreground">
              WMMF brings consistency to the format through unified rules, trained officials,
              structured competitions, and an international network of Member Associations.</p>


            {/* Highlight Badges */}
            <div className="mt-7 flex flex-wrap items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white shadow-md shadow-primary-600/25">
                  <Target className="h-5 w-5" />
                </div>
                <span className="font-heading text-[15px] font-bold uppercase tracking-wide text-secondary-900">
                  Fewer Players
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white shadow-md shadow-primary-600/25">
                  <Globe2 className="h-5 w-5" />
                </div>
                <span className="font-heading text-[15px] font-bold uppercase tracking-wide text-secondary-900">
                  More Responsibility
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white shadow-md shadow-primary-600/25">
                  <Globe2 className="h-5 w-5" />
                </div>
                <span className="font-heading text-[15px] font-bold uppercase tracking-wide text-secondary-900">
                  More Football
                </span>
              </div>
            </div>

            {/* Checklist and Circular Contact Badge */}
            <div className="mt-8 flex flex-col justify-between gap-6 border-t border-slate-200/80 pt-7 sm:flex-row sm:items-center">
              {/* Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-4 gap-y-6">
                {checklistItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span className="font-body text-[14px] font-semibold text-secondary-900">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Circular Rotating Stamp Badge */}
              <Link
                href="/contact"
                className="group relative flex h-28 w-28 shrink-0 items-center justify-center self-center transition-transform duration-300 hover:scale-105 sm:self-auto"
                aria-label="Contact Us"
              >
                {/* Rotating Curved Text SVG */}
                <div className="absolute inset-0 animate-[spin_12s_linear_infinite] group-hover:[animation-play-state:paused]">
                  <svg viewBox="0 0 100 100" className="h-full w-full">
                    <path
                      id="stampCirclePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                    />
                    <text className="font-heading text-[9.5px] font-bold uppercase tracking-[2.5px] fill-secondary-900">
                      <textPath href="#stampCirclePath" startOffset="0%">
                        • CONTACT US • CONTACT US •
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Center Number / Stat */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 font-heading text-lg font-black text-secondary-900 shadow-inner transition-colors group-hover:bg-primary-600 group-hover:text-white">
                  6+
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  );
}
