import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import CompetitionRules from "@/features/landing/CompetitionRules";
import { competitionDocuments } from "@/data/documents";
import { siteConfig } from "@/data/site";

const title = "Rules & Regulations";
const description =
  "Official World Mini Mini Football competition rules, disciplinary procedures, referee regulations, and technical requirements governing WMMF events for all age categories.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/rules-regulations" },
  openGraph: {
    title: `${title} | ${siteConfig.shortName}`,
    description,
    url: `${siteConfig.url}/rules-regulations`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: `${siteConfig.url}/rules-regulations`,
  hasPart: competitionDocuments.map((doc) => ({
    "@type": "DigitalDocument",
    name: doc.title,
    description: doc.description,
    url: `${siteConfig.url}${doc.fileHref}`,
  })),
};

export default function RulesRegulationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner
        title="Rules & Regulations"
        breadcrumbs={[{ label: "Rules & Regulations" }]}
        backgroundImage="/images/banners/page-banner.webp"
      />
      <CompetitionRules />
    </>
  );
}
