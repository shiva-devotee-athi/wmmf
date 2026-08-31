import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
// import SectionHeading from "@/components/ui/SectionHeading";
import Statutes from "@/features/landing/Statutes";
import { siteConfig } from "@/data/site";

const title = "Statutes";
const description =
  "The official statutes of World Mini Mini Football (WMMF), defining the Federation's governance structure, membership system, powers, responsibilities, and organizational principles.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/statutes" },
  openGraph: {
    title: `${title} | ${siteConfig.shortName}`,
    description,
    url: `${siteConfig.url}/statutes`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  url: `${siteConfig.url}/statutes`,
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

export default function StatutesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner
        title="Statutes"
        breadcrumbs={[{ label: "Statutes" }]}
        backgroundImage="/images/banners/page-banner.webp"
      />

      <Statutes />
    </>
  );
}
