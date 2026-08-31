export type CloudinaryUploadResult = {
  secure_url: string;
  public_id: string;
  resource_type: string;
  bytes: number;
  format: string;
};

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? "";
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET ?? "";

/**
 * Uploads a file directly from the browser to Cloudinary using an unsigned
 * upload preset (configured in the Cloudinary console: Settings → Upload →
 * Add upload preset → Signing Mode: Unsigned). No server round-trip needed.
 *
 * `resourceType` should be "image" for photos/logos or "raw" for PDFs and
 * other non-image documents.
 */
export async function uploadToCloudinary(
  file: File,
  options?: { folder?: string; resourceType?: "image" | "raw" | "video" },
): Promise<CloudinaryUploadResult> {
  if (!CLOUD_NAME || !UPLOAD_PRESET) {
    throw new Error(
      "Cloudinary is not configured. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET.",
    );
  }

  const resourceType = options?.resourceType ?? "image";
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  if (options?.folder) formData.append("folder", options.folder);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/${resourceType}/upload`,
    { method: "POST", body: formData },
  );

  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    throw new Error(errorBody?.error?.message ?? "Cloudinary upload failed");
  }

  return response.json();
}

/** Builds an optimized delivery URL for a stored Cloudinary public ID. */
export function cloudinaryDeliveryUrl(publicId: string, width = 800) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${publicId}`;
}
