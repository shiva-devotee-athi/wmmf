"use client";

import { motion } from "motion/react";
import { ShieldAlert } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function NoticeBlock({ title, children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex gap-4 rounded-[var(--card-corner-radius)] border border-primary-200 bg-primary-50/60 p-6 md:p-7"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600">
        <ShieldAlert className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-heading text-[16px] font-semibold text-secondary-900">
          {title}
        </h3>
        <div className="mt-2 space-y-2.5 font-body text-[13.5px] leading-relaxed text-muted-foreground">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
