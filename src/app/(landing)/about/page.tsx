import PageBanner from "@/components/layout/PageBanner";
import { siteConfig } from "@/data/site";
import About from "@/features/landing/About";
import type { Metadata } from "next";
import React from "react";

const title = "About WMMF";
const description =
  "World Mini Mini Football (WMMF) is the international governing body for a fast, accessible 3-on-3 football format. Discover our vision, mission, and global development pathway.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `${title} | ${siteConfig.shortName}`,
    description,
    url: `${siteConfig.url}/about`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: title,
  description,
  url: `${siteConfig.url}/about`,
  about: {
    "@type": "SportsOrganization",
    name: siteConfig.name,
  },
};

const AboutPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner
        title="About Us"
        breadcrumbs={[{ label: "About" }]}
        backgroundImage="/images/banners/page-banner.webp"
      />
      <About />
    </>
  );
};

export default AboutPage;
