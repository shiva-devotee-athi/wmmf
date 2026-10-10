"use client";
import { motion } from "motion/react";
import NoticeBlock from "./theSport/NoticeBlock";
import DocumentGrid from "./theSport/DocumentGrid";
import CTASection from "./theSport/CTASection";
import { competitionDocuments, type DocumentEntry } from "@/data/documents";
import AnimatedDivider from "@/components/common/Animateddivider";
import { useFirestoreCollection } from "@/hooks/useFirestoreCollection";
import type { DocumentDoc } from "@/types/document";

export default function CompetitionRules() {
  const { items: firestoreDocs } = useFirestoreCollection<DocumentDoc>("documents");

  const firestoreDocuments: DocumentEntry[] = firestoreDocs.map((doc) => ({
    title: doc.title,
    description: doc.description,
    fileUrl: doc.fileUrl,
    fileSize: doc.fileSize,
  }));

  const displayDocuments =
    firestoreDocuments.length > 0 ? firestoreDocuments : competitionDocuments;

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <>
      <section className="py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
        <div className="mx-auto w-full max-w-[1280px] px-4 xl:px-0">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className="mx-auto max-w-2xl text-center"
          >
            <motion.h2
              variants={item}
              className="font-heading text-[30px] font-bold text-secondary-900 sm:text-[36px]"
            >
              Competition Rules & Regulations
            </motion.h2>

            <motion.div variants={item} className="mt-3.5 flex justify-center">
              <AnimatedDivider color="bg-secondary-900" />
            </motion.div>

            <motion.p
              variants={item}
              className="mx-auto mt-4 font-body text-[15px] leading-relaxed text-muted-foreground"
            >
              Contains the official rules of World Mini Mini Football, competition
              regulations, disciplinary procedures, referee regulations, and all
              technical requirements governing the sport and its events. This
              section provides the standards and guidelines that players, teams,
              officials, and organizers must follow in all WMMF competitions and
              activities.
            </motion.p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl">
            <NoticeBlock title="Copyright Notice">
              <p>
                All documents, publications, rules, regulations, manuals,
                policies, forms, graphics, logos, photographs, videos, and all
                other content published by World Mini Mini Football (WMMF) are
                protected by international copyright and intellectual property
                laws.
              </p>
              <p>
                No part of these materials may be copied, reproduced, modified,
                translated, distributed, published, stored, transmitted, or used
                in any form or by any means without the prior written permission
                of World Mini Mini Football (WMMF), except where expressly
                permitted by applicable law.
              </p>
              <p>
                Unauthorized use of any WMMF intellectual property may result in
                legal action.
              </p>
            </NoticeBlock>
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <DocumentGrid documents={displayDocuments} />
          </div>
        </div>
      </section>

      <CTASection
        title="Have a question about a specific rule?"
        description="Our technical committee is happy to clarify any regulation or procedure."
        buttonLabel="Contact Us"
        buttonHref="/contact"
      />
    </>
  );
}
