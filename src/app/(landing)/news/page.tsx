import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import News from "@/features/landing/News";
import { siteConfig } from "@/data/site";
import { newsItems } from "@/data/news";

const title = "WMMF News";
const description =
  "The latest news and announcements from World Mini Mini Football — event recaps, referee seminars, and milestones from the Federation's global development.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/news" },
  openGraph: {
    title: `${title} | ${siteConfig.shortName}`,
    description,
    url: `${siteConfig.url}/news`,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: `${siteConfig.url}/news`,
  hasPart: newsItems.map((news) => ({
    "@type": "NewsArticle",
    headline: news.title,
    description: news.subTitle,
    datePublished: news.date,
    url: `${siteConfig.url}/news/${news.slug}`,
    publisher: {
      "@type": "SportsOrganization",
      name: siteConfig.name,
    },
  })),
};

export default function NewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner
        title="WMMF News"
        breadcrumbs={[{ label: "News" }]}
        backgroundImage="/images/banners/page-banner.webp"
      />
      <News />
    </>
  );
}
