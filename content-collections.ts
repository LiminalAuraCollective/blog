import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import type { Options } from "@content-collections/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import remarkBreaks from "remark-breaks";
import remarkMath from "remark-math";
import readingTime from "reading-time";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { z } from "zod";
import { stringToHashCode } from "./lib/utils";

const postDirectory = "content/posts";
const mindDirectory = "content/speak-mind";

function calculateReadingTime(content: string) {
  const contentWithoutSvg = content.replace(/<svg+.+?(?=<\/svg>)<\/svg>/gs, "");
  return readingTime(contentWithoutSvg).text;
}

const option: Options = {
  rehypePlugins: [
    rehypeSlug,
    [rehypeKatex, { output: "html" }],
    [rehypeAutolinkHeadings, { behavior: "wrap" }],
    [
      rehypeExternalLinks,
      { target: "_blank", rel: ["nofollow", "noopener", "noreferrer"] },
    ],
    [
      rehypePrettyCode,
      {
        theme: "material-theme-ocean",
      },
    ],
  ],
  remarkPlugins: [remarkGfm, remarkBreaks, remarkMath],
};

const posts = defineCollection({
  name: "posts",
  directory: postDirectory,
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.string(),
    labels: z.array(z.string()),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, option);
    const hashCode = stringToHashCode(document._meta.fileName);
    return {
      ...document,
      readingTime: calculateReadingTime(document.content),
      hashCode: hashCode,
      url: `/posts/${hashCode}`,
      mdx,
    };
  },
});

const minds = defineCollection({
  name: "minds",
  directory: mindDirectory,
  include: "**/*.mdx",
  schema: z.object({
    sections: z.array(z.any()),
  }),
});

export default defineConfig({
  collections: [posts, minds],
});
