"use client";
import React from "react";
import GovernanceFrameworkGrid from "./theSport/GovernanceFrameworkGrid";
import DocumentCard from "./theSport/DocumentCard";
import { motion } from "motion/react";
import AnimatedDivider from "@/components/common/Animateddivider";

const Statutes: React.FC = () => {
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
            Statutes
          </motion.h2>

          <motion.div variants={item} className="mt-3.5 flex justify-center">
            <AnimatedDivider color="bg-secondary-900" />
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mt-4 font-body text-[15px] leading-relaxed text-muted-foreground"
          >
            Contains the constitutional framework of WMMF, including its
            governance structure, membership system, powers, responsibilities,
            and organizational principles. This section defines how WMMF is
            governed, how decisions are made, and the rights and obligations of
            recognized members and stakeholders.
          </motion.p>
        </motion.div>

        <GovernanceFrameworkGrid />

        <div className="mx-auto mt-16 max-w-3xl">
          <DocumentCard
            title="WMMF Statutes"
            description="Original federation statutes establishing WMMF as the global governing body for mini mini football."
            fileHref="/documents/wmmf-statutes.pdf"
            fileSize="1.2 MB"
          />
        </div>
      </div>
    </section>
  );
};

export default Statutes;
