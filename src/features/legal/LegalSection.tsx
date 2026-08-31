"use client";

import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
};

export default function LegalSection({ icon: Icon, title, children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-black/[0.06] py-9 first:pt-0 last:border-none"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
          <Icon className="h-4.5 w-4.5" />
        </div>
        <h2 className="font-heading text-[19px] font-bold text-secondary-900 sm:text-[21px]">
          {title}
        </h2>
      </div>
      <div className="mt-4 space-y-3.5 pl-[52px] font-body text-[14.5px] leading-relaxed text-muted-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:marker:text-primary-500 [&_strong]:font-semibold [&_strong]:text-secondary-900">
        {children}
      </div>
    </motion.div>
  );
}
