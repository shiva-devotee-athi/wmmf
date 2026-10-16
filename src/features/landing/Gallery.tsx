"use client";

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Camera, ChevronDown, Film } from "lucide-react";
import AnimatedTabs from "@/components/common/AnimatedTabs";
import PhotoGrid from "./gallery/PhotoGrid";
import VideoGrid from "./gallery/VideoGrid";
import { mediaEvents, type MediaPhoto, type MediaVideo } from "@/data/media";
import { useFirestoreCollection } from "@/hooks/useFirestoreCollection";
import type { MediaPhotoDoc, MediaVideoDoc } from "@/types/media";

type MediaType = "photos" | "videos";

export default function Gallery() {
  const { items: photoDocs } =
    useFirestoreCollection<MediaPhotoDoc>("mediaPhotos");
  const { items: videoDocs } =
    useFirestoreCollection<MediaVideoDoc>("mediaVideos");

  const [eventSlug, setEventSlug] = useState<string>("all");
  const [mediaType, setMediaType] = useState<MediaType>("photos");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const firestoreEventsMap = new Map<string, string>();
  photoDocs.forEach((d) => {
    if (d.eventSlug && d.eventName)
      firestoreEventsMap.set(d.eventSlug, d.eventName);
  });
  videoDocs.forEach((d) => {
    if (d.eventSlug && d.eventName)
      firestoreEventsMap.set(d.eventSlug, d.eventName);
  });

  const hasFirestoreMedia = photoDocs.length > 0 || videoDocs.length > 0;

  const eventTabs = hasFirestoreMedia
    ? [
        { id: "all", label: "All Events" },
        ...Array.from(firestoreEventsMap.entries()).map(([slug, name]) => ({
          id: slug,
          label: name,
        })),
      ]
    : mediaEvents.map((e) => ({ id: e.slug, label: e.location }));

  const activeEvent =
    mediaEvents.find((e) => e.slug === eventSlug) ?? mediaEvents[0];

  const firestorePhotos: MediaPhoto[] = photoDocs.map((p) => ({
    id: p.id,
    imageUrl: p.imageUrl,
    publicId: p.publicId,
    alt: p.alt || p.eventName || "WMMF Gallery Photo",
  }));

  const firestoreVideos: MediaVideo[] = videoDocs.map((v) => ({
    id: v.id,
    youtubeId: v.youtubeId,
    title: v.title || v.eventName || "WMMF Gallery Video",
  }));

  const photosToDisplay: MediaPhoto[] = hasFirestoreMedia
    ? eventSlug === "all"
      ? firestorePhotos
      : firestorePhotos.filter((p) => {
          const doc = photoDocs.find((d) => d.id === p.id);
          return doc?.eventSlug === eventSlug;
        })
    : activeEvent.photos;

  const videosToDisplay: MediaVideo[] = hasFirestoreMedia
    ? eventSlug === "all"
      ? firestoreVideos
      : firestoreVideos.filter((v) => {
          const doc = videoDocs.find((d) => d.id === v.id);
          return doc?.eventSlug === eventSlug;
        })
    : activeEvent.videos;

  const mediaTabs = [
    { id: "photos", label: `Photo Gallery (${photosToDisplay.length})` },
    { id: "videos", label: `Video Gallery (${videosToDisplay.length})` },
  ];

  return (
    <section className="py-[var(--spacing-sections-mobile)] md:py-[var(--spacing-sections-desktop)]">
      <div className="mx-auto w-full max-w-[1280px] px-4 xl:px-0">
        {/* Event dropdown — only shown when there are multiple events */}
        {eventTabs.length > 1 && (
          <div className="mb-10 flex justify-center">
            <div
              ref={dropdownRef}
              className="relative w-full max-w-xs"
              onBlur={(e) => {
                if (!dropdownRef.current?.contains(e.relatedTarget as Node)) {
                  setDropdownOpen(false);
                }
              }}
            >
              {/* Trigger button */}
              <button
                id="gallery-event-select"
                type="button"
                onClick={() => setDropdownOpen((o) => !o)}
                className="flex w-full items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 font-heading text-[14px] font-semibold text-secondary-900 shadow-sm transition-all duration-200 hover:border-primary-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary-400/50"
              >
                <span className="truncate">
                  {eventTabs.find(
                    (t) =>
                      t.id ===
                      (eventSlug === "all" && !hasFirestoreMedia
                        ? mediaEvents[0].slug
                        : eventSlug),
                  )?.label ?? "All Events"}
                </span>
                <motion.span
                  animate={{ rotate: dropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 text-slate-400"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </button>

              {/* Dropdown panel */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.ul
                    key="event-dropdown"
                    initial={{ opacity: 0, y: -6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-xl"
                    role="listbox"
                  >
                    {eventTabs.map((tab) => {
                      const isActive =
                        tab.id ===
                        (eventSlug === "all" && !hasFirestoreMedia
                          ? mediaEvents[0].slug
                          : eventSlug);
                      return (
                        <li key={tab.id} role="option" aria-selected={isActive}>
                          <button
                            type="button"
                            tabIndex={0}
                            onClick={() => {
                              setEventSlug(tab.id);
                              setDropdownOpen(false);
                            }}
                            className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-left font-heading text-[13.5px] font-medium transition-colors duration-150 ${
                              isActive
                                ? "bg-primary-50 text-primary-600"
                                : "text-secondary-800 hover:bg-slate-50"
                            }`}
                          >
                            {isActive && (
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                            )}
                            {!isActive && (
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-transparent" />
                            )}
                            {tab.label}
                          </button>
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={eventSlug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-[26px] font-bold text-secondary-900 sm:text-[30px]">
                {hasFirestoreMedia
                  ? eventSlug === "all"
                    ? "WMMF Media Gallery"
                    : (firestoreEventsMap.get(eventSlug) ?? "WMMF Event")
                  : activeEvent.name}
              </h2>
              <p className="mt-3 font-body text-[14.5px] leading-relaxed text-muted-foreground">
                {hasFirestoreMedia
                  ? "Explore photos and video highlights from WMMF tournaments and global events."
                  : activeEvent.description}
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
                    {photosToDisplay.length > 0 ? (
                      <PhotoGrid photos={photosToDisplay} />
                    ) : (
                      <p className="py-12 text-center font-body text-[14px] text-muted-foreground">
                        No photos found for this event.
                      </p>
                    )}
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
                    {videosToDisplay.length > 0 ? (
                      <VideoGrid videos={videosToDisplay} />
                    ) : (
                      <p className="py-12 text-center font-body text-[14px] text-muted-foreground">
                        No videos found for this event.
                      </p>
                    )}
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
