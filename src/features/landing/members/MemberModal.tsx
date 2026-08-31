"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import type { LeadershipMember } from "@/data/leadership";

type Props = {
  member: LeadershipMember | null;
  onClose: () => void;
};

export default function MemberModal({ member, onClose }: Props) {
  useEffect(() => {
    if (!member) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [member, onClose]);

  return (
    <AnimatePresence>
      {member && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary-950/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="member-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-[var(--popup-corner-radius)] bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between bg-primary-600 px-7 py-5">
              <h2
                id="member-modal-title"
                className="font-heading text-[17px] font-semibold text-white"
              >
                Member Details
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5">
              <div className="flex flex-col items-center border-b border-black/[0.06] bg-muted px-8 py-10 sm:col-span-2 sm:border-b-0 sm:border-r">
                <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </div>
                <h3 className="mt-5 text-center font-heading text-[19px] font-bold text-secondary-900">
                  {member.name}
                </h3>
                <p className="mt-1.5 text-center font-body text-[11.5px] font-semibold uppercase tracking-wide text-primary-600">
                  {member.role}
                </p>
              </div>

              <div className="px-7 py-8 sm:col-span-3 sm:px-8">
                <h4 className="inline-block border-b-2 border-primary-600 pb-2 font-heading text-[15px] font-semibold text-secondary-900">
                  Biography
                </h4>
                <div className="mt-4 space-y-3.5 font-body text-[14px] leading-relaxed text-muted-foreground">
                  {member.bio && member.bio.length > 0 ? (
                    member.bio.map((paragraph, i) => <p key={i}>{paragraph}</p>)
                  ) : (
                    <p className="italic text-secondary-400">
                      Biography coming soon.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
