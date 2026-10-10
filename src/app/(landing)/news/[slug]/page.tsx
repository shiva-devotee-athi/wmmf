import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageBanner from "@/components/layout/PageBanner";
import NewsArticle from "@/features/landing/NewsArticle";
import { newsItems, type NewsItem } from "@/data/news";
import { siteConfig } from "@/data/site";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { NewsDoc } from "@/types/news";

type Params = { slug: string };

async function getAllNews(): Promise<NewsItem[]> {
  try {
    const snapshot = await getDocs(collection(db, "news"));
    if (!snapshot.empty) {
      return snapshot.docs.map((d) => {
        const data = d.data() as NewsDoc;
        const cleanSlug = (data.slug || "").replace(/^\/news\//, "");
        return {
          slug: cleanSlug,
          title: data.title || "",
          subTitle: data.subTitle || "",
          content:
            typeof data.content === "string"
              ? data.content.split("\n\n").filter(Boolean)
              : Array.isArray(data.content)
                ? data.content
                : [],
          date: data.date || new Date().toISOString(),
          category: data.category || "News",
          image: data.image || "/images/banners/page-banner.webp",
          tags:
            typeof data.tags === "string"
              ? data.tags
                  .split(",")
                  .map((t) => t.trim())
                  .filter(Boolean)
              : Array.isArray(data.tags)
                ? data.tags
                : [],
        };
      });
    }
  } catch (err) {
    console.error("Error fetching news from Firestore:", err);
  }
  return newsItems;
}

export async function generateStaticParams(): Promise<Params[]> {
  const allNews = await getAllNews();
  return allNews.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const allNews = await getAllNews();
  const article = allNews.find((item) => item.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.subTitle,
    alternates: { canonical: `/news/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.subTitle,
      url: `${siteConfig.url}/news/${article.slug}`,
      images: [{ url: article.image }],
      publishedTime: article.date,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.subTitle,
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
  const allNews = await getAllNews();
  const index = allNews.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const article = allNews[index];
  const prev = index < allNews.length - 1 ? allNews[index + 1] : null;
  const next = index > 0 ? allNews[index - 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.subTitle,
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
