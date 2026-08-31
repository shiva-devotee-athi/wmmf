"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)] border-b border-slate-100">
      {/* Background Drawing / Sketches Watermark */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.20]">
        <Image
          src="/images/sketches/sketch_1.webp"
          alt="Sports sketch background"
          fill
          className="object-cover object-center mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-4 xl:px-0 lg:grid-cols-2 lg:gap-16">
        {/* Left Column Image */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-xl transition-all duration-500 hover:shadow-2xl"
        >
          <Image
            src="/images/about/about_1.webp"
            alt="WMMF Official Representative"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-5 left-5 rounded-xl border border-slate-100 bg-white/95 px-5 py-3.5 shadow-lg backdrop-blur-sm">
            <p className="font-heading text-xl font-bold text-primary-600">
              Since 2017
            </p>
            <p className="font-body text-[12.5px] font-medium text-slate-500">
              Governing the sport globally
            </p>
          </div>
        </motion.div>

        {/* Right Column Details */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="flex items-center gap-2">
            <span className="font-heading text-[13px] font-bold uppercase tracking-[0.2em] text-secondary-900">
              Who We Are
            </span>
          </div>

          <h2 className="mt-4 font-heading text-[32px] font-extrabold uppercase leading-[1.1] text-secondary-950 sm:text-[40px] lg:text-[44px]">
            Building the Future of{" "}
            <span className="text-primary-600">Small-Sided</span> Football
          </h2>

          <p className="mt-5 font-body text-[15px] leading-relaxed text-muted-foreground sm:text-[15.5px]">
            WMMF sets the global standard for mini football — unifying rules,
            training match officials, and building pathways for national
            federations to compete on a fair, well-governed international stage.
          </p>

          <Link
            href="/about"
            className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-secondary-900 px-6 py-3 font-heading text-[14px] font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-primary-600 hover:shadow-primary-600/30"
          >
            <span>Learn more about the Federation</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
