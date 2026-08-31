"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import DataTable, { type Column } from "@/features/admin/components/DataTable";
import FormModal from "@/features/admin/components/FormModal";
import FormField from "@/features/admin/components/FormField";
import ImageUploader from "@/features/admin/components/ImageUploader";
import {
  useFirestoreCollection,
  type WithId,
} from "@/hooks/useFirestoreCollection";
import type { NewsDoc } from "@/types/news";

const emptyForm: NewsDoc = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  date: new Date().toISOString().slice(0, 10),
  category: "",
  image: "",
  tags: "",
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function AdminNewsPage() {
  const { items, loading, create, update, remove } =
    useFirestoreCollection<NewsDoc>("news");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<NewsDoc>(emptyForm);
  const [saving, setSaving] = useState(false);

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (row: WithId<NewsDoc>) => {
    setEditingId(row.id);
    setForm(row);
    setModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingId) {
        await update(editingId, form);
        toast.success("Article updated.");
      } else {
        await create(form);
        toast.success("Article published.");
      }
      setModalOpen(false);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (row: WithId<NewsDoc>) => {
    if (!confirm(`Delete "${row.title}"? This cannot be undone.`)) return;
    await remove(row.id);
    toast.success("Article deleted.");
  };

  const columns: Column<NewsDoc>[] = [
    {
      header: "Image",
      render: (row) => (
        <div className="relative h-10 w-16 overflow-hidden rounded-md bg-muted">
          {row.image && (
            <Image
              src={row.image}
              alt={row.title}
              fill
              className="object-cover"
            />
          )}
        </div>
      ),
    },
    {
      header: "Title",
      render: (row) => <span className="font-semibold">{row.title}</span>,
    },
    { header: "Category", render: (row) => row.category },
    { header: "Date", render: (row) => row.date },
  ];

  return (
    <div className="space-y-5">
      <div className="flex justify-end">
        <button
          type="button"
          onClick={openCreate}
          className="flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 font-body text-[13.5px] font-semibold text-white hover:bg-primary-700"
        >
          <Plus className="h-4 w-4" />
          New Article
        </button>
      </div>

      <DataTable
        columns={columns}
        rows={items}
        loading={loading}
        emptyLabel="No articles yet. Create your first one."
        onEdit={openEdit}
        onDelete={handleDelete}
      />

      <FormModal
        open={modalOpen}
        title={editingId ? "Edit Article" : "New Article"}
        onClose={() => setModalOpen(false)}
        maxWidth="max-w-2xl"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label="Title"
            required
            value={form.title}
            onChange={(e) => {
              const title = e.target.value;
              setForm((f) => ({
                ...f,
                title,
                slug: editingId ? f.slug : slugify(title),
              }));
            }}
          />
          <FormField
            label="Slug"
            required
            value={form.slug}
            onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
            hint="Used in the URL: /news/your-slug"
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Category"
              required
              value={form.category}
              onChange={(e) =>
                setForm((f) => ({ ...f, category: e.target.value }))
              }
              placeholder="Event, Milestone, Development..."
            />
            <FormField
              label="Date"
              type="date"
              required
              value={form.date}
              onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
            />
          </div>
          <FormField
            label="Excerpt"
            as="textarea"
            rows={2}
            required
            value={form.excerpt}
            onChange={(e) =>
              setForm((f) => ({ ...f, excerpt: e.target.value }))
            }
          />
          <FormField
            label="Content"
            as="textarea"
            rows={8}
            required
            value={form.content}
            onChange={(e) =>
              setForm((f) => ({ ...f, content: e.target.value }))
            }
            hint="Separate paragraphs with a blank line."
          />
          <FormField
            label="Tags"
            value={form.tags}
            onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))}
            placeholder="National Team, Qualifiers"
            hint="Comma-separated"
          />
          <ImageUploader
            label="Featured Image"
            value={form.image}
            folder="wmmf/news"
            onUploaded={({ url }) => setForm((f) => ({ ...f, image: url }))}
            onClear={() => setForm((f) => ({ ...f, image: "" }))}
          />

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="rounded-full px-5 py-2.5 font-body text-[13.5px] font-semibold text-secondary-600 hover:bg-muted"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="rounded-full bg-primary-600 px-6 py-2.5 font-body text-[13.5px] font-semibold text-white hover:bg-primary-700 disabled:opacity-70"
            >
              {saving ? "Saving..." : editingId ? "Save Changes" : "Publish"}
            </button>
          </div>
        </form>
      </FormModal>
    </div>
  );
}
