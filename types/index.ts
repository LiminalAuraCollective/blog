import type { Posts } from "contentlayer/generated";

export interface AccType {
  [year: string]: Posts[];
}

export interface GroupPostsType {
  year: string;
  data: Posts[];
}

export type BooksList = {
  title: string;
  author: string;
  labels: string[];
  status: "在读" | "已读";
};
