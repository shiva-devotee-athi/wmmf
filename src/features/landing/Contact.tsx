"use client";

import { motion } from "motion/react";
import { Headset, MapPin, Smartphone } from "lucide-react";
import ContactForm from "./home/ContactForm";
import { siteConfig } from "@/data/site";
import AnimatedDivider from "@/components/common/Animateddivider";

const infoItems = [
  {
    icon: Headset,
    title: "Technical Support",
    lines: [siteConfig.email],
  },
  {
    icon: MapPin,
    title: "Address",
    lines: [siteConfig.address],
  },
  //   {
  //     icon: Phone,
  //     title: "Land Line",
  //     lines: [siteConfig.phone],
  //   },
  {
    icon: Smartphone,
    title: "Mobile",
    lines: [siteConfig.phone],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ContactSection({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const titleContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };

  const titleItem = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };
  return (
    <section className="mb-10 sm:mb-24 mt-10">
      <div className="mx-auto w-full max-w-[1200px] px-4 xl:px-0">
        <motion.div
          variants={titleContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className={`max-w-2xl mx-auto text-center`}
        >
          <motion.h2
            variants={titleItem}
            className={`mt-4 font-heading text-[30px] font-bold sm:text-[36px] text-secondary-900`}
          >
            Let's Connect
          </motion.h2>

          <motion.div
            variants={titleItem}
            className={"mt-4 flex justify-center"}
          >
            <AnimatedDivider color={"bg-secondary-900"} />
          </motion.div>

          <motion.p
            variants={titleItem}
            className={`mt-4 font-body text-[15px] leading-relaxed text-muted-foreground mx-auto`}
          >
            Drop us a message using the form below. Whether you have questions,
            need support, or want to explore partnership opportunities, we’re
            always happy to help.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-10 block rounded-[var(--popup-corner-radius)] border border-[#ccd5df] bg-white/85 px-6 py-12 shadow-lg backdrop-blur-2xl md:px-12 md:py-16"
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <ContactForm searchParams={searchParams} />
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="grid grid-cols-1 gap-8 h-fit sm:grid-cols-1 lg:col-span-7"
            >
              <div className="flex flex-col gap-8">
                {infoItems.map(({ icon: Icon, title, lines }) => (
                  <motion.div
                    key={title}
                    variants={item}
                    className="flex items-start"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="ml-5 grow">
                      <p className="mb-1.5 font-heading text-[15px] font-semibold text-secondary-900">
                        {title}
                      </p>
                      {lines.map((line) => (
                        <p
                          key={line}
                          className="font-body text-[13.5px] text-muted-foreground"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="relative h-[300px] w-full overflow-hidden">
                <iframe
                  src="https://www.google.com/maps?q=Pune,Maharashtra,India&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="WMMF Head Office location — Pune, India"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
