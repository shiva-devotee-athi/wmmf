export type NewsDoc = {
  title: string;
  slug: string;
  excerpt: string;
  content: string; // paragraphs separated by double newlines
  date: string;
  category: string;
  image: string;
  tags: string; // comma-separated
};
