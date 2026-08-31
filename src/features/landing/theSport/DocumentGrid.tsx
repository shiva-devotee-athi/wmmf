"use client";

import { motion } from "motion/react";
import DocumentCard from "./DocumentCard";
import type { DocumentEntry } from "@/data/documents";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function DocumentGrid({
  documents,
}: {
  documents: DocumentEntry[];
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className="flex flex-col gap-4"
    >
      {documents.map((doc) => (
        <motion.div key={doc.title} variants={item}>
          <DocumentCard {...doc} />
        </motion.div>
      ))}
    </motion.div>
  );
}
