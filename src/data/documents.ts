export type DocumentEntry = {
  title: string;
  description: string;
  fileHref: string;
  fileSize?: string;
};

export const competitionDocuments: DocumentEntry[] = [
  {
    title: "WMMF Competition Rules — Under 10 Years Old",
    description:
      "Standard operating procedures for match officials, team delegates, and venue coordinators.",
    fileHref: "/documents/rules-under-10.pdf",
    fileSize: "820 KB",
  },
  {
    title: "WMMF Competition Rules — Under 14 Years Old",
    description:
      "Standard operating procedures for match officials, team delegates, and venue coordinators.",
    fileHref: "/documents/rules-under-14.pdf",
    fileSize: "845 KB",
  },
  {
    title: "WMMF Competition Rules & Regulations — 15 and Above",
    description:
      "Comprehensive guide covering competition formats, eligibility, and championship procedures.",
    fileHref: "/documents/rules-15-and-above.pdf",
    fileSize: "1.4 MB",
  },
  {
    title: "Ethics Committee Operational Manual",
    description:
      "Standard operating procedures for match officials, team delegates, and venue coordinators.",
    fileHref: "/documents/ethics-committee-manual.pdf",
    fileSize: "690 KB",
  },
  {
    title: "Disciplinary Committee Operational Manual",
    description:
      "Standard operating procedures for match officials, team delegates, and venue coordinators.",
    fileHref: "/documents/disciplinary-committee-manual.pdf",
    fileSize: "705 KB",
  },
  {
    title: "Appendix A — Team Attack Clock Regulation",
    description:
      "Rules for squad sizes, substitute players, and national team representation.",
    fileHref: "/documents/appendix-a-attack-clock.pdf",
    fileSize: "310 KB",
  },
];

export const refereeHandbook: DocumentEntry = {
  title: "Referee Handbook",
  description:
    "The WMMF Referee Handbook provides the official standards, procedures, responsibilities, and guidance for match officials. It ensures consistent, fair, safe, and professional officiating across all WMMF competitions.",
  fileHref: "/documents/referee-handbook.pdf",
  fileSize: "1.1 MB",
};
