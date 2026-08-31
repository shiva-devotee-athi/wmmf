"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Camera, Film } from "lucide-react";
import AnimatedTabs from "@/components/common/AnimatedTabs";
import PhotoGrid from "./gallery/PhotoGrid";
import VideoGrid from "./gallery/VideoGrid";
import { mediaEvents } from "@/data/media";

type MediaType = "photos" | "videos";

export default function Gallery() {
  const [eventSlug, setEventSlug] = useState(mediaEvents[0].slug);
  const [mediaType, setMediaType] = useState<MediaType>("photos");

  const activeEvent =
    mediaEvents.find((e) => e.slug === eventSlug) ?? mediaEvents[0];

  const eventTabs = mediaEvents.map((e) => ({ id: e.slug, label: e.location }));
  const mediaTabs = [
    { id: "photos", label: "Photo Gallery" },
    { id: "videos", label: "Video Gallery" },
  ];

  return (
    <section className="py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
      <div className="mx-auto w-full max-w-[1280px] px-4 xl:px-0">
        {/* Event tabs */}
        {mediaEvents.length > 1 && (
          <div className="mb-8 flex justify-center">
            <AnimatedTabs
              tabs={eventTabs}
              activeId={eventSlug}
              onChange={setEventSlug}
              layoutId="event-tab-indicator"
            />
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeEvent.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-[26px] font-bold text-secondary-900 sm:text-[30px]">
                {activeEvent.name}
              </h2>
              <p className="mt-3 font-body text-[14.5px] leading-relaxed text-muted-foreground">
                {activeEvent.description}
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <AnimatedTabs
                tabs={mediaTabs}
                activeId={mediaType}
                onChange={(id: string) => setMediaType(id as MediaType)}
                layoutId="media-type-indicator"
                size="sm"
              />
            </div>

            <div className="mt-8">
              <AnimatePresence mode="wait">
                {mediaType === "photos" ? (
                  <motion.div
                    key="photos"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="mb-5 flex items-center gap-2 font-body text-[13px] font-semibold uppercase tracking-wide text-secondary-500">
                      <Camera className="h-4 w-4" />
                      Photo gallery
                    </div>
                    <PhotoGrid photos={activeEvent.photos} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="videos"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="mb-5 flex items-center gap-2 font-body text-[13px] font-semibold uppercase tracking-wide text-secondary-500">
                      <Film className="h-4 w-4" />
                      Video gallery
                    </div>
                    <VideoGrid videos={activeEvent.videos} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
