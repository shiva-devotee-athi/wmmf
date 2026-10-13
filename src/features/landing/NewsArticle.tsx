"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Calendar, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import ShareButtons from "./theSport/ShareButtons";
import type { NewsItem } from "@/data/news";

type Props = {
  article: NewsItem;
  prev: NewsItem | null;
  next: NewsItem | null;
};

export default function NewsArticle({ article, prev, next }: Props) {
  return (
    <article className="py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
      <div className="mx-auto w-full max-w-[860px] px-4 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--card-corner-radius)] bg-secondary-100 shadow-[var(--card-shadow-horizontal-offset)_var(--card-shadow-vertical-offset)_var(--card-shadow-blur-radius)_rgba(10,10,10,var(--card-shadow-opacity))]"
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 860px) 100vw, 860px"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 flex flex-wrap items-center gap-2 font-body text-[13.5px] font-medium text-secondary-500"
        >
          <span className="rounded-full bg-primary-50 px-3 py-1 font-semibold text-primary-700">
            {article.category}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 font-heading text-[28px] font-bold leading-tight text-secondary-900 sm:text-[34px]"
        >
          {article.title}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 font-heading text-[20px] font-medium leading-tight text-secondary-600 sm:text-[24px]"
        >
          {article.subTitle}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="prose-wmmf mt-8 space-y-4 font-body text-[15.5px] leading-relaxed text-secondary-700"
        >
          {article.content.map((paragraph, i) => {
            return <p key={i}>{paragraph}</p>;
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="prose-wmmf mt-8 space-y-2 font-body text-center leading-relaxed text-secondary-700"
        >
          <h3 className="font-heading text-xl md:text-2xl font-extrabold tracking-tight">
            World Mini Mini Football (WMMF)
          </h3>
          <p className="mt-2 font-body text-sm md:text-sm font-medium tracking-wider text-primary-500 uppercase">
            IT’S MORE THAN JUST A GAME
          </p>
        </motion.div>

        <div className="mt-10 flex flex-col gap-6 border-t border-black/[0.06] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            <Tag className="h-3.5 w-3.5 text-secondary-400" />
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/[0.08] px-3 py-1 font-body text-[12px] font-medium text-secondary-600"
              >
                {tag}
              </span>
            ))}
          </div>
          <ShareButtons slug={article.slug} title={article.title} />
        </div>

        {(prev || next) && (
          <div className="mt-8 grid grid-cols-1 gap-3 border-t border-black/[0.06] pt-8 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/news/${prev.slug}`}
                className="group flex flex-col rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] p-5 transition-colors hover:border-primary-200 hover:bg-primary-50/40"
              >
                <span className="flex items-center gap-1.5 font-body text-[12px] font-semibold uppercase tracking-wide text-secondary-400">
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Previous
                </span>
                <span className="mt-2 font-heading text-[14.5px] font-semibold text-secondary-900 transition-colors group-hover:text-primary-600">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next && (
              <Link
                href={`/news/${next.slug}`}
                className="group flex flex-col rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] p-5 text-right transition-colors hover:border-primary-200 hover:bg-primary-50/40 sm:items-end"
              >
                <span className="flex items-center gap-1.5 font-body text-[12px] font-semibold uppercase tracking-wide text-secondary-400">
                  Next
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
                <span className="mt-2 font-heading text-[14.5px] font-semibold text-secondary-900 transition-colors group-hover:text-primary-600">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
