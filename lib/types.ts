import { type Post } from "content-collections";

export type PostOverview = Post & {
  title: string;
  date: string;
  labels: string[];
  description: string;
  category: string;
  url: string;
  _meta: unknown;
  slug: string;
  mdx: string;
};

export type PostSlugProps = {
  params: Promise<{ slug: string }>;
};
