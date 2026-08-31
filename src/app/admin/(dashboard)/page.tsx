"use client";

import Link from "next/link";
import {
  Newspaper,
  Users,
  FileText,
  Image as ImageIcon,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import StatCard from "@/features/admin/components/StatCard";
import { useFirestoreCollection } from "@/hooks/useFirestoreCollection";
import type { NewsDoc } from "@/types/news";
import type { MemberDoc } from "@/types/member";
import type { DocumentDoc } from "@/types/document";
import type { MessageDoc } from "@/types/message";

export default function DashboardPage() {
  const news = useFirestoreCollection<NewsDoc>("news");
  const members = useFirestoreCollection<MemberDoc>("members");
  const documents = useFirestoreCollection<DocumentDoc>("documents");
  const messages = useFirestoreCollection<MessageDoc>("messages");

  const unreadCount = messages.items.filter((m) => !m.read).length;
  const recentMessages = messages.items.slice(0, 5);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        <StatCard
          label="News Articles"
          value={news.items.length}
          icon={Newspaper}
        />
        <StatCard label="Members" value={members.items.length} icon={Users} />
        <StatCard
          label="Documents"
          value={documents.items.length}
          icon={FileText}
        />
        <StatCard
          label="Unread Messages"
          value={unreadCount}
          icon={MessageSquare}
        />
        <StatCard
          label="Total Messages"
          value={messages.items.length}
          icon={ImageIcon}
        />
      </div>

      <div className="rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] bg-white p-6 shadow-[var(--card-shadow-horizontal-offset)_var(--card-shadow-vertical-offset)_var(--card-shadow-blur-radius)_rgba(10,10,10,var(--card-shadow-opacity))]">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-[15px] font-semibold text-secondary-900">
            Recent Contact Messages
          </h2>
          <Link
            href="/admin/messages"
            className="flex items-center gap-1 font-body text-[12.5px] font-semibold text-primary-600 hover:text-primary-700"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-4 divide-y divide-black/[0.05]">
          {recentMessages.length === 0 ? (
            <p className="py-8 text-center font-body text-[13.5px] text-muted-foreground">
              No messages yet.
            </p>
          ) : (
            recentMessages.map((msg) => (
              <div
                key={msg.id}
                className="flex items-center justify-between gap-4 py-3.5"
              >
                <div className="min-w-0">
                  <p className="truncate font-body text-[13.5px] font-semibold text-secondary-900">
                    {msg.name}
                    {!msg.read && (
                      <span className="ml-2 inline-block h-1.5 w-1.5 rounded-full bg-primary-600 align-middle" />
                    )}
                  </p>
                  <p className="truncate font-body text-[12.5px] text-muted-foreground">
                    {msg.message}
                  </p>
                </div>
                <span className="shrink-0 font-body text-[11.5px] text-secondary-400">
                  {msg.email}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
