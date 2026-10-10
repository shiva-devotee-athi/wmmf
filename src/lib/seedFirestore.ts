"use client";

import {
  collection,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { newsItems } from "@/data/news";
import { leadershipMembers } from "@/data/leadership";
import { mediaEvents } from "@/data/media";
import { competitionDocuments, refereeHandbook } from "@/data/documents";
import type { NewsDoc } from "@/types/news";
import type { MemberDoc } from "@/types/member";
import type { MediaPhotoDoc, MediaVideoDoc } from "@/types/media";
import type { DocumentDoc } from "@/types/document";

let seedRan = false;

/**
 * Seeds initial data to Firebase Firestore only if collections are completely empty.
 * Once collections contain data, this function will skip without modifying Firestore.
 */
export async function seedFirestoreData(): Promise<{
  seeded: boolean;
  details: Record<string, number>;
}> {
  if (seedRan) {
    return { seeded: false, details: {} };
  }
  seedRan = true;

  const details: Record<string, number> = {
    news: 0,
    members: 0,
    mediaPhotos: 0,
    mediaVideos: 0,
    documents: 0,
  };

  try {
    // 1. Seed News Articles
    const newsSnap = await getDocs(collection(db, "news"));
    if (newsSnap.empty) {
      for (const n of newsItems) {
        const newsData: NewsDoc = {
          title: n.title,
          slug: n.slug,
          subTitle: n.subTitle,
          content: Array.isArray(n.content)
            ? n.content.join("\n\n")
            : n.content,
          date: n.date,
          category: n.category,
          image: n.image,
          tags: Array.isArray(n.tags) ? n.tags.join(", ") : n.tags,
        };
        await addDoc(collection(db, "news"), {
          ...newsData,
          createdAt: serverTimestamp(),
        });
        details.news++;
      }
    }

    // 2. Seed Members
    const membersSnap = await getDocs(collection(db, "members"));
    if (membersSnap.empty) {
      for (const m of leadershipMembers) {
        const memberData: MemberDoc = {
          name: m.name,
          role: m.role,
          image: m.image,
          bio: Array.isArray(m.bio) ? m.bio.join("\n\n") : m.bio || "",
        };
        await addDoc(collection(db, "members"), {
          ...memberData,
          createdAt: serverTimestamp(),
        });
        details.members++;
      }
    }

    // 3. Seed Media Photos
    const photosSnap = await getDocs(collection(db, "mediaPhotos"));
    if (photosSnap.empty) {
      for (const e of mediaEvents) {
        for (const p of e.photos) {
          const photoData: MediaPhotoDoc = {
            eventSlug: e.slug,
            eventName: e.name,
            imageUrl: p.imageUrl,
            publicId: p.publicId,
            alt: p.alt,
          };
          await addDoc(collection(db, "mediaPhotos"), {
            ...photoData,
            createdAt: serverTimestamp(),
          });
          details.mediaPhotos++;
        }
      }
    }

    // 4. Seed Media Videos
    const videosSnap = await getDocs(collection(db, "mediaVideos"));
    if (videosSnap.empty) {
      for (const e of mediaEvents) {
        for (const v of e.videos) {
          const videoData: MediaVideoDoc = {
            eventSlug: e.slug,
            eventName: e.name,
            youtubeId: v.youtubeId,
            title: v.title,
          };
          await addDoc(collection(db, "mediaVideos"), {
            ...videoData,
            createdAt: serverTimestamp(),
          });
          details.mediaVideos++;
        }
      }
    }

    // 5. Seed Documents
    const docsSnap = await getDocs(collection(db, "documents"));
    if (docsSnap.empty) {
      const initialDocs: DocumentDoc[] = [
        ...competitionDocuments.map((d) => ({
          title: d.title,
          description: d.description,
          fileUrl: d.fileUrl,
          fileSize: d.fileSize || "1 MB",
          category: "Competition Rules",
        })),
        {
          title: refereeHandbook.title,
          description: refereeHandbook.description,
          fileUrl: refereeHandbook.fileUrl,
          fileSize: refereeHandbook.fileSize || "1.1 MB",
          category: "Referee Handbook",
        },
      ];

      for (const doc of initialDocs) {
        await addDoc(collection(db, "documents"), {
          ...doc,
          createdAt: serverTimestamp(),
        });
        details.documents++;
      }
    }

    const totalSeeded = Object.values(details).reduce((a, b) => a + b, 0);
    return { seeded: totalSeeded > 0, details };
  } catch (error) {
    console.error("Error seeding Firestore data:", error);
    return { seeded: false, details };
  }
}
