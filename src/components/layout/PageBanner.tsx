"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home, Slash } from "lucide-react";
// import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";

export type Breadcrumb = {
  label: string;
  href?: string;
};

type Props = {
  title: string;
  breadcrumbs: Breadcrumb[];
  eyebrow?: string;
  /** Path under /public, defaults to the shared brand banner background. */
  backgroundImage?: string;
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function PageBanner({
  title,
  breadcrumbs,
  eyebrow,
  backgroundImage = "/images/page-banner-bg.png",
}: Props) {
  const splittedText = title.split("");

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
      },
    }),
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative isolate overflow-hidden">
      {/* background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* left-weighted scrim so text stays legible over the busy artwork */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 py-20 text-center xl:px-0 md:py-28"
      >
        {eyebrow && (
          <motion.span
            variants={item}
            className="mb-4 inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 font-body text-[12px] font-semibold uppercase tracking-wide text-primary-700"
          >
            {eyebrow}
          </motion.span>
        )}

        {/* <motion.h1
          variants={item}
          className="hero-title text-[36px] leading-tight text-secondary-900 sm:text-[46px] md:text-[54px]"
        >
          {title}
        </motion.h1> */}
        <div className="flex justify-center">
          {splittedText.map((current, i) => (
            <motion.div
              key={i}
              ref={ref}
              variants={pullupVariant}
              initial="initial"
              animate={isInView ? "animate" : ""}
              custom={i}
              className="hero-title text-[36px] leading-tight text-secondary-200 sm:text-[46px] md:text-[54px]"
            >
              {current == " " ? <span>&nbsp;</span> : current}
            </motion.div>
          ))}
        </div>

        <motion.nav
          variants={item}
          aria-label="Breadcrumb"
          className="mt-6 flex items-center gap-1 text-sm text-gray-700 dark:text-gray-200"
        >
          <Link
            href="/"
            className="font-body text-[13px] font-semibold text-secondary-200 transition-colors hover:text-secondary-300"
            aria-label="Home"
          >
            Home
          </Link>

          {breadcrumbs.map((crumb, i) => {
            const isLast = i === breadcrumbs.length - 1;
            return (
              <span key={crumb.label} className="flex items-center gap-2">
                <span className="text-secondary-300"> / </span>
                {crumb.href && !isLast ? (
                  <Link
                    href={crumb.href}
                    className="font-body text-[13px] font-semibold text-secondary-200 transition-colors hover:text-secondary-300"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className="font-body text-[13px] font-semibold text-secondary-200"
                    aria-current="page"
                  >
                    {crumb.label}
                  </span>
                )}
              </span>
            );
          })}
        </motion.nav>
      </motion.div>
    </section>
  );
}
