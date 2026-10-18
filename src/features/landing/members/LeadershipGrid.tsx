"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { type LeadershipMember } from "@/data/leadership";
import MemberModal from "./MemberModal";
import { useFirestoreCollection } from "@/hooks/useFirestoreCollection";
import type { MemberDoc } from "@/types/member";
import Pagination from "@/components/common/Pagination";
import { Users } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function MemberCardSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Portrait placeholder */}
      <div className="aspect-[253/300] rounded-[var(--card-corner-radius)] bg-slate-200" />
      {/* Name */}
      <div className="mt-4 h-4 w-3/4 rounded-full bg-slate-200" />
      {/* Role */}
      <div className="mt-2 h-3 w-1/2 rounded-full bg-slate-100" />
    </div>
  );
}


export default function LeadershipGrid() {
  const [active, setActive] = useState<LeadershipMember | null>(null);
  const [page, setPage] = useState(1);

  const { items: firestoreDocs, loading } =
    useFirestoreCollection<MemberDoc>("members");

  // Build a lookup map from the static seed data so we can fall back to its
  // image URL when a Firestore doc has an empty/missing image field.
  const staticById = Object.fromEntries(
    [] as [string, { image?: string }][],
  );

  const firestoreMembers: LeadershipMember[] = firestoreDocs.map((m) => ({
    id: m.id,
    name: m.name,
    role: m.role,
    image: m.image || staticById[m.id]?.image || "",
    bio:
      typeof m.bio === "string"
        ? m.bio.split("\n\n").filter(Boolean)
        : Array.isArray(m.bio)
          ? m.bio
          : [],
  }));

  const pageSize = 12;
  const totalPages = Math.ceil(firestoreMembers.length / pageSize);
  const currentPage = Math.min(page, totalPages || 1);
  const paginatedMembers = firestoreMembers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  return (
    <section
      id="leadership"
      className="scroll-mt-24 py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 xl:px-0">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 font-body text-[12px] font-semibold uppercase tracking-wide text-primary-700">
              WMMF Members
            </span>
            <h2 className="mt-4 font-heading text-[30px] font-bold text-secondary-900 sm:text-[36px]">
              Around the World
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/contact?intent=membership"
              className="inline-flex items-center rounded-full bg-primary-600 px-6 py-3 font-body text-[14px] font-semibold text-white shadow-sm transition-transform duration-150 hover:scale-[1.03] hover:bg-primary-700"
            >
              Apply for Membership
            </Link>
          </motion.div>
        </div>

        {/* ── Loading: skeleton grid ── */}
        {loading && (
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <MemberCardSkeleton key={i} />
            ))}
          </div>
        )}

        {/* ── Empty state ── */}
        {!loading && firestoreMembers.length === 0 && (
          <div className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-slate-200 bg-slate-50 py-24 text-center">
            <Users className="h-10 w-10 text-slate-300" />
            <p className="font-heading text-[16px] font-bold uppercase tracking-wide text-slate-400">
              No members found
            </p>
            <p className="font-body text-[13.5px] text-slate-400">
              Member profiles will appear here once added.
            </p>
          </div>
        )}

        {/* ── Member cards ── */}
        {!loading && firestoreMembers.length > 0 && (
          <>
            <motion.div
              key={currentPage}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4"
            >
              {paginatedMembers.map((member) => (
                <motion.div
                  key={member.id}
                  variants={item}
                  whileHover={{ y: -6 }}
                  onClick={() => setActive(member)}
                  className="group cursor-pointer text-left"
                >
                  <div className="relative aspect-[253/300] overflow-hidden rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] bg-muted shadow-[var(--card-shadow-horizontal-offset)_var(--card-shadow-vertical-offset)_var(--card-shadow-blur-radius)_rgba(10,10,10,var(--card-shadow-opacity))]">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-secondary-100 font-heading text-xl font-bold text-secondary-500">
                        {member.name.charAt(0)}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </div>
                  <h3 className="mt-4 font-heading text-[16px] font-semibold text-secondary-900 transition-colors group-hover:text-primary-600">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-body text-[13px] text-muted-foreground">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {totalPages > 1 && (
              <div className="mt-10">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setPage}
                  totalItems={firestoreMembers.length}
                  pageSize={pageSize}
                />
              </div>
            )}
          </>
        )}
      </div>

      <MemberModal member={active} onClose={() => setActive(null)} />
    </section>
  );
}
