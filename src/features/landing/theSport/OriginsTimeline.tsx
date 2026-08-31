"use client";

import { motion } from "motion/react";
import { CircleDot, Target, Trophy } from "lucide-react";
import AnimatedDivider from "@/components/common/Animateddivider";

const steps = [
  {
    icon: CircleDot,
    year: "Origins",
    title: "Small-Sided Football Worldwide",
    description:
      "From futsal's roots in South America to grassroots small-goal games played in communities everywhere, reduced-sided football has long helped players build technical skill, creativity, speed, and tactical awareness.",
  },
  {
    icon: Target,
    year: "50+ Years",
    title: "Gol Koochik, Iran",
    description:
      'A traditional form of small-goal street football known as Gol Koochik ("Small Goal") has shaped generations of Iranian football and futsal players — demonstrating how small goals sharpen ball control, decision-making, and teamwork.',
  },
  {
    icon: Trophy,
    year: "Today",
    title: "World Mini Mini Football",
    description:
      "Inspired by this tradition of skill-based football, WMMF introduces a modern international format built on precision, intelligence, speed, and technical excellence — the next chapter in small-sided football's evolution.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function OriginsTimeline() {
  const titleContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };

  const titleItem = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };
  return (
    <section className="bg-muted/50 py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
      <div className="mx-auto w-full max-w-[1280px] px-4 xl:px-0">
        <motion.div
          variants={titleContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={titleItem}
            className="font-heading text-[30px] font-bold text-secondary-900 sm:text-[36px]"
          >
            The Evolution of Small-Sided Football
          </motion.h2>

          <motion.div
            variants={titleItem}
            className="mt-3.5 flex justify-center"
          >
            <AnimatedDivider color="bg-secondary-900" />
          </motion.div>

          <motion.p
            variants={titleItem}
            className="mx-auto mt-4 font-body text-[15px] leading-relaxed text-muted-foreground"
          >
            Three defining chapters shaped the format WMMF competes in today.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="relative mt-12 grid grid-cols-1 gap-10 md:grid-cols-3"
        >
          {/* connecting line, desktop only */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-secondary-200 md:block" />

          {steps.map(({ icon: Icon, year, title, description }, i) => (
            <motion.div
              key={title}
              variants={item}
              className="relative text-center md:text-left"
            >
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-md md:mx-0">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-4 font-body text-[12px] font-semibold uppercase tracking-wide text-primary-600">
                {year}
              </p>
              <h3 className="mt-1.5 font-heading text-[19px] font-bold text-secondary-900">
                {title}
              </h3>
              <p className="mt-2.5 font-body text-[14px] leading-relaxed text-muted-foreground">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
