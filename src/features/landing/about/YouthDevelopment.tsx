"use client";

import { motion } from "motion/react";
import { GraduationCap, School, Trophy, Globe2 } from "lucide-react";

const pillars = [
  { icon: School, label: "Schools" },
  { icon: GraduationCap, label: "Clubs & Coaching" },
  { icon: Trophy, label: "Competitions" },
  { icon: Globe2, label: "International Pathway" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function YouthDevelopment() {
  return (
    <section className="bg-secondary-900 py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
      <div className="mx-auto w-full max-w-[1280px] px-4 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-body text-[12px] font-semibold uppercase tracking-wide text-primary-400">
            Youth &amp; International Development
          </span>
          <h2 className="mt-4 font-heading text-[30px] font-bold text-white sm:text-[36px]">
            Growing the Game From the Ground Up
          </h2>
          <p className="mt-4 font-body text-[15px] leading-relaxed text-white/70">
            Youth development is central to the WMMF vision. Through schools,
            clubs and competitions, we seek to help young players develop
            football skills, confidence, teamwork and respect in a positive
            sporting environment.
          </p>
          <p className="mt-4 font-body text-[15px] leading-relaxed text-white/70">
            WMMF is building a progressive international pathway from grassroots
            participation to national, regional and international competition,
            supported by partnerships with sporting organizations around the
            world.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-5 sm:grid-cols-4"
        >
          {pillars.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={item}
              className="flex flex-col items-center gap-3 rounded-[var(--card-corner-radius)] border border-white/10 bg-white/5 px-4 py-6 text-center"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-600/20 text-primary-400">
                <Icon className="h-5 w-5" />
              </div>
              <span className="font-body text-[13px] font-semibold text-white">
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
