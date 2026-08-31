"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";
import { newsItems } from "@/data/news";
import Image from "next/image";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function NewsPreview() {
  return (
    <section className="relative overflow-hidden bg-white py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
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
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-[13px] font-bold uppercase tracking-[0.2em] text-secondary-900">
                Latest Updates
              </span>
            </div>
            <h2 className="mt-2 font-heading text-[32px] font-extrabold uppercase text-secondary-950 sm:text-[40px]">
              News from the Federation
            </h2>
          </div>
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 font-heading text-[14px] font-bold uppercase tracking-wider text-secondary-900 transition-colors hover:text-primary-600"
          >
            <span>View all news</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {newsItems.map((news) => (
            <motion.div key={news.slug} variants={item} whileHover={{ y: -6 }}>
              <Link
                href={`/news/${news.slug}`}
                className="group block overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-lg transition-all duration-300 hover:border-primary-500/30 hover:shadow-2xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-secondary-100">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-3.5 top-3.5 rounded-full bg-primary-600 px-3.5 py-1 font-heading text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                    {news.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 font-body text-[12.5px] font-medium text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {new Date(news.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                  <h3 className="mt-2.5 font-heading text-[18px] font-bold uppercase leading-snug text-secondary-950 transition-colors group-hover:text-primary-600">
                    {news.title}
                  </h3>
                  <p className="mt-2.5 line-clamp-2 font-body text-[13.5px] leading-relaxed text-muted-foreground">
                    {news.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
