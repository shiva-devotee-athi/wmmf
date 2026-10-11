"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, X } from "lucide-react";
import { navItems, ctaLink } from "@/data/nav";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileNav({ open, onClose }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/50 lg:hidden"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed h-screen inset-y-0 right-0 z-[70] flex w-[85%] max-w-sm flex-col bg-white shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-black/5 px-5 py-5">
              <span className="font-heading text-[14px] font-bold uppercase tracking-wide text-secondary-900">
                WMMF Menu
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-secondary-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4">
              {navItems.map((item) => {
                const hasChildren = !!item.children?.length;
                const isExpanded = expanded === item.label;

                return (
                  <div
                    key={item.label}
                    className="border-b border-black/5 last:border-none"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => !hasChildren && onClose()}
                        className="flex-1 py-3.5 font-body text-[15px] font-medium text-secondary-900"
                      >
                        {item.label}
                      </Link>
                      {hasChildren && (
                        <button
                          type="button"
                          onClick={() =>
                            setExpanded(isExpanded ? null : item.label)
                          }
                          aria-label={`Toggle ${item.label} submenu`}
                          className="p-3.5"
                        >
                          <ChevronDown
                            className={`h-4 w-4 text-secondary-900 transition-transform duration-200 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    <AnimatePresence initial={false}>
                      {hasChildren && isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-4 pb-2"
                        >
                          {item.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={onClose}
                              className="block rounded-md py-2.5 pl-2 font-body text-[14px] text-muted-foreground"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <div className="border-t border-black/5 p-5">
              <Link
                href={ctaLink.href}
                onClick={onClose}
                className="block w-full rounded-full bg-primary-600 py-3 text-center font-body text-[14px] font-semibold text-white"
              >
                {ctaLink.label}
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
