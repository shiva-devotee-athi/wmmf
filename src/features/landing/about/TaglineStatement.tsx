"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function TaglineStatement() {
  return (
    <section className="py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
      <div className="mx-auto flex w-full max-w-[880px] flex-col items-center px-4 text-center xl:px-0">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-body text-[13px] font-semibold uppercase tracking-[0.2em] text-primary-600"
        >
          WMMF
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title mt-3 text-[32px] leading-tight text-secondary-900 sm:text-[42px]"
        >
          It&apos;s More Than Just a Game
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Link
            href="/members#leadership"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 font-body text-[14.5px] font-semibold text-white transition-transform duration-150 hover:scale-[1.03] hover:bg-primary-700"
          >
            Meet WMMF Leadership
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
