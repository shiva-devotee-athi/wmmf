"use client";

import { motion } from "motion/react";
import { Target, Compass } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "WMMF Vision",
    description:
      "To establish World Mini Mini Football as an accessible and internationally recognized sport that brings people together through football. WMMF aims to build a global sporting community connecting players, coaches, referees, clubs, schools and national sports organizations through a clear and unified framework.",
  },
  {
    icon: Compass,
    title: "WMMF Mission",
    description:
      "WMMF is committed to developing and promoting Mini Mini Football worldwide through international competitions, national and regional programs, clubs, schools and youth development. We also aim to establish professional pathways for coaches and referees through education and certification, while maintaining high standards of integrity, safeguarding, fair play and responsible governance.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function VisionMissionGrid() {
  return (
    <section className="bg-muted/50 py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
      <div className="mx-auto w-full max-w-[1280px] px-4 xl:px-0">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {cards.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -4 }}
              className="rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] bg-white p-8 shadow-[var(--card-shadow-horizontal-offset)_var(--card-shadow-vertical-offset)_var(--card-shadow-blur-radius)_rgba(10,10,10,var(--card-shadow-opacity))] transition-shadow duration-200 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <Icon className="h-5.5 w-5.5" />
              </div>
              <h3 className="mt-5 font-heading text-[20px] font-bold text-secondary-900">
                {title}
              </h3>
              <p className="mt-3 font-body text-[14.5px] leading-relaxed text-muted-foreground">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
