import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import Members from "@/features/landing/Members";
import { siteConfig } from "@/data/site";
import { leadershipMembers } from "@/data/leadership";

const title = "Federation Members";
const description =
  "Meet the World Mini Mini Football (WMMF) leadership team and explore the national federations affiliated with WMMF around the world.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/members" },
  openGraph: {
    title: `${title} | ${siteConfig.shortName}`,
    description,
    url: `${siteConfig.url}/members`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: siteConfig.name,
  url: siteConfig.url,
  member: leadershipMembers.map((m) => ({
    "@type": "Person",
    name: m.name,
    jobTitle: m.role,
  })),
};

export default function MembersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner
        title="Federation Members"
        breadcrumbs={[{ label: "Members" }]}
        backgroundImage="/images/banners/page-banner.webp"
      />
      <Members />
    </>
  );
}
