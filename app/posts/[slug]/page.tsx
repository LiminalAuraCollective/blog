import MDX from "@/components/ui/mdx";
import TOC from "@/components/ui/toc";
import { PostOverview } from "@/lib/types";
import { allPosts } from "content-collections";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function Slug({ params }: Props) {
  const { slug } = await params;

  const post = (allPosts as PostOverview[]).find((p) => p.hashCode === slug);
  if (!post) {
    notFound();
  }
  return (
    <article>
      <h1 className="font-bold mb-4 text-lg">{post.title}</h1>
      <p className="my-4">{post.date}</p>
      <MDX code={post.mdx} />
      <TOC />
    </article>
  );
}

export const generateStaticParams = async () => {
  return (allPosts as PostOverview[]).map((post) => ({
    slug: post.hashCode,
  }));
};

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params;
  const post = (allPosts as PostOverview[]).find((p) => p.hashCode === slug);
  if (!post) {
    return;
  }

  return {
    title: post.title,
    description: post.description,
  };
};
