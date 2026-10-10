import AboutDocumentContent from "./about/AboutDocumentContent";
import SplitContentLogo from "./about/Splitcontentlogo";
import VisionMissionGrid from "./about/VisionMissionGrid";
import OurSportStrip from "./about/OurSportStrip";
import YouthDevelopment from "./about/YouthDevelopment";
import TaglineStatement from "./about/TaglineStatement";

export default function About() {
  return (
    <>
      <AboutDocumentContent />
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
      <VisionMissionGrid />
      <OurSportStrip />
      <YouthDevelopment />
      <TaglineStatement />
    </>
  );
}
