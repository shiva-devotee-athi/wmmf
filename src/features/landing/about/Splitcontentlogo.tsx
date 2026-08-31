"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  children?: ReactNode;
};

export default function SplitContentLogo({
  eyebrow,
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  reverse = false,
  children,
}: Props) {
  return (
    <section className="py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-14 px-4 xl:px-0 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: reverse ? 24 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={reverse ? "lg:order-2" : ""}
        >
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 font-body text-[12px] font-semibold uppercase tracking-wide text-primary-700">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-4 font-heading text-[28px] font-bold leading-tight text-secondary-900 sm:text-[34px]">
            {title}
          </h2>
          <div className="mt-5 space-y-4">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-body text-[15px] leading-relaxed text-muted-foreground"
              >
                {p}
              </p>
            ))}
          </div>
          {children}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`relative mx-auto flex aspect-square w-full max-w-[420px] items-center justify-center ${
            reverse ? "lg:order-1" : ""
          }`}
        >
          <div className="absolute inset-0 rounded-full bg-primary-50" />
          <div className="absolute inset-6 rounded-full border-2 border-dashed border-secondary-100" />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            className="relative h-[72%] w-[72%]"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain drop-shadow-xl"
              sizes="(max-width: 768px) 320px, 420px"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
