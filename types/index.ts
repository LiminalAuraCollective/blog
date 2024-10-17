import type { Posts } from "contentlayer/generated";

export interface AccType {
  [year: string]: Posts[];
}

export interface GroupPostsType {
  year: string;
  data: Posts[];
}
