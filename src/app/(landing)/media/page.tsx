import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import Gallery from "@/features/landing/Gallery";
import { siteConfig } from "@/data/site";
import { mediaEvents, cloudinaryUrl } from "@/data/media";

const title = "WMMF Media";
const description =
  "Photos and videos from World Mini Mini Football events around the world, including the WMMF demonstration and referee seminar in Pune, India.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/media" },
  openGraph: {
    title: `${title} | ${siteConfig.shortName}`,
    description,
    url: `${siteConfig.url}/media`,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: `${siteConfig.url}/media`,
  hasPart: mediaEvents.map((event) => ({
    "@type": "ImageGallery",
    name: event.name,
    description: event.description,
    image: event.photos.map((p) => cloudinaryUrl(p.publicId, 1200)),
  })),
};

export default function MediaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner
        title="WMMF Media"
        breadcrumbs={[{ label: "Media" }]}
        backgroundImage="/images/banners/page-banner.webp"
      />
      <Gallery />
    </>
  );
}
