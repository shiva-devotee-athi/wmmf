"use client";

import { Mail, MailOpen, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useFirestoreCollection } from "@/hooks/useFirestoreCollection";
import type { MessageDoc } from "@/types/message";

export default function AdminMessagesPage() {
  const { items, loading, update, remove } =
    useFirestoreCollection<MessageDoc>("messages");

  const toggleRead = async (id: string, read: boolean) => {
    await update(id, { read: !read });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this message?")) return;
    await remove(id);
    toast.success("Message deleted.");
  };

  if (loading) {
    return (
      <p className="font-body text-[13.5px] text-muted-foreground">
        Loading messages...
      </p>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] bg-white p-12 text-center">
        <Mail className="mx-auto h-8 w-8 text-secondary-300" />
        <p className="mt-3 font-body text-[13.5px] text-muted-foreground">
          No messages yet. Submissions from the contact form will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((msg) => (
        <div
          key={msg.id}
          className={`rounded-[var(--card-corner-radius)] border p-5 shadow-[var(--card-shadow-horizontal-offset)_var(--card-shadow-vertical-offset)_var(--card-shadow-blur-radius)_rgba(10,10,10,var(--card-shadow-opacity))] ${
            msg.read
              ? "border-black/[var(--card-border-opacity)] bg-white"
              : "border-primary-200 bg-primary-50/40"
          }`}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-heading text-[14.5px] font-semibold text-secondary-900">
                {msg.name}
              </p>
              <a
                href={`mailto:${msg.email}`}
                className="font-body text-[12.5px] text-primary-600"
              >
                {msg.email}
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => toggleRead(msg.id, msg.read)}
                aria-label={msg.read ? "Mark unread" : "Mark read"}
                className="flex h-8 w-8 items-center justify-center rounded-md text-secondary-500 transition-colors hover:bg-secondary-50 hover:text-secondary-900"
              >
                {msg.read ? (
                  <Mail className="h-4 w-4" />
                ) : (
                  <MailOpen className="h-4 w-4" />
                )}
              </button>
              <button
                type="button"
                onClick={() => handleDelete(msg.id)}
                aria-label="Delete"
                className="flex h-8 w-8 items-center justify-center rounded-md text-secondary-500 transition-colors hover:bg-primary-50 hover:text-primary-600"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
          <p className="mt-3 font-body text-[13.5px] leading-relaxed text-secondary-700">
            {msg.message}
          </p>
        </div>
      ))}
    </div>
  );
}
