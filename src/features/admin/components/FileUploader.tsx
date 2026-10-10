"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Loader2, UploadCloud, X, FileText } from "lucide-react";
import { uploadToCloudinary } from "@/lib/cloudinary";

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) {
    return `${bytes} B`;
  }
  const kb = bytes / 1024;
  if (kb < 1024) {
    return `${Math.round(kb)} KB`;
  }
  const mb = kb / 1024;
  return `${mb % 1 === 0 ? mb.toFixed(0) : mb.toFixed(1)} MB`;
}

type Props = {
  label?: string;
  value?: string; // current secure_url
  folder?: string;
  resourceType?: "image" | "raw";
  sizeLimit?: number; // size limit in MB, default 2
  onUploaded: (result: {
    url: string;
    publicId: string;
    fileSize: string;
    bytes: number;
  }) => void;
  onClear?: () => void;
};

export default function FileUploader({
  label = "Upload image",
  value,
  folder,
  resourceType = "image",
  sizeLimit = 2,
  onUploaded,
  onClear,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    setError(null);

    // Validate size limit (MB)
    const maxSizeBytes = sizeLimit * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      setError(`File size exceeds ${sizeLimit}MB limit.`);
      return;
    }

    // Validate image / document format based on resourceType
    if (resourceType === "image") {
      const allowedTypes = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/webp",
      ];
      const allowedExts = ["png", "jpg", "jpeg", "webp"];
      const fileExt = file.name.split(".").pop()?.toLowerCase() || "";

      if (
        !allowedTypes.includes(file.type.toLowerCase()) &&
        !allowedExts.includes(fileExt)
      ) {
        setError("Only PNG, JPG, JPEG, and WEBP file formats are allowed.");
        return;
      }
    } else if (resourceType === "raw") {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/csv",
        "application/vnd.ms-excel",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ];
      const allowedExts = ["pdf", "doc", "docx", "csv", "xlsx"];
      const fileExt = file.name.split(".").pop()?.toLowerCase() || "";

      if (
        !allowedTypes.includes(file.type.toLowerCase()) &&
        !allowedExts.includes(fileExt)
      ) {
        setError(
          "Only PDF, DOC, DOCX, CSV, and XLSX file formats are allowed.",
        );
        return;
      }
    }

    setUploading(true);
    try {
      const result = await uploadToCloudinary(file, { folder, resourceType });
      const formattedSize = formatFileSize(file.size);
      onUploaded({
        url: result.secure_url,
        publicId: result.public_id,
        fileSize: formattedSize,
        bytes: file.size,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <label className="mb-1.5 block font-body text-[13px] font-medium text-secondary-700">
        {label}
      </label>

      {value ? (
        resourceType === "image" ? (
          <div className="relative h-32 w-32 overflow-hidden rounded-lg border border-black/[0.08]">
            <Image
              src={value}
              alt="Uploaded preview"
              fill
              className="object-cover"
            />
            {onClear && (
              <button
                type="button"
                onClick={onClear}
                aria-label="Remove image"
                className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary-950/70 text-white"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        ) : (
          <div className="relative flex h-32 w-full max-w-[280px] flex-col items-center justify-center gap-2 rounded-lg border border-black/[0.08] bg-slate-50 p-4">
            {onClear && (
              <button
                type="button"
                onClick={onClear}
                aria-label="Remove file"
                className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-secondary-950/70 text-white hover:bg-secondary-950"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
            <FileText className="h-7 w-7 text-primary-600" />
            <p className="max-w-[220px] truncate text-center font-body text-[11.5px] font-medium text-secondary-800">
              {value.split("/").pop()}
            </p>
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="font-body text-[11px] font-semibold text-primary-600 underline hover:text-primary-700"
            >
              Replace file
            </button>
          </div>
        )
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex h-32 w-full max-w-[280px] flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-border px-3 text-secondary-400 transition-colors hover:border-secondary-400 hover:text-secondary-600 disabled:opacity-60"
        >
          {uploading ? (
            <Loader2 className="h-5 w-5 animate-spin text-primary-600" />
          ) : (
            <>
              <UploadCloud className="h-5 w-5" />
              <span className="font-body text-[11px] font-medium">
                Click to upload
              </span>
              <span className="text-center font-body text-[9.5px] text-secondary-400">
                {resourceType === "image"
                  ? `PNG, JPG, WEBP (Max ${sizeLimit}MB)`
                  : `DOC, DOCX, PDF, CSV, XLSX (Max ${sizeLimit}MB)`}
              </span>
            </>
          )}
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={
          resourceType === "image"
            ? "image/png, image/jpeg, image/jpg, image/webp, .png, .jpg, .jpeg, .webp"
            : ".pdf, .doc, .docx, .csv, .xlsx, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, text/csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        }
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />

      {error && (
        <p className="mt-1.5 font-body text-[11.5px] text-primary-600">
          {error}
        </p>
      )}
    </div>
  );
}
