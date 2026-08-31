import type { Metadata } from "next";
import TheSport from "@/features/landing/TheSport";
import { siteConfig } from "@/data/site";
import PageBanner from "@/components/layout/PageBanner";

const title = "History of Small-Sided Football";
const description =
  "From futsal's global roots to Iran's Gol Koochik tradition, discover the story behind World Mini Mini Football's modern 3-on-3 format.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/history-of-the-sport" },
  openGraph: {
    title: `${title} | ${siteConfig.shortName}`,
    description,
    url: `${siteConfig.url}/history-of-the-sport`,
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${siteConfig.url}/history-of-the-sport`,
  publisher: {
    "@type": "SportsOrganization",
    name: siteConfig.name,
  },
};

export default function HistoryOfTheSportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner
        title="History of Small-Sided Football"
        backgroundImage="/images/banners/page-banner.webp"
        breadcrumbs={[{ label: "History of the Sport" }]}
      />
      <TheSport />
    </>
  );
}
