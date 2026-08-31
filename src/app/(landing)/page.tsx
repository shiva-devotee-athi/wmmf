import type { Metadata } from "next";
import Home from "@/features/landing/Home";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.shortName} | Official International Governing Body`,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
