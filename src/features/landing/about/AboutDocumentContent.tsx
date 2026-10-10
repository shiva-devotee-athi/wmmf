"use client";

import Image from "next/image";
import { motion } from "motion/react";
import AnimatedDivider from "@/components/common/Animateddivider";
import {
  Globe2,
  Target,
  Trophy,
  ShieldCheck,
  Users,
  Eye,
  Sparkles,
} from "lucide-react";

export default function AboutDocumentContent() {
  return (
    <div className="w-full space-y-16 md:space-y-24 py-12 md:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* 1. HERO / INTRO SECTION */}
      <section className="mx-auto w-full max-w-[1280px] px-4 xl:px-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 font-body text-[12px] font-semibold uppercase tracking-wider text-primary-700">
              About Us
            </span>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-secondary-900 leading-[1.15]">
              Football, Closer to the Player.
            </h1>

            <AnimatedDivider color="bg-primary-600" />

            <div className="space-y-4 font-body text-[15.5px] leading-relaxed text-slate-700">
              <p className="font-medium text-slate-900 text-lg leading-relaxed">
                World Mini Mini Football (WMMF) is the international
                organization dedicated to developing, standardizing, and
                promoting World Mini Mini Football as a modern form of
                small-sided football.
              </p>
              <p>
                Built around a fast, compact 3-on-3 format, WMMF brings the game
                closer to the player. With fewer players, less space, and
                constant involvement, every movement matters, every decision
                carries weight, and every touch can change the game.
              </p>
            </div>

            {/* Key Statement Callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 rounded-2xl border-l-4 border-primary-600 bg-primary-50/60 p-5 sm:p-6 shadow-sm"
            >
              <p className="font-body text-[15px] sm:text-[16.5px] font-semibold italic text-secondary-900 leading-relaxed">
                “This is football stripped back to its essential elements — the
                player, the ball, the space, the decision, and the moment.”
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-3xl border border-slate-200/80 shadow-2xl">
              <Image
                src="/images/about/about_2.webp"
                alt="WMMF Football Match Action"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 460px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block rounded-md bg-primary-600 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  3-on-3 Format
                </span>
                <p className="mt-2 font-heading text-xl font-bold text-white">
                  Fast. Compact. High Involvement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SECTION: A DIFFERENT WAY TO EXPERIENCE FOOTBALL */}
      <section className="mx-auto w-full max-w-[1280px] px-4 xl:px-0">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary-600/20 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-96 w-96 rounded-full bg-secondary-600/20 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 font-body text-[12px] font-semibold uppercase tracking-wider text-primary-400">
                <Sparkles className="h-3.5 w-3.5" />
                Evolution of the Sport
              </span>

              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                A Different Way to Experience Football
              </h2>

              <p className="font-body text-[15.5px] leading-relaxed text-white/80">
                Small-sided football has a long and diverse history across the
                world. WMMF builds on that tradition while establishing a
                distinct, clearly defined format with its own playing
                principles, rules, competition standards, officiating, and
                development structure.
              </p>

              <p className="font-body text-[15.5px] leading-relaxed text-white/80">
                The 3-on-3 format creates a demanding football environment where
                players must attack, defend, create, support, communicate, and
                make decisions continuously. It rewards technical ability,
                creativity, intelligence, speed, teamwork, courage, and
                discipline.
              </p>

              {/* Highlight Cards for key lines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-600/30 text-primary-400">
                    <Target className="h-5 w-5" />
                  </div>
                  <p className="font-heading text-[16px] font-bold text-white">
                    There is nowhere to hide.
                  </p>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary-500/30 text-secondary-300">
                    <Users className="h-5 w-5" />
                  </div>
                  <p className="font-heading text-[16px] font-bold text-white">
                    Every player is part of the game.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-video lg:aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-lg">
                <Image
                  src="/images/about/about_1.webp"
                  alt="Small-sided football match"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SECTION: BUILDING A GLOBAL FOOTBALL STRUCTURE */}
      <section className="mx-auto w-full max-w-[1280px] px-4 xl:px-0">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-secondary-50 px-4 py-1.5 font-body text-[12px] font-semibold uppercase tracking-wider text-secondary-700">
            <Globe2 className="h-3.5 w-3.5" />
            International Governance
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary-900">
            Building a Global Football Structure
          </h2>
          <AnimatedDivider color="bg-secondary-900 mx-auto inline-block" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[var(--card-corner-radius)] border border-slate-200/80 bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-50 text-secondary-700 mb-6">
                <Globe2 className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-secondary-900 mb-3">
                More Than A Playing Format
              </h3>
              <p className="font-body text-[15px] leading-relaxed text-slate-600">
                WMMF is more than a playing format. It is an international
                framework for the organized development of the sport.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-[var(--card-corner-radius)] border border-slate-200/80 bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-secondary-900 mb-3">
                Member Association Support
              </h3>
              <p className="font-body text-[15px] leading-relaxed text-slate-600">
                Through its Member Associations, WMMF works to establish
                consistent standards for the game while supporting grassroots
                participation, club development, youth programs, coach and
                referee education, competitions, and international cooperation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-[var(--card-corner-radius)] border border-slate-200/80 bg-white p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 mb-6">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-secondary-900 mb-3">
                Clear Pathway to Success
              </h3>
              <p className="font-body text-[15px] leading-relaxed text-slate-600">
                Our objective is to create a clear pathway from the first
                experience of the game to organized local, national, and
                international competition.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. SECTION: FOOTBALL FOR MORE PLAYERS */}
      <section className="mx-auto w-full max-w-[1280px] px-4 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 order-2 lg:order-1 relative"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
              <Image
                src="/images/about/about_3.webp"
                alt="WMMF Football Community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 460px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7 order-1 lg:order-2 space-y-6"
          >
            <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 font-body text-[12px] font-semibold uppercase tracking-wider text-primary-700">
              Inclusivity &amp; Accessibility
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary-900">
              Football for More Players
            </h2>

            <AnimatedDivider color="bg-primary-600" />

            <div className="space-y-4 font-body text-[15.5px] leading-relaxed text-slate-700">
              <p>
                One of the strengths of World Mini Mini Football is its
                accessibility.
              </p>
              <p>
                The compact format requires fewer players and less space,
                creating opportunities for clubs, schools, communities, sports
                organizations, and new football environments to bring the game
                to more people.
              </p>
              <p>
                Young players can develop through greater involvement.
                Experienced players can test their technical and tactical
                qualities under constant pressure. Communities can create new
                opportunities to play, compete, and connect through football.
              </p>
            </div>

            {/* Banner Statement */}
            <div className="mt-6 rounded-2xl bg-secondary-900 text-white p-6 shadow-lg border border-secondary-800">
              <p className="font-heading text-lg sm:text-xl font-bold tracking-wide text-center">
                The game may be smaller in numbers and space — but the football
                remains big.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. SECTION: ONE GAME. ONE GLOBAL FRAMEWORK. & OUR VISION */}
      <section className="mx-auto w-full max-w-[1280px] px-4 xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* One Game Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-lg space-y-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary-200 bg-secondary-50 px-4 py-1.5 font-body text-[12px] font-semibold uppercase tracking-wider text-secondary-700">
                <Globe2 className="h-3.5 w-3.5" />
                Global Standards
              </span>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary-900">
                One Game. One Global Framework.
              </h2>

              <div className="space-y-4 font-body text-[15px] leading-relaxed text-slate-700">
                <p>
                  WMMF is committed to developing the sport through clear rules,
                  trained officials, education, structured competitions,
                  responsible governance, and international cooperation.
                </p>
                <p>
                  We believe a sport can only grow sustainably when the game
                  itself and the structure around it develop together.
                </p>
                <p>
                  That means protecting players, maintaining fair play,
                  supporting those who teach and officiate the game, and giving
                  Member Associations a consistent international framework in
                  which to develop.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Our Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="rounded-3xl border border-primary-200/80 bg-gradient-to-br from-primary-900 via-secondary-950 to-secondary-900 text-white p-8 sm:p-10 shadow-xl space-y-6 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 h-64 w-64 translate-x-12 -translate-y-12 rounded-full bg-primary-600/20 blur-2xl" />

            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-body text-[12px] font-semibold uppercase tracking-wider text-primary-300">
                <Eye className="h-3.5 w-3.5" />
                Future Outlook
              </span>

              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Our Vision
              </h2>

              <p className="font-body text-[17px] leading-relaxed text-white/95 font-medium">
                To establish World Mini Mini Football as a respected,
                accessible, and globally connected form of small-sided football
                — creating more opportunities for people to play, develop,
                compete, and enjoy the game.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/15">
              <div className="flex items-center gap-3 text-primary-400">
                <Trophy className="h-5 w-5" />
                <span className="font-heading text-sm font-semibold uppercase tracking-widest text-white/80">
                  Global Football Excellence
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. CLOSING TAGLINE BANNER */}
      {/* <section className="mx-auto w-full max-w-[1280px] px-4 xl:px-0 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-secondary-900 via-secondary-950 to-secondary-900 border border-secondary-800 p-8 sm:p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-primary-400 font-heading text-lg sm:text-xl font-bold uppercase tracking-wider border-b border-white/10 pb-6">
              <span>Bringing Football Closer</span>
              <span className="hidden sm:inline text-white/30">•</span>
              <span>Taking the Game Further</span>
            </div>

            <div className="space-y-2 pt-2">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-white/60">
                WMMF
              </p>
              <h2 className="hero-title text-3xl sm:text-5xl font-bold tracking-tight text-white">
                It’s More Than Just A Game
              </h2>
            </div>
          </div>
        </motion.div>
      </section> */}
    </div>
  );
}
