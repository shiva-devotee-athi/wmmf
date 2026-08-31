"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import AuthGuard from "./AuthGuard";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const titles: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/messages": "Contact Messages",
  "/admin/news": "News",
  "/admin/members": "Members",
  "/admin/documents": "Documents",
  "/admin/media": "Media",
};

export default function AdminShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const title = titles[pathname] ?? "Admin";

  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-muted/40">
        <Sidebar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar title={title} onMenuClick={() => setMobileOpen(true)} />
          <main className="flex-1 p-5 lg:p-8">{children}</main>
        </div>
      </div>
    </AuthGuard>
  );
}
