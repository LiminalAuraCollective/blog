import Comments from "@/components/Comments";
import MDXContentMain from "@/components/MDXContentMain";
import TOC from "@/components/TOC";
import { PostOverview, PostSlugProps } from "@/lib/types";
import { allPosts } from "content-collections";
import { notFound } from "next/navigation";

export default async function PostSlug({ params }: PostSlugProps) {
  const { slug } = await params;

  const post = (allPosts as PostOverview[]).find(
    (p) => p._meta.directory === slug
  );
  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1 className="text-xl leading-normal font-bold my-4 text-[#222]">
        {post.title}
      </h1>
      <p className="my-4">{post.date}</p>
      <MDXContentMain code={post.mdx} />
      <TOC />
      <Comments term={post.title} />
    </article>
  );
}

export const generateStaticParams = async () => {
  return (allPosts as PostOverview[]).map((post) => ({
    slug: post._meta.directory,
  }));
};

export const generateMetadata = async ({ params }: PostSlugProps) => {
  const { slug } = await params;
  const post = (allPosts as PostOverview[]).find(
    (p) => p._meta.directory === slug
  );
  if (!post) {
    return;
  }

  return {
    title: post.title,
    description: post.description,
  };
};
