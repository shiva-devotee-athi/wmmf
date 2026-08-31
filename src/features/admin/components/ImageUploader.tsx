"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Loader2, UploadCloud, X } from "lucide-react";
import { uploadToCloudinary } from "@/lib/cloudinary";

type Props = {
  label?: string;
  value?: string; // current secure_url
  folder?: string;
  resourceType?: "image" | "raw";
  onUploaded: (result: { url: string; publicId: string }) => void;
  onClear?: () => void;
};

export default function ImageUploader({
  label = "Upload image",
  value,
  folder,
  resourceType = "image",
  onUploaded,
  onClear,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    setError(null);
    setUploading(true);
    try {
      const result = await uploadToCloudinary(file, { folder, resourceType });
      onUploaded({ url: result.secure_url, publicId: result.public_id });
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

      {value && resourceType === "image" ? (
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
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex h-32 w-32 flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-border text-secondary-400 transition-colors hover:border-secondary-400 hover:text-secondary-600 disabled:opacity-60"
        >
          {uploading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              <UploadCloud className="h-5 w-5" />
              <span className="font-body text-[11px] font-medium">
                {value ? "Replace file" : "Click to upload"}
              </span>
            </>
          )}
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={resourceType === "image" ? "image/*" : "application/pdf"}
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />

      {value && resourceType === "raw" && (
        <p className="mt-1.5 max-w-[160px] truncate font-body text-[11.5px] text-secondary-500">
          {value.split("/").pop()}
        </p>
      )}

      {error && (
        <p className="mt-1.5 font-body text-[11.5px] text-primary-600">
          {error}
        </p>
      )}
    </div>
  );
}
