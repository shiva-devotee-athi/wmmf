"use client";

import { motion } from "motion/react";

type Props = {
  className?: string;
  /** Tailwind background color class, e.g. "bg-secondary-900" or "bg-primary-500". */
  color?: string;
  /** Width of the line. Defaults to ~4.2rem to match a short brand underline. */
  width?: string;
  delay?: number;
};

export default function AnimatedDivider({
  className = "",
  color = "bg-secondary-900",
  width = "w-[4.2087rem]",
  delay = 0.15,
}: Props) {
  return (
    <motion.hr
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={`h-[3px] ${width} shrink-0 rounded-full border-0 ${color} ${className}`}
    />
  );
}
