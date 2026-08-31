import PageBanner from "@/components/layout/PageBanner";
import Contact from "@/features/landing/Contact";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | WMMF",
  description:
    "Get in touch with WMMF. Send us a message and our team will get back to you as soon as possible.",
  keywords: [
    "WMMF",
    "contact WMMF",
    "contact us",
    "customer support",
    "support",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | WMMF",
    description: "Have a question or need assistance? Contact the WMMF team.",
    url: "/contact",
    siteName: "WMMF",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ContactPage = () => {
  return (
    <>
      <PageBanner
        title="Contact Us"
        breadcrumbs={[{ label: "Contact" }]}
        backgroundImage="/images/banners/page-banner.webp"
      />
      <Contact />
    </>
  );
};

export default ContactPage;
