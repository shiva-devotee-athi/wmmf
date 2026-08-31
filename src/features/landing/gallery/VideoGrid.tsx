"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Play, X } from "lucide-react";
import Skeleton from "@/components/common/Skeleton";
import type { MediaVideo } from "@/data/media";

function VideoTile({
  video,
  onOpen,
}: {
  video: MediaVideo;
  onOpen: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-video w-full overflow-hidden rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] bg-muted text-left"
    >
      {!loaded && (
        <Skeleton className="absolute inset-0 rounded-[var(--card-corner-radius)]" />
      )}
      <Image
        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
        alt={video.title}
        fill
        loading="lazy"
        onLoad={() => setLoaded(true)}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={`object-cover transition-all duration-500 group-hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-secondary-900/25 transition-colors duration-200 group-hover:bg-secondary-900/40">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-transform duration-200 group-hover:scale-110">
          <Play className="ml-0.5 h-6 w-6 fill-current" />
        </span>
      </div>
      <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-secondary-950/80 to-transparent px-4 py-3 font-body text-[13px] font-medium text-white">
        {video.title}
      </p>
    </motion.button>
  );
}

export default function VideoGrid({ videos }: { videos: MediaVideo[] }) {
  const [active, setActive] = useState<MediaVideo | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <VideoTile
            key={video.id}
            video={video}
            onOpen={() => setActive(video)}
          />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-secondary-950/90 p-4"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close video"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="aspect-video w-full max-w-3xl overflow-hidden rounded-lg bg-black"
            >
              <iframe
                src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
