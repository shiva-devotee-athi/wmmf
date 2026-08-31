import SplitContentLogo from "./about/Splitcontentlogo";
import VisionMissionGrid from "./about/VisionMissionGrid";
import OurSportStrip from "./about/OurSportStrip";
import YouthDevelopment from "./about/YouthDevelopment";
import TaglineStatement from "./about/TaglineStatement";

export default function About() {
  return (
    <>
      <SplitContentLogo
        eyebrow="Our Mission"
        title="A New Way To Play. A New Way To Connect."
        imageSrc="/images/logo.png"
        imageAlt="World Mini Mini Football crest"
        paragraphs={[
          "World Mini Mini Football (WMMF) is a modern, dynamic and inclusive form of football designed to make the game accessible, engaging and enjoyable for players of different ages and levels.",
          "WMMF combines the spirit of football with a fast and compact 3-on-3 format that encourages creativity, technical ability, speed, teamwork and discipline.",
        ]}
      />
      <VisionMissionGrid />
      <OurSportStrip />
      <YouthDevelopment />
      <TaglineStatement />
    </>
  );
}
