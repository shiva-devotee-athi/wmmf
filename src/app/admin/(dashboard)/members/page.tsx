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
import type { MemberDoc } from "@/types/member";

const emptyForm: MemberDoc = { name: "", role: "", image: "", bio: "" };

export default function AdminMembersPage() {
  const { items, loading, create, update, remove } =
    useFirestoreCollection<MemberDoc>("members");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<MemberDoc>(emptyForm);
  const [saving, setSaving] = useState(false);

  const openCreate = () => {
    setEditingId(null);
    setForm(emptyForm);
    setModalOpen(true);
  };

  const openEdit = (row: WithId<MemberDoc>) => {
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
        toast.success("Member updated.");
      } else {
        await create(form);
        toast.success("Member added.");
      }
      setModalOpen(false);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (row: WithId<MemberDoc>) => {
    if (!confirm(`Remove "${row.name}"?`)) return;
    await remove(row.id);
    toast.success("Member removed.");
  };

  const columns: Column<MemberDoc>[] = [
    {
      header: "Photo",
      render: (row) => (
        <div className="relative h-11 w-11 overflow-hidden rounded-full bg-muted">
          {row.image && (
            <Image
              src={row.image}
              alt={row.name}
              fill
              className="object-cover"
            />
          )}
        </div>
      ),
    },
    {
      header: "Name",
      render: (row) => <span className="font-semibold">{row.name}</span>,
    },
    { header: "Role", render: (row) => row.role },
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
          New Member
        </button>
      </div>

      <DataTable
        columns={columns}
        rows={items}
        loading={loading}
        emptyLabel="No members yet."
        onEdit={openEdit}
        onDelete={handleDelete}
      />

      <FormModal
        open={modalOpen}
        title={editingId ? "Edit Member" : "New Member"}
        onClose={() => setModalOpen(false)}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <FormField
            label="Name"
            required
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <FormField
            label="Role"
            required
            value={form.role}
            onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
            placeholder="Vice President — India"
          />
          <FormField
            label="Biography"
            as="textarea"
            rows={6}
            value={form.bio}
            onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))}
            hint="Separate paragraphs with a blank line. Leave blank for 'Biography coming soon.'"
          />
          <ImageUploader
            label="Photo"
            value={form.image}
            folder="wmmf/members"
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
              {saving ? "Saving..." : editingId ? "Save Changes" : "Add Member"}
            </button>
          </div>
        </form>
      </FormModal>
    </div>
  );
}
