import SplitContentLogo from "./about/Splitcontentlogo";
import CTASection from "./theSport/CTASection";
import OriginsTimeline from "./theSport/OriginsTimeline";

export default function TheSport() {
  return (
    <>
      <SplitContentLogo
        reverse
        eyebrow="From Small Goals to WMMF"
        title="The Story Behind the Format"
        imageSrc="/images/logo.png"
        imageAlt="World Mini Mini Football crest"
        paragraphs={[
          "Football has continuously evolved to meet the needs of players of every age and ability. Across the world, smaller playing areas and reduced-sided games have helped millions develop technical skill, creativity, speed, and tactical awareness. From the early development of futsal in South America to grassroots football played in communities worldwide, small-sided football has become an essential part of the sport's evolution.",
          'For more than half a century, a traditional form of small-goal street football known in Iran as Gol Koochik ("Small Goal") has demonstrated how playing with very small goals encourages exceptional ball control, quick decision-making, creativity, and teamwork. This rich football culture has contributed significantly to the technical development of generations of Iranian football and futsal players.',
          "Inspired by the long tradition of skill-based football and the continuing evolution of the world's most popular sport, World Mini Mini Football (WMMF) introduces a modern international format that places precision, intelligence, speed, and technical excellence at the heart of the game. WMMF represents the next chapter in the global evolution of small-sided football, creating an exciting and accessible sport for players of all ages and backgrounds.",
        ]}
      />
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
