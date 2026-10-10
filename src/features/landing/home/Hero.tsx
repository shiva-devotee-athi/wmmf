"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Trophy, Users2, Zap } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-[var(--spacing-sections-mobile)] pt-16 md:pb-[var(--spacing-sections-desktop)] md:pt-24">
      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-50" />
        <div className="absolute -right-24 top-40 h-72 w-72 rounded-full bg-secondary-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(10,10,10,0.04)_1px,transparent_0)] bg-[size:28px_28px]" />
      </div>

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-14 px-4 xl:px-0 lg:grid-cols-2">
        {/* Copy column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 font-body text-[12.5px] font-semibold uppercase tracking-wide text-primary-700"
          >
            <Trophy className="h-3.5 w-3.5" />
            Official International Governing Body
          </motion.span>

          <motion.h1
            variants={item}
            className="hero-title mt-6 text-[42px] leading-[1.05] text-secondary-900 sm:text-[52px] lg:text-[60px]"
          >
            World Mini Mini
            <span className="block text-primary-600">Football</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 font-heading text-[15px] font-semibold uppercase tracking-[0.18em] text-secondary-600"
          >
            International Governing Body
          </motion.p>

          <motion.div
            variants={item}
            className="mt-5 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-900 px-3.5 py-1.5 font-body text-[12.5px] font-semibold text-white">
              <Zap className="h-3.5 w-3.5 text-primary-400" />
              Feel the Rush
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary-200 px-3.5 py-1.5 font-body text-[12.5px] font-semibold text-secondary-700">
              <Users2 className="h-3.5 w-3.5" />
              Dare to Play
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 font-body text-[15.5px] leading-relaxed text-muted-foreground"
          >
            The international governing body dedicated to developing and
            promoting the world&apos;s fastest and most accessible small-sided
            football format through innovation, education, integrity, and global
            participation.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact?intent=join"
              className="rounded-full bg-primary-600 px-7 py-3.5 font-body text-[15px] font-semibold text-white shadow-[0_10px_30px_-8px_rgba(200,32,45,0.55)] transition-transform duration-150 hover:scale-[1.03] hover:bg-primary-700"
            >
              Join the Federation
            </Link>
            <Link
              href="/history-of-the-sport"
              className="rounded-full border border-secondary-200 px-7 py-3.5 font-body text-[15px] font-semibold text-secondary-900 transition-colors duration-150 hover:border-secondary-400"
            >
              Explore the Sport
            </Link>
          </motion.div>
        </motion.div>

        {/* Visual column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex h-[340px] w-[340px] items-center justify-center sm:h-[420px] sm:w-[420px]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-secondary-100"
          />

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            className="relative flex h-64 w-64 items-center justify-center rounded-full bg-white shadow-[0_30px_60px_-20px_rgba(26,61,143,0.35)] sm:h-80 sm:w-80"
          >
            <BallGraphic />
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -left-2 top-6 rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] bg-white px-4 py-3 shadow-[var(--card-shadow-horizontal-offset)_var(--card-shadow-vertical-offset)_var(--card-shadow-blur-radius)_rgba(10,10,10,var(--card-shadow-opacity))]"
          >
            <p className="font-heading text-xl font-bold text-primary-600">
              40+
            </p>
            <p className="font-body text-[11px] font-medium text-muted-foreground">
              Member Nations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -right-2 bottom-8 rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] bg-white px-4 py-3 shadow-[var(--card-shadow-horizontal-offset)_var(--card-shadow-vertical-offset)_var(--card-shadow-blur-radius)_rgba(10,10,10,var(--card-shadow-opacity))]"
          >
            <p className="font-heading text-xl font-bold text-secondary-700">
              6-a-side
            </p>
            <p className="font-body text-[11px] font-medium text-muted-foreground">
              Fast Format
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BallGraphic() {
  return (
    <svg viewBox="0 0 200 200" className="h-36 w-36 sm:h-44 sm:w-44">
      <circle
        cx="100"
        cy="100"
        r="96"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="4"
      />
      <polygon
        points="100,55 128,75 118,108 82,108 72,75"
        fill="#1A3D8F"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <polygon
        points="100,55 72,75 40,60 55,25 100,20"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <polygon
        points="100,55 128,75 160,60 145,25 100,20"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <polygon
        points="82,108 118,108 128,145 100,168 72,145"
        fill="#fff"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <polygon
        points="40,60 72,75 60,112 25,105 20,70"
        fill="#1A3D8F"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <polygon
        points="160,60 128,75 140,112 175,105 180,70"
        fill="#1A3D8F"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
    </svg>
  );
}
