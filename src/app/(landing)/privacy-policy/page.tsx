import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import PrivacyPolicy from "@/features/legal/PrivacyPolicy";
import { siteConfig } from "@/data/site";

const title = "Privacy Policy";
const description =
  "WMMF's Privacy Policy, Copyright & Intellectual Property Notice — how we handle your personal information and the terms governing use of WMMF's official content and trademarks.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: `${title} | ${siteConfig.shortName}`,
    description,
    url: `${siteConfig.url}/privacy-policy`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  url: `${siteConfig.url}/privacy-policy`,
  dateModified: "2026-07-01",
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner
        title="Privacy Policy"
        eyebrow="Legal"
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />
      <PrivacyPolicy />
    </>
  );
}
