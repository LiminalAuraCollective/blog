import PostList from "@/components/ui/post-list";

export default function Posts() {
  return (
    <>
      <PostList />
    </>
  );
}

export const generateMetadata = () => ({ title: "文章" });
