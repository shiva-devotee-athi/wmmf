"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Skeleton from "@/components/common/Skeleton";
import { cloudinaryUrl, type MediaPhoto } from "@/data/media";
import Pagination from "@/components/common/Pagination";

function PhotoTile({
  photo,
  onOpen,
}: {
  photo: MediaPhoto;
  onOpen: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  const imageSrc = photo.imageUrl?.startsWith("http")
    ? photo.imageUrl
    : cloudinaryUrl(photo.publicId, 600);

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-square w-full overflow-hidden rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] bg-muted text-left"
    >
      {!loaded && (
        <Skeleton className="absolute inset-0 rounded-[var(--card-corner-radius)]" />
      )}
      <Image
        src={imageSrc}
        alt={photo.alt}
        fill
        loading="lazy"
        onLoad={() => setLoaded(true)}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className={`object-cover transition-all duration-500 group-hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-secondary-900/0 transition-colors duration-200 group-hover:bg-secondary-900/30">
        <ZoomIn className="h-6 w-6 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      </div>
    </motion.button>
  );
}

export default function PhotoGrid({ photos }: { photos: MediaPhoto[] }) {
  const [page, setPage] = useState(1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const pageSize = 16;
  const totalPages = Math.ceil(photos.length / pageSize);
  const currentPage = Math.min(page, totalPages || 1);
  const paginatedPhotos = photos.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + photos.length) % photos.length,
    );
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));

  return (
    <div className="space-y-8">
      <motion.div
        key={currentPage}
        layout
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
      >
        {paginatedPhotos.map((photo, pageIdx) => {
          const absoluteIndex = (currentPage - 1) * pageSize + pageIdx;
          return (
            <PhotoTile
              key={photo.id}
              photo={photo}
              onOpen={() => setActiveIndex(absoluteIndex)}
            />
          );
        })}
      </motion.div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setPage}
          totalItems={photos.length}
          pageSize={pageSize}
        />
      )}

      <AnimatePresence>
        {activeIndex !== null && photos[activeIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary-950/90 p-4"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[4/3] w-full max-w-3xl"
            >
              <Image
                src={
                  photos[activeIndex].publicId?.startsWith("http")
                    ? photos[activeIndex].publicId
                    : cloudinaryUrl(photos[activeIndex].publicId, 1400)
                }
                alt={photos[activeIndex].alt}
                fill
                className="rounded-lg object-contain"
                sizes="(max-width: 1024px) 90vw, 900px"
              />
            </motion.div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
