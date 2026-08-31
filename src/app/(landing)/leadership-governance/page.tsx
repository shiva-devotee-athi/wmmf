import PageBanner from "@/components/layout/PageBanner";
import { siteConfig } from "@/data/site";
import type { Metadata } from "next";
import React from "react";

const title = "Leadership & Governance | WMMF";
const description =
  "Meet the leadership team and explore the governance structure of the World Mini Mini Football Federation.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/leadership-governance" },
  openGraph: {
    title: `${title} | ${siteConfig.shortName}`,
    description,
    url: `${siteConfig.url}/leadership-governance`,
  },
};

export default function LeadershipGovernancePage() {
  return (
    <>
      <PageBanner
        title="Leadership & Governance"
        breadcrumbs={[{ label: "Leadership & Governance" }]}
        backgroundImage="/images/banners/page-banner.webp"
      />
      <section className="py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
        <div className="mx-auto w-full max-w-[1280px] px-4 xl:px-0 text-center">
          <h2 className="font-heading text-3xl font-bold text-secondary-900">
            Federation Leadership & Governance
          </h2>
          <p className="mt-4 font-body text-muted-foreground max-w-2xl mx-auto">
            WMMF operates under international standards of sports governance, integrity, and transparency.
          </p>
        </div>
      </section>
    </>
  );
}
