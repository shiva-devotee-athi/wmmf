"use client";

import { Loader2, Pencil, Trash2 } from "lucide-react";
import type { WithId } from "@/hooks/useFirestoreCollection";

export type Column<T> = {
  header: string;
  render: (row: WithId<T>) => React.ReactNode;
  className?: string;
};

type Props<T extends Record<string, unknown>> = {
  columns: Column<T>[];
  rows: WithId<T>[];
  loading?: boolean;
  emptyLabel?: string;
  onEdit?: (row: WithId<T>) => void;
  onDelete?: (row: WithId<T>) => void;
};

export default function DataTable<T extends Record<string, unknown>>({
  columns,
  rows,
  loading,
  emptyLabel = "No records yet.",
  onEdit,
  onDelete,
}: Props<T>) {
  return (
    <div className="overflow-hidden rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] bg-white shadow-[var(--card-shadow-horizontal-offset)_var(--card-shadow-vertical-offset)_var(--card-shadow-blur-radius)_rgba(10,10,10,var(--card-shadow-opacity))]">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-black/[0.06] bg-muted/60">
              {columns.map((col) => (
                <th
                  key={col.header}
                  className="whitespace-nowrap px-5 py-3 font-body text-[11.5px] font-semibold uppercase tracking-wide text-secondary-500"
                >
                  {col.header}
                </th>
              ))}
              {(onEdit || onDelete) && (
                <th className="px-5 py-3 text-right font-body text-[11.5px] font-semibold uppercase tracking-wide text-secondary-500">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-5 py-12 text-center"
                >
                  <Loader2 className="mx-auto h-5 w-5 animate-spin text-primary-600" />
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + 1}
                  className="px-5 py-12 text-center font-body text-[13.5px] text-muted-foreground"
                >
                  {emptyLabel}
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-black/[0.05] last:border-none hover:bg-muted/30"
                >
                  {columns.map((col) => (
                    <td
                      key={col.header}
                      className={`px-5 py-3.5 font-body text-[13.5px] text-secondary-800 ${col.className ?? ""}`}
                    >
                      {col.render(row)}
                    </td>
                  ))}
                  {(onEdit || onDelete) && (
                    <td className="px-5 py-3.5">
                      <div className="flex items-center justify-end gap-1.5">
                        {onEdit && (
                          <button
                            type="button"
                            onClick={() => onEdit(row)}
                            aria-label="Edit"
                            className="flex h-8 w-8 items-center justify-center rounded-md text-secondary-500 transition-colors hover:bg-secondary-50 hover:text-secondary-900"
                          >
                            <Pencil className="h-4 w-4" />
                          </button>
                        )}
                        {onDelete && (
                          <button
                            type="button"
                            onClick={() => onDelete(row)}
                            aria-label="Delete"
                            className="flex h-8 w-8 items-center justify-center rounded-md text-secondary-500 transition-colors hover:bg-primary-50 hover:text-primary-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
