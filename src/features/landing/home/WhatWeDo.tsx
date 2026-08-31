"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Zap, Globe2, Scale, Check } from "lucide-react";
import AnimatedDivider from "@/components/common/Animateddivider";

const features = [
  {
    icon: Zap,
    title: "Develop the Sport",
    description:
      "Standardizing dynamic gameplay and expanding small-sided football globally.",
    list: [
      "Standardize the Rules",
      "Promote Global Participation",
      "Youth & Grassroots Programs",
    ],
  },
  {
    icon: Globe2,
    title: "Educate & Certify",
    description:
      "Empowering officials, coaches, and leaders with international certification.",
    list: [
      "Referee Education & Badges",
      "Coach Development Tracks",
      "Workshops & Seminars",
    ],
  },
  {
    icon: Scale,
    title: "Organize & Support",
    description:
      "Sanctioning tournaments and providing administrative guidance to member nations.",
    list: [
      "International Competitions",
      "Member Nation Development",
      "Statutes & Fair Play",
    ],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function WhatWeDo() {
  const titleContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
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
    <section className="relative overflow-hidden bg-slate-50/60 py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)] border-y border-slate-200/60">
      {/* Background Drawing / Sketches Watermark */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.20]">
        <Image
          src="/images/sketches/sketch_1.webp"
          alt="Sports sketch background"
          fill
          className="object-cover object-center mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 xl:px-0">
        <motion.div
          variants={titleContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="relative mx-auto max-w-2xl text-center"
        >
          {/* Watermark text */}
          <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-heading text-[52px] font-black tracking-widest text-slate-900/[0.04] sm:text-[70px] md:text-[84px]">
            WHAT WE DO
          </div>

          <motion.div
            variants={titleItem}
            className="flex items-center justify-center gap-2"
          >
            <span className="font-heading text-[13px] font-bold uppercase tracking-[0.2em] text-secondary-900">
              Our Core Pillars
            </span>
          </motion.div>

          <motion.h2
            variants={titleItem}
            className="mt-3 font-heading text-[32px] font-extrabold uppercase text-secondary-950 sm:text-[40px]"
          >
            What We Do
          </motion.h2>

          <motion.div
            variants={titleItem}
            className="mt-3.5 flex justify-center"
          >
            <AnimatedDivider color="bg-primary-600" />
          </motion.div>

          <motion.p
            variants={titleItem}
            className="mx-auto mt-4 font-body text-[15px] leading-relaxed text-muted-foreground"
          >
            Building the future of Mini Mini Football with robust international
            governance.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, description, list }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-7 shadow-lg transition-all duration-300 hover:border-primary-500/30 hover:shadow-2xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 shadow-sm transition-colors duration-300 group-hover:bg-primary-600 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mt-5 font-heading text-[20px] font-bold uppercase tracking-wide text-secondary-900">
                {title}
              </h3>

              <p className="mt-2 font-body text-[13.5px] leading-relaxed text-muted-foreground">
                {description}
              </p>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <ul className="space-y-2.5 font-body text-[13.5px] text-slate-700">
                  {list.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </span>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
