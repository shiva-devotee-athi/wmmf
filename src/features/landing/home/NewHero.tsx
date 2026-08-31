"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Trophy, Users2, Zap, ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function NewHero() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-white md:min-h-[720px]">
      {/* =====================================================
          VIDEO BACKGROUND
      ====================================================== */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/images/banners/hero.webp"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* =====================================================
          VIDEO READABILITY OVERLAY
      ====================================================== */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-white/15" />

      {/* Stronger overlay on left where content sits */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/90 to-white/45"
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-white to-transparent"
      />

      {/* =====================================================
          DECORATIVE BACKGROUND ELEMENTS
      ====================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Red glow */}
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary-100/70 blur-3xl"
        />

        {/* Blue glow */}
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-24 top-32 h-80 w-80 rounded-full bg-secondary-100/60 blur-3xl"
        />

        {/* Dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(10,10,10,0.045)_1px,transparent_0)] bg-[size:28px_28px]" />

        {/* Right side decorative diagonal */}
        <div className="absolute right-[-120px] top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 rotate-12 rounded-[80px] border border-primary-200/30 lg:block" />

        <div className="absolute right-[-170px] top-1/2 hidden h-[450px] w-[450px] -translate-y-1/2 rotate-12 rounded-[70px] border border-secondary-200/30 lg:block" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div className="mx-auto grid min-h-[680px] w-full max-w-[1280px] grid-cols-1 items-center px-5 py-20 sm:px-8 md:min-h-[720px] lg:grid-cols-2 lg:px-0">
        {/* =================================================
            COPY COLUMN
        ================================================== */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-2xl"
        >
          {/* Badge */}
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/85 px-4 py-1.5 font-body text-[12.5px] font-semibold uppercase tracking-wide text-primary-700 shadow-sm backdrop-blur-md"
          >
            <Trophy className="h-3.5 w-3.5" />
            Official International Governing Body
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="hero-title mt-6 text-[42px] leading-[1.02] text-secondary-900 sm:text-[52px] lg:text-[60px]"
          >
            World Mini Mini
            <span className="block text-primary-600">Football</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="mt-4 font-heading text-[14px] font-semibold uppercase tracking-[0.18em] text-secondary-600 sm:text-[15px]"
          >
            International Governing Body
          </motion.p>

          {/* Feature badges */}
          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-900 px-3.5 py-1.5 font-body text-[12.5px] font-semibold text-white shadow-lg">
              <Zap className="h-3.5 w-3.5 text-primary-400" />
              Fast • Dynamic
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-secondary-200 bg-white/80 px-3.5 py-1.5 font-body text-[12.5px] font-semibold text-secondary-700 backdrop-blur-md">
              <Users2 className="h-3.5 w-3.5" />
              Member Nations Worldwide
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-7 max-w-xl rounded-2xl bg-white/45 font-body text-[15.5px] leading-relaxed text-secondary-700 backdrop-blur-[2px] sm:text-[16px]"
          >
            The international governing body dedicated to developing and
            promoting the world&apos;s fastest and most accessible small-sided
            football format through innovation, education, integrity, and global
            participation.
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact?intent=join"
              className="group inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 font-body text-[15px] font-semibold text-white shadow-[0_10px_30px_-8px_rgba(200,32,45,0.55)] transition-all duration-200 hover:scale-[1.03] hover:bg-primary-700 hover:shadow-[0_14px_35px_-8px_rgba(200,32,45,0.65)]"
            >
              Join the Federation
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/history-of-the-sport"
              className="inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-white/75 px-7 py-3.5 font-body text-[15px] font-semibold text-secondary-900 backdrop-blur-md transition-all duration-200 hover:scale-[1.02] hover:border-secondary-400 hover:bg-white"
            >
              Explore the Sport
            </Link>
          </motion.div>
        </motion.div>

        {/* =================================================
            EMPTY RIGHT SPACE
            Video remains visible here.
        ================================================== */}
        <div className="hidden lg:block" />
      </div>

      {/* =====================================================
          BOTTOM SCROLL INDICATOR
      ====================================================== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-secondary-500 md:flex"
      >
        <span className="h-px w-8 bg-secondary-300" />

        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em]">
          Discover
        </span>

        <span className="h-px w-8 bg-secondary-300" />
      </motion.div>
    </section>
  );
}
