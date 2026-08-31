"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu } from "lucide-react";
import { navItems, ctaLink } from "@/data/nav";
import MobileNav from "./MobileNav";
import Logo from "../common/Logo";

const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    y: 8,
    scale: 0.98,
    transition: { duration: 0.12, ease: "easeIn" as const },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  const handleEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[0_2px_20px_rgba(10,10,10,0.08)] backdrop-blur-sm"
          : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-4 xl:px-0">
        {/* Logo */}
        <Logo className="w-16 h-16" />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const hasChildren = !!item.children?.length;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => hasChildren && handleEnter(item.label)}
                onMouseLeave={() => hasChildren && handleLeave()}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 font-body text-[14px] font-medium transition-colors duration-150 ${
                    isActive
                      ? "text-primary-600"
                      : "text-secondary-900 hover:text-primary-600"
                  }`}
                  aria-haspopup={hasChildren}
                  aria-expanded={openMenu === item.label}
                >
                  {item.label}
                  {hasChildren && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        openMenu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {hasChildren && openMenu === item.label && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-[var(--popup-corner-radius)] border border-black/[var(--popup-border-opacity)] bg-white shadow-[var(--popup-shadow-horizontal-offset)_var(--popup-shadow-vertical-offset)_var(--popup-shadow-blur-radius)_rgba(10,10,10,var(--popup-shadow-opacity))]"
                    >
                      <div className="p-2">
                        {item.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-lg px-4 py-3 transition-colors duration-150 hover:bg-primary-50"
                          >
                            <p className="font-body text-[14px] font-semibold text-secondary-900">
                              {child.label}
                            </p>
                            {child.description && (
                              <p className="mt-0.5 font-body text-[12.5px] text-muted-foreground">
                                {child.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* CTA + mobile trigger */}
        <div className="flex items-center gap-3">
          <Link
            href={ctaLink.href}
            className="hidden rounded-full bg-primary-600 px-5 py-2.5 font-body text-[14px] font-semibold text-white shadow-sm transition-transform duration-150 hover:scale-[1.03] hover:bg-primary-700 lg:inline-flex"
          >
            {ctaLink.label}
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-md text-secondary-900 lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
