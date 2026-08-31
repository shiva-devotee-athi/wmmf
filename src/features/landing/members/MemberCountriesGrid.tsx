"use client";

import { motion } from "motion/react";
import { Globe2 } from "lucide-react";
// import SectionHeading from "@/components/ui/SectionHeading";
import { memberCountries } from "@/data/members";
import AnimatedDivider from "@/components/common/Animateddivider";

const regions = Array.from(new Set(memberCountries.map((c) => c.region)));

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function MemberCountriesGrid() {
  const titleContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };

  const titleItem = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };
  return (
    <section className="bg-muted/50 py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
      <div className="mx-auto w-full max-w-[1280px] px-4 xl:px-0">
        {/* <SectionHeading
          eyebrow="Global Reach"
          title="Member Countries"
          description="National federations affiliated with WMMF, spanning every inhabited continent."
        /> */}
        <motion.div
          variants={titleContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.h2
            variants={titleItem}
            className="font-heading text-[30px] font-bold text-secondary-900 sm:text-[36px]"
          >
            The Evolution of Small-Sided Football
          </motion.h2>

          <motion.div
            variants={titleItem}
            className="mt-3.5 flex justify-center"
          >
            <AnimatedDivider color="bg-secondary-900" />
          </motion.div>

          <motion.p
            variants={titleItem}
            className="mx-auto mt-4 font-body text-[15px] leading-relaxed text-muted-foreground"
          >
            Three defining chapters shaped the format WMMF competes in today.
          </motion.p>
        </motion.div>

        <div className="mt-12 space-y-10">
          {regions.map((region) => (
            <div key={region}>
              <div className="mb-4 flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-primary-600" />
                <h3 className="font-heading text-[15px] font-semibold uppercase tracking-wide text-secondary-700">
                  {region}
                </h3>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="flex flex-wrap gap-2.5"
              >
                {memberCountries
                  .filter((c) => c.region === region)
                  .map((country) => (
                    <motion.span
                      key={country.code}
                      variants={item}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 rounded-full border border-black/[var(--card-border-opacity)] bg-white px-4 py-2 font-body text-[13px] font-medium text-secondary-800 shadow-sm"
                    >
                      <span className="font-heading text-[11px] font-bold text-primary-600">
                        {country.code}
                      </span>
                      {country.name}
                    </motion.span>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
