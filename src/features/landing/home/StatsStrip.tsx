"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "motion/react";
import { federationStats } from "@/data/members";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span
      ref={ref}
      className="font-heading text-4xl font-extrabold uppercase text-secondary-950 sm:text-5xl"
    >
      {display}
      <span className="text-primary-600">{suffix}</span>
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="relative overflow-hidden border-y border-slate-200/70 bg-gradient-to-r from-slate-50 via-white to-slate-50 py-12">
      {/* Background Drawing / Sketches Watermark */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.14]">
        <Image
          src="/images/sketches/sketch_1.webp"
          alt="Sports sketch background"
          fill
          className="object-cover object-center mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-2 gap-8 px-4 sm:grid-cols-4 xl:px-0">
        {federationStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="mt-2 font-heading text-[13px] font-bold uppercase tracking-wider text-muted-foreground">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
