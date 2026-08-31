import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/layout/PageBanner";
import NewsArticle from "@/features/landing/NewsArticle";
import { newsItems } from "@/data/news";
import { siteConfig } from "@/data/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = newsItems.find((item) => item.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `${siteConfig.url}/news/${article.slug}`,
      images: [{ url: article.image }],
      publishedTime: article.date,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const index = newsItems.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const article = newsItems[index];
  const prev = index < newsItems.length - 1 ? newsItems[index + 1] : null;
  const next = index > 0 ? newsItems[index - 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: [article.image],
    datePublished: article.date,
    url: `${siteConfig.url}/news/${article.slug}`,
    publisher: {
      "@type": "SportsOrganization",
      name: siteConfig.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner
        title="News Article"
        breadcrumbs={[{ label: "News", href: "/news" }, { label: "Article" }]}
        backgroundImage="/images/banners/page-banner.webp"
      />
      <NewsArticle article={article} prev={prev} next={next} />
    </>
  );
}
