import { postsOrderedByDate } from "@/lib/posts";
import AnchorLink from "../anchor-link";

interface Props {
  count?: number;
}

function PostList({ count }: Props) {
  const postsCount = count
    ? postsOrderedByDate.slice(0, count)
    : postsOrderedByDate;
  return (
    <ul className="latest-post-list list-decimal!">
      {postsCount.map((post) => (
        <li key={post.hashCode}>
          <AnchorLink href={post.url}>{post.title}</AnchorLink>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
