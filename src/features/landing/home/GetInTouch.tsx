"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export default function GetInTouch() {
  return (
    <section className="relative overflow-hidden py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
      {/* Background Concentric Radar Rings (Top Left & Bottom Right) */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-[450px] w-[450px] opacity-25">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          className="h-full w-full stroke-slate-500/30"
        >
          <circle cx="200" cy="200" r="60" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="100" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="140" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="180" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="pointer-events-none absolute -bottom-32 -right-32 h-[500px] w-[500px] opacity-25">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          className="h-full w-full stroke-slate-500/30"
        >
          <circle cx="200" cy="200" r="60" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="105" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="150" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="195" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Subtle radial lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(32,107,200,0.15),transparent)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 xl:px-0">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-6 xl:col-span-6"
          >
            {/* Outline Watermark */}
            <div className="pointer-events-none absolute -top-8 left-0 select-none font-heading text-[54px] font-black tracking-widest text-white/[0.04] sm:text-[72px] md:text-[88px]">
              CONTACT
            </div>

            {/* Badge */}
            <div className="relative flex items-center gap-2">
              <span className="font-heading text-[13px] font-bold uppercase tracking-[0.2em] text-secondary-900">
                Get In Touch
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-3.5 font-heading text-[34px] font-extrabold uppercase leading-[1.08] tracking-tight text-secondary-900 sm:text-[44px] lg:text-[48px]">
              Every Player, Every Touch, Every Second Counts
            </h2>

            {/* Paragraph */}
            <p className="mt-5 font-body text-[15px] leading-relaxed text-muted-foreground sm:text-[15.5px]">
              Whether you are an association, club, school, coach, referee,
              athlete, volunteer, sponsor, or simply passionate about growing
              Mini Mini Football, we would be delighted to hear from you.
              Together, we can build a stronger future for the sport and expand
              the WMMF family around the world.
            </p>

            {/* Contact Us Pill Button */}
            <div className="mt-8">
              <Link
                href="/contact?intent=getintouch"
                className="group inline-flex items-center gap-3.5 rounded-full bg-primary-600 px-7 py-3 font-heading text-[14px] font-bold uppercase tracking-wider text-white shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:bg-primary-700"
              >
                <span>Contact Us</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-primary-600 shadow transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:col-span-6 xl:col-span-6"
          >
            <div className="group relative aspect-square w-full max-w-[500px] overflow-hidden rounded-2xl transition-all duration-500">
              <Image
                src="/images/about/about_3.webp"
                alt="WMMF Passionate Players Celebrating"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07131e]/50 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
