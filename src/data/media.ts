export type MediaPhoto = {
  id: string;
  /** Cloudinary public ID, e.g. "wmmf/pune/photo-01" */
  publicId: string;
  alt: string;
};

export type MediaVideo = {
  id: string;
  /** YouTube video ID (the part after v= or youtu.be/) */
  youtubeId: string;
  title: string;
};

export type MediaEvent = {
  slug: string;
  name: string;
  location: string;
  date: string;
  description: string;
  photos: MediaPhoto[];
  videos: MediaVideo[];
};

/**
 * Cloudinary cloud name used to build delivery URLs.
 * Replace with your actual WMMF Cloudinary cloud name.
 */
export const CLOUDINARY_CLOUD_NAME = "demo";

/**
 * NOTE: `publicId` values below point at Cloudinary's public "demo" cloud
 * sample assets so the gallery renders working images out of the box.
 * Swap these for your real uploaded WMMF photo public IDs, and swap the
 * YouTube IDs for your real WMMF Pune demonstration videos.
 */
export const mediaEvents: MediaEvent[] = [
  {
    slug: "pune-india",
    name: "WMMF - Pune, India",
    location: "Pune, India",
    date: "2026-07-18",
    description:
      "Today marks the beginning of an exciting new chapter in sport as we proudly introduce World Mini Mini Football (WMMF) to India. Fast, dynamic, inclusive, and packed with action, Mini Mini Football is designed to ignite passion, develop skills, and create unforgettable experiences for players of all ages. This demonstration is more than just a showcase — it is the first step in building a new sporting movement founded on excellence, friendship, respect, and fair play. Whether you are stepping onto the field for the first time or watching from the sidelines, you are witnessing the birth of something special.",
    photos: [
      {
        id: "p1",
        publicId: "samples/sports/football",
        alt: "WMMF demonstration action shot, Pune",
      },
      {
        id: "p2",
        publicId: "samples/people/kitchen-bar",
        alt: "Players and officials at the WMMF Pune event",
      },
      {
        id: "p3",
        publicId: "samples/landscapes/nature-mountains",
        alt: "WMMF Pune venue overview",
      },
      {
        id: "p4",
        publicId: "samples/sports/basketball",
        alt: "Match action during the WMMF Pune demonstration",
      },
      {
        id: "p5",
        publicId: "samples/people/boy-snow-hoodie",
        alt: "Young player at the WMMF Pune demonstration",
      },
      {
        id: "p6",
        publicId: "samples/landscapes/architecture-signs",
        alt: "WMMF Pune event signage",
      },
    ],
    videos: [
      {
        id: "v1",
        youtubeId: "M7lc1UVf-VE",
        title: "WMMF Demonstration - Pune, India",
      },
      {
        id: "v2",
        youtubeId: "M7lc1UVf-VE",
        title: "WMMF Demonstration - Pune, India",
      },
      {
        id: "v3",
        youtubeId: "M7lc1UVf-VE",
        title: "WMMF Demonstration - Pune, India",
      },
      {
        id: "v4",
        youtubeId: "M7lc1UVf-VE",
        title: "WMMF Demonstration - Pune, India",
      },
      {
        id: "v5",
        youtubeId: "M7lc1UVf-VE",
        title: "WMMF Demonstration - Pune, India",
      },
      {
        id: "v6",
        youtubeId: "M7lc1UVf-VE",
        title: "WMMF Demonstration - Pune, India",
      },
    ],
  },
];

export function cloudinaryUrl(publicId: string, width = 800) {
  return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto,w_${width}/${publicId}`;
}
