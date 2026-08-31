"use client";
// import SectionHeading from "@/components/ui/SectionHeading";
import RefereePrinciples from "./theSport/RefereePrinciples";
import DocumentCard from "./theSport/DocumentCard";
import CTASection from "./theSport/CTASection";
import { refereeHandbook } from "@/data/documents";
import { motion } from "motion/react";
import AnimatedDivider from "@/components/common/Animateddivider";

export default function RefereeGuidelines() {
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
          {/* <SectionHeading
            eyebrow="Match Officials"
            title="WMMF Referee Rules & Guidelines"
            description="The WMMF Referee Rules and Guidelines outline the standards, responsibilities, and conduct expected of all match officials. These guidelines help ensure a safe, respectful and professional environment in our sport."
          /> */}
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
              The Evolution of Small-Sided Football
            </motion.h2>

            <motion.div variants={item} className="mt-3.5 flex justify-center">
              <AnimatedDivider color="bg-secondary-900" />
            </motion.div>

            <motion.p
              variants={item}
              className="mx-auto mt-4 font-body text-[15px] leading-relaxed text-muted-foreground"
            >
              Three defining chapters shaped the format WMMF competes in today.
            </motion.p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-3xl">
            <RefereePrinciples />
          </div>

          <div className="mx-auto mt-12 max-w-3xl">
            <DocumentCard {...refereeHandbook} />
          </div>
        </div>
      </section>

      <CTASection
        title="Interested in becoming a certified referee?"
        description="Join WMMF's referee certification program and officiate matches around the world."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
