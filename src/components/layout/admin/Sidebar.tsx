"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard,
  MessageSquare,
  Newspaper,
  Users,
  FileText,
  Image as ImageIcon,
  LogOut,
  X,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Contact Messages", href: "/admin/messages", icon: MessageSquare },
  { label: "News", href: "/admin/news", icon: Newspaper },
  { label: "Members", href: "/admin/members", icon: Users },
  { label: "Documents", href: "/admin/documents", icon: FileText },
  { label: "Media", href: "/admin/media", icon: ImageIcon },
];

type Props = {
  mobileOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ mobileOpen, onClose }: Props) {
  const pathname = usePathname();
  const { signOut, user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace("/admin/login");
  };

  const content = (
    <div className="flex h-full flex-col bg-secondary-900">
      <div className="flex items-center gap-2.5 px-6 py-6">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600 font-heading text-sm font-bold text-white">
          W
        </span>
        <span className="font-heading text-[14px] font-bold uppercase tracking-wide text-white">
          WMMF Admin
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="ml-auto flex h-8 w-8 items-center justify-center rounded-full text-white/60 hover:text-white lg:hidden"
        >
          <X className="h-4.5 w-4.5" />
        </button>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={`flex items-center gap-3 rounded-lg px-3.5 py-2.5 font-body text-[13.5px] font-medium transition-colors duration-150 ${
                isActive
                  ? "bg-primary-600 text-white"
                  : "text-white/65 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon className="h-4.5 w-4.5" />
              {label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <p className="truncate px-1.5 font-body text-[12px] text-white/50">
          {user?.email}
        </p>
        <button
          type="button"
          onClick={handleSignOut}
          className="mt-2 flex w-full items-center gap-3 rounded-lg px-3.5 py-2.5 font-body text-[13.5px] font-medium text-white/65 transition-colors hover:bg-white/5 hover:text-white"
        >
          <LogOut className="h-4.5 w-4.5" />
          Sign Out
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden w-64 shrink-0 lg:block">{content}</aside>

      {/* Mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 left-0 z-50 w-64 lg:hidden"
            >
              {content}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
