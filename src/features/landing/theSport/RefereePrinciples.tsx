"use client";

import { motion } from "motion/react";
import { Scale, ShieldCheck, Award, HeartHandshake } from "lucide-react";

const principles = [
  { icon: Scale, label: "Fairness" },
  { icon: ShieldCheck, label: "Safety" },
  { icon: Award, label: "Integrity" },
  { icon: HeartHandshake, label: "Respect" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function RefereePrinciples() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="grid grid-cols-2 gap-4 sm:grid-cols-4"
    >
      {principles.map(({ icon: Icon, label }) => (
        <motion.div
          key={label}
          variants={item}
          className="flex flex-col items-center gap-3 rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] bg-white px-4 py-6 text-center shadow-[var(--card-shadow-horizontal-offset)_var(--card-shadow-vertical-offset)_var(--card-shadow-blur-radius)_rgba(10,10,10,var(--card-shadow-opacity))]"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-50 text-secondary-700">
            <Icon className="h-5 w-5" />
          </div>
          <span className="font-body text-[13px] font-semibold text-secondary-900">
            {label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
