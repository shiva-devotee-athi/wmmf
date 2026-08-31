import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import RefereeGuidelines from "@/features/landing/RefereeGuidelines";
import { refereeHandbook } from "@/data/documents";
import { siteConfig } from "@/data/site";

const title = "Referee Guidelines";
const description =
  "The official WMMF Referee Rules and Guidelines — standards, responsibilities, and conduct expected of all match officials to ensure safe, fair, and professional officiating.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/wmmf-referee-rules-guidlines" },
  openGraph: {
    title: `${title} | ${siteConfig.shortName}`,
    description,
    url: `${siteConfig.url}/wmmf-referee-rules-guidlines`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  url: `${siteConfig.url}/wmmf-referee-rules-guidlines`,
  hasPart: {
    "@type": "DigitalDocument",
    name: refereeHandbook.title,
    description: refereeHandbook.description,
    url: `${siteConfig.url}${refereeHandbook.fileHref}`,
  },
};

export default function RefereeGuidelinesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner
        title="Referee Guidelines"
        breadcrumbs={[{ label: "Referee Guidelines" }]}
        backgroundImage="/images/banners/page-banner.webp"
      />
      <RefereeGuidelines />
    </>
  );
}
