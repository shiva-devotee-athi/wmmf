"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import AnimatedTabs from "@/components/common/AnimatedTabs";
import DataTable, { type Column } from "@/features/admin/components/DataTable";
import FormModal from "@/features/admin/components/FormModal";
import FormField from "@/features/admin/components/FormField";
import FileUploader from "@/features/admin/components/FileUploader";
import {
  useFirestoreCollection,
  type WithId,
} from "@/hooks/useFirestoreCollection";
import type { MediaPhotoDoc, MediaVideoDoc } from "@/types/media";

const emptyPhoto: MediaPhotoDoc = {
  eventSlug: "",
  eventName: "",
  imageUrl: "",
  publicId: "",
  alt: "",
};
const emptyVideo: MediaVideoDoc = {
  eventSlug: "",
  eventName: "",
  youtubeId: "",
  title: "",
};

function PhotosTab() {
  const { items, loading, create, update, remove } =
    useFirestoreCollection<MediaPhotoDoc>("mediaPhotos");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<MediaPhotoDoc>(emptyPhoto);
  const [saving, setSaving] = useState(false);

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyPhoto);
    setModalOpen(true);
  };
  const openEdit = (row: WithId<MediaPhotoDoc>) => {
    setEditingId(row.id);
    setForm(row);
    setModalOpen(true);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingId) await update(editingId, form);
      else await create(form);
      toast.success("Photo saved.");
      setModalOpen(false);
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setSaving(false);
    }
  };
  const handleDelete = async (row: WithId<MediaPhotoDoc>) => {
    if (!confirm("Delete this photo?")) return;
    await remove(row.id);
    toast.success("Photo deleted.");
  };

  const columns: Column<MediaPhotoDoc>[] = [
    {
      header: "Preview",
      render: (row) => (
        <div className="relative h-12 w-16 overflow-hidden rounded-md bg-muted">
          {row.imageUrl && (
            <Image
              src={row.imageUrl}
              alt={row.alt}
              fill
              className="object-cover"
            />
          )}
        </div>
      ),
    },
    { header: "Event", render: (row) => row.eventName },
    { header: "Alt Text", render: (row) => row.alt },
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
          New Photo
        </button>
      </div>

      <DataTable
        columns={columns}
        rows={items}
        loading={loading}
        emptyLabel="No photos yet."
        pageSize={16}
        onEdit={openEdit}
        onDelete={handleDelete}
      />

      <FormModal
        open={modalOpen}
        title={editingId ? "Edit Photo" : "New Photo"}
        onClose={() => setModalOpen(false)}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label="Event Name"
            required
            value={form.eventName}
            onChange={(e) =>
              setForm((f) => ({ ...f, eventName: e.target.value }))
            }
            placeholder="WMMF - Pune, India"
          />
          <FormField
            label="Event Slug"
            required
            value={form.eventSlug}
            onChange={(e) =>
              setForm((f) => ({ ...f, eventSlug: e.target.value }))
            }
            placeholder="pune-india"
          />
          <FormField
            label="Alt Text"
            required
            value={form.alt}
            onChange={(e) => setForm((f) => ({ ...f, alt: e.target.value }))}
          />
          <FileUploader
            label="Photo"
            value={form.imageUrl}
            folder="wmmf/media"
            onUploaded={({ url, publicId }) =>
              setForm((f) => ({ ...f, imageUrl: url, publicId }))
            }
            onClear={() =>
              setForm((f) => ({ ...f, imageUrl: "", publicId: "" }))
            }
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
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </FormModal>
    </div>
  );
}

function VideosTab() {
  const { items, loading, create, update, remove } =
    useFirestoreCollection<MediaVideoDoc>("mediaVideos");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<MediaVideoDoc>(emptyVideo);
  const [saving, setSaving] = useState(false);

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyVideo);
    setModalOpen(true);
  };
  const openEdit = (row: WithId<MediaVideoDoc>) => {
    setEditingId(row.id);
    setForm(row);
    setModalOpen(true);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingId) await update(editingId, form);
      else await create(form);
      toast.success("Video saved.");
      setModalOpen(false);
    } catch {
      toast.error("Something went wrong.");
    } finally {
      setSaving(false);
    }
  };
  const handleDelete = async (row: WithId<MediaVideoDoc>) => {
    if (!confirm("Delete this video?")) return;
    await remove(row.id);
    toast.success("Video deleted.");
  };

  const columns: Column<MediaVideoDoc>[] = [
    {
      header: "Thumbnail",
      render: (row) =>
        row.youtubeId ? (
          <div className="relative h-12 w-20 overflow-hidden rounded-md bg-muted">
            <Image
              src={`https://img.youtube.com/vi/${row.youtubeId}/default.jpg`}
              alt={row.title}
              fill
              className="object-cover"
            />
          </div>
        ) : null,
    },
    { header: "Event", render: (row) => row.eventName },
    { header: "Title", render: (row) => row.title },
    { header: "YouTube ID", render: (row) => row.youtubeId },
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
          New Video
        </button>
      </div>

      <DataTable
        columns={columns}
        rows={items}
        loading={loading}
        emptyLabel="No videos yet."
        pageSize={16}
        onEdit={openEdit}
        onDelete={handleDelete}
      />

      <FormModal
        open={modalOpen}
        title={editingId ? "Edit Video" : "New Video"}
        onClose={() => setModalOpen(false)}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label="Event Name"
            required
            value={form.eventName}
            onChange={(e) =>
              setForm((f) => ({ ...f, eventName: e.target.value }))
            }
            placeholder="WMMF - Pune, India"
          />
          <FormField
            label="Event Slug"
            required
            value={form.eventSlug}
            onChange={(e) =>
              setForm((f) => ({ ...f, eventSlug: e.target.value }))
            }
            placeholder="pune-india"
          />
          <FormField
            label="Video Title"
            required
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
          />
          <FormField
            label="YouTube Video ID"
            required
            value={form.youtubeId}
            onChange={(e) =>
              setForm((f) => ({ ...f, youtubeId: e.target.value }))
            }
            hint="The part after v= or youtu.be/ in the video URL"
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
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </FormModal>
    </div>
  );
}

export default function AdminMediaPage() {
  const [tab, setTab] = useState<"photos" | "videos">("photos");

  return (
    <div className="space-y-6">
      <AnimatedTabs
        tabs={[
          { id: "photos", label: "Photos" },
          { id: "videos", label: "Videos" },
        ]}
        activeId={tab}
        onChange={(id) => setTab(id as "photos" | "videos")}
        layoutId="admin-media-tab"
        size="sm"
      />
      {tab === "photos" ? <PhotosTab /> : <VideosTab />}
    </div>
  );
}
