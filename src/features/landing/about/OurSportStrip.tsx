"use client";

import { motion } from "motion/react";
import AnimatedDivider from "@/components/common/Animateddivider";

const pills = [
  "3-on-3 Format",
  "Compact Pitch",
  "High Intensity",
  "Technical Focus",
];

export default function OurSportStrip() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
      <div className="mx-auto w-full max-w-[1280px] px-4 xl:px-0">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={item}
            className="font-heading text-[30px] font-bold text-secondary-900 sm:text-[36px]"
          >
            A Fast-Paced 3-on-3 Format
          </motion.h2>

          <motion.div variants={item} className="mt-3.5 flex justify-center">
            <AnimatedDivider color="bg-secondary-900" />
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mt-4 font-body text-[15px] leading-relaxed text-muted-foreground"
          >
            Mini Mini Football is based on a fast-paced 3-on-3 format played in
            a compact environment where every player is actively involved. The
            format emphasizes technical skill, quick decision-making, movement
            and teamwork, while providing opportunities for both participation
            and high-level competition.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {pills.map((label) => (
            <span
              key={label}
              className="rounded-full border border-secondary-200 bg-secondary-50 px-5 py-2 font-body text-[13px] font-semibold text-secondary-700"
            >
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
