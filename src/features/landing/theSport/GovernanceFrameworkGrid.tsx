"use client";

import { motion } from "motion/react";
import { Landmark, Users, Gavel } from "lucide-react";

const pillars = [
  {
    icon: Landmark,
    title: "Governance Structure",
    description:
      "Defines how WMMF is organized and how decisions are made across the Federation's leadership and committees.",
  },
  {
    icon: Users,
    title: "Membership System",
    description:
      "Sets out the rights, obligations, and eligibility criteria for recognized national federations and stakeholders.",
  },
  {
    icon: Gavel,
    title: "Powers & Responsibilities",
    description:
      "Establishes the authority, duties, and organizational principles that guide WMMF as the global governing body.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function GovernanceFrameworkGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3"
    >
      {pillars.map(({ icon: Icon, title, description }) => (
        <motion.div
          key={title}
          variants={item}
          whileHover={{ y: -4 }}
          className="rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] bg-white p-6 shadow-[var(--card-shadow-horizontal-offset)_var(--card-shadow-vertical-offset)_var(--card-shadow-blur-radius)_rgba(10,10,10,var(--card-shadow-opacity))] transition-shadow duration-200 hover:shadow-lg"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary-50 text-secondary-700">
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="mt-4 font-heading text-[17px] font-semibold text-secondary-900">
            {title}
          </h3>
          <p className="mt-2 font-body text-[13.5px] leading-relaxed text-muted-foreground">
            {description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
