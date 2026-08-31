"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function CTASection() {
  return (
    <section className="px-4 pb-[var(--spacing-sections-mobile)] md:pb-[var(--spacing-sections-desktop)] xl:px-0">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center overflow-hidden rounded-[var(--card-corner-radius)] bg-secondary-900 px-6 py-14 text-center sm:px-12"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary-600/20" />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-secondary-600/40" />
        </div>

        <h2 className="relative font-heading text-[30px] font-bold text-white sm:text-[38px]">
          Ready to bring WMMF to your country?
        </h2>
        <p className="relative mt-3 max-w-lg font-body text-[15px] text-white/75">
          Join a growing global federation committed to fair play, development,
          and the fastest format in football.
        </p>
        <Link
          href="/contact?intent=join"
          className="relative mt-8 rounded-full bg-primary-600 px-8 py-3.5 font-body text-[15px] font-semibold text-white transition-transform duration-150 hover:scale-[1.03] hover:bg-primary-700"
        >
          Join the Federation
        </Link>
      </motion.div>
    </section>
  );
}
