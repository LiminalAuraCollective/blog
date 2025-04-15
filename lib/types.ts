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

export interface IRSSItem {
  title: string;
  link: string;
  description: string;
  author?: string;
  categories?: string[];
  comments?: string;
  enclosure?: {
    url: string;
    length: number;
    type: string;
  };
  guid?: {
    value: string;
    isPermaLink?: boolean;
  };
  pubDate?: Date;
  source?: {
    url: string;
    name: string;
  };
}

export interface IRSSChannel {
  title: string;
  link: string;
  description: string;
  language?: string;
  copyright?: string;
  managingEditor?: string;
  webMaster?: string;
  pubDate?: Date;
  lastBuildDate?: Date;
  categories?: string[];
  generator?: string;
  docs?: string;
  cloud?: {
    domain: string;
    port: number;
    path: string;
    registerProcedure: string;
    protocol: string;
  };
  atomLink?: {
    href: string;
    rel?: string; // 默认 "self"
    type?: string; // 默认 "application/rss+xml"
  };
  ttl?: number;
  image?: {
    url: string;
    title: string;
    link: string;
    width?: number;
    height?: number;
    description?: string;
  };
  rating?: string;
  textInput?: {
    title: string;
    description: string;
    name: string;
    link: string;
  };
  skipHours?: number[];
  skipDays?: string[];
  items?: IRSSItem[];
}
