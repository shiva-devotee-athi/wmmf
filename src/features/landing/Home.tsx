import React from "react";
import NewHero from "./home/NewHero";
import StatsStrip from "./home/StatsStrip";
import AboutPreview from "./home/AboutPreview";
import WhyWMMF from "./home/WhyWMMF";
import WhatWeDo from "./home/WhatWeDo";
import NewsPreview from "./home/NewsPreview";
import GetInTouch from "./home/GetInTouch";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero Banner */}
      <NewHero />

      {/* 2. Stats Strip */}
      <StatsStrip />

      {/* 3. Who We Are (About Preview - Soft Tinted Background) */}
      <AboutPreview />

      {/* 4. Why Choose Us / The Future of Mini Mini Football (Clean White Background) */}
      <WhyWMMF />

      {/* 5. What We Do (Core Pillars - Soft Slate Background) */}
      <WhatWeDo />

      {/* 6. News & Media Updates (Clean White Background) */}
      <NewsPreview />

      {/* 7. Get In Touch (Dark Theme Closing CTA -> Connects into Footer) */}
      <GetInTouch />
    </div>
  );
};

export default Home;
