"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Newspaper } from "lucide-react";
import type { NewsItem } from "@/data/news";
import Image from "next/image";
import { useFirestoreCollection } from "@/hooks/useFirestoreCollection";
import type { NewsDoc } from "@/types/news";
import Pagination from "@/components/common/Pagination";

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

function NewsCardSkeleton() {
  return (
    <div className="animate-pulse flex flex-col overflow-hidden rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] bg-white shadow-[var(--card-shadow-horizontal-offset)_var(--card-shadow-vertical-offset)_var(--card-shadow-blur-radius)_rgba(10,10,10,var(--card-shadow-opacity))]">
      {/* Image area */}
      <div className="aspect-[16/10] bg-slate-200" />
      {/* Content area */}
      <div className="flex flex-1 flex-col p-5 space-y-3">
        <div className="h-3 w-28 rounded-full bg-slate-200" />
        <div className="h-5 w-full rounded-full bg-slate-200" />
        <div className="h-5 w-3/4 rounded-full bg-slate-200" />
        <div className="h-3.5 w-full rounded-full bg-slate-100" />
        <div className="h-3.5 w-5/6 rounded-full bg-slate-100" />
        <div className="h-3.5 w-4/6 rounded-full bg-slate-100" />
        <div className="mt-2 h-4 w-24 rounded-full bg-slate-200" />
      </div>
    </div>
  );
}

export default function NewsGrid() {
  const [page, setPage] = useState(1);

  const { items: firestoreDocs, loading } = useFirestoreCollection<NewsDoc>(
    "news",
    "createdAt",
    "desc",
  );

  const firestoreNews: NewsItem[] = firestoreDocs.map((doc) => {
    const cleanSlug = doc.slug.replace(/^\/news\//, "");
    return {
      slug: cleanSlug,
      title: doc.title,
      subTitle: doc.subTitle,
      content:
        typeof doc.content === "string"
          ? doc.content.split("\n\n").filter(Boolean)
          : Array.isArray(doc.content)
            ? doc.content
            : [],
      date: doc.date || new Date().toISOString(),
      category: doc.category || "News",
      image: doc.image || "/images/banners/page-banner.webp",
      tags:
        typeof doc.tags === "string"
          ? doc.tags
              .split(",")
              .map((t) => t.trim())
              .filter(Boolean)
          : Array.isArray(doc.tags)
            ? doc.tags
            : [],
    };
  });

  const pageSize = 12;
  const totalPages = Math.ceil(firestoreNews.length / pageSize);
  const currentPage = Math.min(page, totalPages || 1);
  const paginatedNews = firestoreNews.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <div className="space-y-10">
      {/* ── Loading: skeleton grid ── */}
      {loading && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <NewsCardSkeleton key={i} />
          ))}
        </div>
      )}

      {/* ── Empty state ── */}
      {!loading && firestoreNews.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50 py-24 text-center">
          <Newspaper className="h-10 w-10 text-slate-300" />
          <p className="font-heading text-[16px] font-bold uppercase tracking-wide text-slate-400">
            No news found
          </p>
          <p className="font-body text-[13.5px] text-slate-400">
            Check back soon for the latest updates from the federation.
          </p>
        </div>
      )}

      {/* ── News cards ── */}
      {!loading && firestoreNews.length > 0 && (
        <>
          <motion.div
            key={currentPage}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {paginatedNews.map((news) => (
              <motion.div
                key={news.slug}
                variants={item}
                whileHover={{ y: -6 }}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] bg-white shadow-[var(--card-shadow-horizontal-offset)_var(--card-shadow-vertical-offset)_var(--card-shadow-blur-radius)_rgba(10,10,10,var(--card-shadow-opacity))] transition-shadow duration-200 hover:shadow-xl">
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary-100">
                    {news.image ? (
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-secondary-200 font-heading font-bold text-secondary-500">
                        WMMF
                      </div>
                    )}

                    <div className="absolute left-3 top-3 rounded-[var(--badge-corner-radius)] bg-primary-600 px-3 py-1 font-body text-[11px] font-semibold text-white">
                      {news.category}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary-700/20 to-secondary-900/40 transition-transform duration-300 group-hover:scale-105" />
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-1.5 font-body text-[12px] text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      <time dateTime={news.date}>
                        {isNaN(Date.parse(news.date))
                          ? news.date
                          : new Date(news.date).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                      </time>
                    </div>
                    <h2 className="mt-2 font-heading text-[17px] font-semibold leading-snug text-secondary-900 transition-colors group-hover:text-primary-600">
                      {news.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 font-body text-[13.5px] leading-relaxed text-muted-foreground">
                      {news.subTitle}
                    </p>
                    <Link
                      href={`/news/${news.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 font-body text-[13.5px] font-semibold text-primary-600 transition-colors hover:text-primary-700"
                    >
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              </motion.div>
            ))}
          </motion.div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setPage}
              totalItems={firestoreNews.length}
              pageSize={pageSize}
            />
          )}
        </>
      )}
    </div>
  );
}
