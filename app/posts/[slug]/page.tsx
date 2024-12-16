import { allPosts } from "contentlayer/generated";
import type { Posts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import MDX from "@/components/MDX";
import { numConvertToMinutes, numConvertToUnit } from "@/lib/helper";
import Comments from "@/components/Comments";
import PostsDirectory from "@/components/PostsDirectory";

export const generateStaticParams = async () =>
  allPosts.map((_posts) => ({ slug: _posts.slug }));

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const posts = allPosts.find(
    (_posts) => _posts.slug === decodeURIComponent(params.slug)
  ) as Posts;
  return {
    title: posts.title,
    description: posts.description,
    keywords: posts?.labels.join(", "),
  };
};

export default function PostLayout({ params }: { params: { slug: string } }) {
  const posts = allPosts.find(
    (_posts) => _posts.slug === decodeURIComponent(params.slug)
  );
  if (!posts) {
    return notFound();
  }
  console.log(posts)

  return (
    <article>
      <div className="text-center text-[1.6rem] leading-normal font-medium">
        {posts.title}
      </div>
      <div className="text-center text-xs text-[#aaa] my-3">
        <span>字数总计：{numConvertToUnit(posts.readingTime.words)}</span>
        <span className="mx-2">|</span>
        <span>阅读估时：{numConvertToMinutes(posts.readingTime.time)}</span>
      </div>
      <PostsDirectory />
      <MDX code={posts.body.code} />
      <div className="text-right text-sm text-[#800] mt-4">
        {posts.labels.map((label) => (
          <span key={label} className="ml-3">
            #{label.trim()}
          </span>
        ))}
      </div>
      <Comments term={posts.title} />
    </article>
  );
}
