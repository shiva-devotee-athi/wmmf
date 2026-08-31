"use client";

import { motion } from "motion/react";

type Tab = { id: string; label: string };

type Props = {
  tabs: Tab[];
  activeId: string;
  onChange: (id: string) => void;
  layoutId: string;
  size?: "md" | "sm";
};

export default function AnimatedTabs({
  tabs,
  activeId,
  onChange,
  layoutId,
  size = "md",
}: Props) {
  const padding = size === "sm" ? "px-4 py-2" : "px-5 py-2.5";
  const text = size === "sm" ? "text-[13px]" : "text-[14px]";

  return (
    <div className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-black/[0.06] bg-muted p-1.5">
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`relative rounded-full font-body ${text} font-semibold transition-colors duration-200 ${padding} ${
              isActive
                ? "text-white"
                : "text-secondary-600 hover:text-secondary-900"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute inset-0 rounded-full bg-primary-600"
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
