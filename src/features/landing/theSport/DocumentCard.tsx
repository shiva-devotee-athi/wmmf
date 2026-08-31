"use client";

import { motion } from "motion/react";
import { FileText, Download } from "lucide-react";

type Props = {
  title: string;
  description: string;
  fileHref: string;
  fileSize?: string;
};

export default function DocumentCard({
  title,
  description,
  fileHref,
  fileSize,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
      className="flex flex-col items-start gap-5 rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] bg-white p-6 shadow-[var(--card-shadow-horizontal-offset)_var(--card-shadow-vertical-offset)_var(--card-shadow-blur-radius)_rgba(10,10,10,var(--card-shadow-opacity))] transition-shadow duration-200 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
          <FileText className="h-5.5 w-5.5" />
        </div>
        <div>
          <h3 className="font-heading text-[16.5px] font-semibold text-secondary-900">
            {title}
          </h3>
          <p className="mt-1 max-w-lg font-body text-[13.5px] leading-relaxed text-muted-foreground">
            {description}
          </p>
          {fileSize && (
            <p className="mt-1 font-body text-[11.5px] font-medium uppercase tracking-wide text-secondary-400">
              PDF · {fileSize}
            </p>
          )}
        </div>
      </div>

      <a
        href={fileHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-secondary-900 px-5 py-2.5 font-body text-[13.5px] font-semibold text-white transition-transform duration-150 hover:scale-[1.03] hover:bg-secondary-800"
      >
        <Download className="h-4 w-4" />
        Download
      </a>
    </motion.div>
  );
}
