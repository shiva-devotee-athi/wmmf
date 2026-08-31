export type LeadershipMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string[];
};

export const leadershipMembers: LeadershipMember[] = [
  {
    id: "neil-zodagi",
    name: "Neil Zodagi",
    role: "Vice President — India",
    image:
      "https://wmmf.info/wp-content/themes/footclub/html/images/team-1.jpg",
  },
  {
    id: "cristal-khalat-bari",
    name: "S. Cristal Khalat Bari",
    role: "Vice President — USA",
    image: "https://wmmf.info/wp-content/uploads/2026/08/Shabnam.jpg",
    bio: [
      "S. Cristal Khalat Bari, from Tyler, Texas, brings a lifelong passion for soccer. She began playing competitively at the age of four and continued through eighteen, including competitive club soccer that took her throughout the region and beyond. Soccer has shaped her values of teamwork, discipline, leadership, and perseverance — qualities that continue to guide her professional work and her commitment to sport.",
      "Ms. Khalat Bari currently serves as a Dean of Instruction with Tyler Independent School District, where she helps lead a school of approximately 800 students and more than 100 employees. She is passionate about leadership, supporting others, and helping people reach their full potential.",
    ],
  },
];
