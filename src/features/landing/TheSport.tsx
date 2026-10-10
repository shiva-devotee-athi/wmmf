"use client";
import CTASection from "./theSport/CTASection";
import OriginsTimeline from "./theSport/OriginsTimeline";
import Image from "next/image";
import { motion } from "motion/react";
import { Globe2, Target, Quote } from "lucide-react";

export default function TheSport() {
  return (
    <>
      <section className="py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-start gap-10 px-4 lg:grid-cols-12 lg:gap-14 xl:px-0">
          {/* Left Column: Sticky Emblem Showcase & Format Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 lg:col-span-5 lg:sticky lg:top-28 lg:self-start"
          >
            {/* Emblem Visual Card */}
            <div className="relative overflow-hidden rounded-3xl border border-black/[0.06] bg-gradient-to-b from-primary-50/60 via-white to-primary-50/30 p-6 sm:p-8 shadow-xs">
              <div className="relative mx-auto flex aspect-square w-full max-w-[280px] items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-primary-100/50 blur-xl" />
                <div className="absolute inset-3 rounded-full border-2 border-dashed border-primary-200/80" />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }}
                  className="relative h-[68%] w-[68%]"
                >
                  <Image
                    src={"/images/logos/logo.png"}
                    alt={"World Mini Mini Football crest"}
                    fill
                    className="object-contain drop-shadow-xl"
                    sizes="(max-width: 768px) 320px, 420px"
                    priority
                  />
                </motion.div>
              </div>

              <div className="mt-6">
                <div>
                  <p className="font-body text-[13.5px] italic leading-relaxed text-secondary-800">
                    World Mini Mini Football is not the beginning of small-sided
                    football.
                  </p>
                  <p className="font-body text-[13.5px] italic leading-relaxed text-secondary-800">
                    It is part of its continuing story.
                  </p>
                </div>
              </div>

              {/* Core Quote Callout */}
              <div className="mt-6 rounded-2xl border border-primary-100/80 bg-white/90 p-4 sm:p-5 shadow-2xs backdrop-blur-xs">
                <div className="flex items-start gap-3">
                  <Quote className="h-5 w-5 shrink-0 text-primary-600/50 mt-0.5" />
                  <p className="font-body text-[13.5px] leading-relaxed text-secondary-800">
                    WMMF It's More Than Just A Game
                  </p>
                  <p></p>
                </div>
              </div>
            </div>

            {/* Feature Pillars */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white shadow-md shadow-primary-600/25">
                  <Target className="h-5 w-5" />
                </div>
                <span className="font-heading text-[15px] font-bold uppercase tracking-wide text-secondary-900">
                  Every Player Counts
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white shadow-md shadow-primary-600/25">
                  <Globe2 className="h-5 w-5" />
                </div>
                <span className="font-heading text-[15px] font-bold uppercase tracking-wide text-secondary-900">
                  Every Touch Matters
                </span>
              </div>

              {/* <div className="flex items-center gap-3.5 rounded-2xl border border-black/[0.06] bg-white p-4 shadow-2xs transition-all duration-200 hover:border-primary-200 hover:shadow-xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-600 text-white shadow-sm shadow-primary-600/25">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-[13px] font-bold uppercase tracking-wider text-secondary-900">
                    Every Player Counts
                  </h4>
                  <p className="font-body text-[12px] text-muted-foreground">High touch & involvement</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-2xl border border-black/[0.06] bg-white p-4 shadow-2xs transition-all duration-200 hover:border-primary-200 hover:shadow-xs">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-600 text-white shadow-sm shadow-primary-600/25">
                  <Globe2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-heading text-[13px] font-bold uppercase tracking-wider text-secondary-900">
                    Every Touch Matters
                  </h4>
                  <p className="font-body text-[12px] text-muted-foreground">Global heritage & format</p>
                </div>
              </div> */}
            </div>
          </motion.div>

          {/* Right Column: Story Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 font-body text-[12px] font-semibold uppercase tracking-wide text-primary-700">
              From Small Goals to WMMF
            </span>

            <h2 className="mt-4 font-heading text-[28px] font-bold leading-tight text-secondary-900 sm:text-[34px]">
              The Story Behind the Format
            </h2>

            <div className="mt-5 space-y-4">
              {[
                "Football has never been confined to one field, one number of players, or one way of playing. Long before the modern game became standardized, football was adapted to the spaces, communities, and circumstances in which people played it. Small-sided and informal forms of football have developed across different countries, from neighbourhood streets and local grounds to schools, clubs, indoor halls, and community spaces. These formats have consistently placed players in situations that demand close control, quick decisions, movement, creativity, and teamwork.",
                'For more than half a century, a traditional form of small-goal street football known in Iran as Gol Koochik ("Small Goal") has demonstrated how playing with very small goals encourages exceptional ball control, quick decision-making, creativity, and teamwork. This rich football culture has contributed significantly to the technical development of generations of Iranian football and futsal players.',
                "In Uruguay, the development of futsal in the 1930s provided one of the most significant examples of this evolution. Juan Carlos Ceriani developed a five-a-side form of football that could be played on smaller indoor spaces, adapting elements of basketball, handball and water polo to create a structured football format. The game subsequently spread throughout South America, particularly in Brazil, where small-sided football became deeply embedded in football culture and player development. FIFA's history of futsal traces its origins to Uruguay and notes that the game is now played across more than 170 of FIFA's 211 member associations.",
                "Football has continuously evolved to meet the needs of players of every age and ability. Across the world, smaller playing areas and reduced-sided games have helped millions develop technical skill, creativity, speed, and tactical awareness. From the early development of futsal in South America to grassroots football played in communities worldwide, small-sided football has become an essential part of the sport's evolution.",
                "England developed its own long tradition of small-sided football. Historical references indicate that five-a-side competitions were already being played in England in the 1880s, while small-sided games were also used by football clubs as part of player training during the early twentieth century. Informal and street football likewise remained an important part of football culture, demonstrating how the game could adapt naturally to smaller spaces and fewer players.",
                "The same principle can be seen in other football cultures. In Brazil, informal forms such as pelada and futebol de várzea developed as accessible community forms of football, particularly in urban and working-class environments. In the Netherlands, small-sided indoor football became established as zaalvoetbal, building on the wider European development of the small-sided game.",
                "Iran has its own distinctive contribution to this tradition. For decades, Gol Koochik (“Small Goal”) has been played as a form of street football using very small goals and limited playing areas. Its compact environment places a premium on ball control, dribbling, rapid decision-making, movement, and the ability of players to participate in both attacking and defensive situations. The format has been part of Iran's grassroots football culture and represents another example of how football naturally evolves when players adapt the game to the spaces available to them.",
                "These traditions share a common principle: when the space becomes smaller and the number of players is reduced, every touch matters. Players have less time, fewer options, and greater responsibility. The result is a form of football that places technical ability, awareness, speed, creativity, and teamwork at the center of the game.",
                "World Mini Mini Football builds on this international heritage while taking the small-sided concept into a standardized modern format. Rather than replacing the traditions that came before it, WMMF draws from the global experience of small-sided football and develops its own defined playing structure, dimensions, equipment, regulations, and competitive framework.",
                "With its compact field, three-player format, small goals, fast transitions, and emphasis on technical and intelligent play, World Mini Mini Football represents another chapter in the continuing evolution of football—designed to be accessible, exciting, and playable by people of different ages, backgrounds, and levels of experience",
              ].map((p, i) => (
                <p
                  key={i}
                  className="font-body text-[15px] leading-relaxed text-muted-foreground text-justify"
                >
                  {p}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <OriginsTimeline />
      <CTASection
        title="Discover How the Game Is Played"
        description="Explore the official competition rules and see how the WMMF format comes to life on the pitch."
        buttonLabel="View Competition Rules"
        buttonHref="/rules-regulations"
      />
    </>
  );
}
