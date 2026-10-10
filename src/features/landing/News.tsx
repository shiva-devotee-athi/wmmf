"use client";
import AnimatedDivider from "@/components/common/Animateddivider";
import NewsGrid from "./theSport/NewsGrid";
import { motion } from "motion/react";
import SplitContentLogo from "./about/Splitcontentlogo";


export default function News() {
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
            News & Announcements
          </motion.h2>

          <motion.div variants={item} className="mt-3.5 flex justify-center">
            <AnimatedDivider color="bg-secondary-900" />
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mt-4 font-body text-[15px] leading-relaxed text-muted-foreground"
          >
            Stay up to date with WMMF's global development, events, and
            milestones.
          </motion.p>
        </motion.div>

        <div className="mt-12">
          <NewsGrid />
        </div>
        <motion.h2
          variants={item}
          className="font-heading text-[30px] font-bold text-secondary-900 sm:text-[36px] text-center mt-12"
        >
          Executive Board & Board of Trustees
        </motion.h2>
        <motion.div variants={item} className="mt-3.5 flex justify-center">
          The People Taking the Game Forward
        </motion.div>
        <motion.div variants={item} className="mt-3.5 flex justify-center">
          <AnimatedDivider color="bg-secondary-900" />
        </motion.div>
        <SplitContentLogo
          eyebrow="Our Mission"
          title='A New Way To Play. A New Way To Connect'
          imageSrc="/images/logos/logo.png"
          imageAlt="World Mini Mini Football crest"
          paragraphs={[
            "World Mini Mini Football (WMMF) is built on a simple belief: when there are fewer players, every player becomes part of the game.",
            "Our 3-on-3 format brings football into a more concentrated, demanding, and expressive space. With fewer players and less room, there is no place to disappear. Every player must think, move, defend, create, support, and take responsibility. Every touch matters. Every decision matters. Every second matters.",

            "WMMF exists to develop this intensity into a modern global football format — one that rewards technical quality, creativity, intelligence, speed, courage, teamwork, and discipline.",
            "Our mission is not simply to create another version of football. It is to create more involvement, more responsibility, and more opportunity to play the game — wherever people are, whatever their age or level, and within a clear international framework",
            "From the first touch to the final whistle, everyone is in the game.",
          ]}

        />
      </div>
    </section>
  );
}
