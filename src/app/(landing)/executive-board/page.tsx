import PageBanner from "@/components/layout/PageBanner";
import { siteConfig } from "@/data/site";
import ExecutiveBoard from "@/features/landing/ExecutiveBoard";
import type { Metadata } from "next";

const title = "Executive WMMF";
const description =
  "World Mini Mini Football (WMMF) is the international governing body for a fast, accessible 3-on-3 football format. Discover our vision, mission, and global development pathway.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/executive-board" },
  openGraph: {
    title: `${title} | ${siteConfig.shortName}`,
    description,
    url: `${siteConfig.url}/executive-board`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: title,
  description,
  url: `${siteConfig.url}/executive-board`,
  about: {
    "@type": "SportsOrganization",
    name: siteConfig.name,
  },
};

const ExecutiveBoardPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner
        title="Executive Board"
        breadcrumbs={[{ label: "Executive Board" }]}
        backgroundImage="/images/banners/page-banner.webp"
      />
      <ExecutiveBoard />
    </>
  );
};

export default ExecutiveBoardPage;
