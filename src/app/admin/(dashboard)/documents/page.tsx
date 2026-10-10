"use client";

import { useState } from "react";
import { FileText, Plus } from "lucide-react";
import { toast } from "sonner";
import DataTable, { type Column } from "@/features/admin/components/DataTable";
import FormModal from "@/features/admin/components/FormModal";
import FormField from "@/features/admin/components/FormField";
import FileUploader from "@/features/admin/components/FileUploader";
import {
  useFirestoreCollection,
  type WithId,
} from "@/hooks/useFirestoreCollection";
import type { DocumentDoc } from "@/types/document";

const emptyForm: DocumentDoc = {
  title: "",
  description: "",
  fileUrl: "",
  fileSize: "",
  category: "",
};

export default function AdminDocumentsPage() {
  const { items, loading, create, update, remove } =
    useFirestoreCollection<DocumentDoc>("documents");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<DocumentDoc>(emptyForm);
  const [saving, setSaving] = useState(false);

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (row: WithId<DocumentDoc>) => {
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
        toast.success("Document updated.");
      } else {
        await create(form);
        toast.success("Document added.");
      }
      setModalOpen(false);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (row: WithId<DocumentDoc>) => {
    if (!confirm(`Delete "${row.title}"?`)) return;
    await remove(row.id);
    toast.success("Document deleted.");
  };

  const columns: Column<DocumentDoc>[] = [
    {
      header: "",
      render: () => (
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-50 text-primary-600">
          <FileText className="h-4 w-4" />
        </div>
      ),
      className: "w-12",
    },
    {
      header: "Title",
      render: (row) => <span className="font-semibold">{row.title}</span>,
    },
    { header: "Category", render: (row) => row.category },
    { header: "Size", render: (row) => row.fileSize },
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
          New Document
        </button>
      </div>

      <DataTable
        columns={columns}
        rows={items}
        loading={loading}
        emptyLabel="No documents yet."
        onEdit={openEdit}
        onDelete={handleDelete}
      />

      <FormModal
        open={modalOpen}
        title={editingId ? "Edit Document" : "New Document"}
        onClose={() => setModalOpen(false)}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label="Title"
            required
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
          />
          <FormField
            label="Description"
            as="textarea"
            rows={3}
            required
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Category"
              value={form.category}
              onChange={(e) =>
                setForm((f) => ({ ...f, category: e.target.value }))
              }
              placeholder="Competition Rules, Referee..."
            />
            <FormField
              label="File Size"
              value={form.fileSize}
              onChange={(e) =>
                setForm((f) => ({ ...f, fileSize: e.target.value }))
              }
              placeholder="Auto-calculated (e.g. 1.2 MB)"
              hint="Automatically calculated when a file is uploaded"
            />
          </div>

          <FileUploader
            label="Document File"
            value={form.fileUrl}
            folder="wmmf/documents"
            resourceType="raw"
            sizeLimit={5}
            onUploaded={({ url, fileSize }) =>
              setForm((f) => ({
                ...f,
                fileUrl: url,
                fileSize: fileSize || f.fileSize,
              }))
            }
            onClear={() => setForm((f) => ({ ...f, fileUrl: "", fileSize: "" }))}
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
              {saving
                ? "Saving..."
                : editingId
                  ? "Save Changes"
                  : "Add Document"}
            </button>
          </div>
        </form>
      </FormModal>
    </div>
  );
}
