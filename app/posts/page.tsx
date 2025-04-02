import Link from "next/link";
import { postsOrderedByDate } from "@/lib/posts";

export default function Posts() {
  // console.log(postsOrderedByDate)
  return (
    <main>
      <ul>
        {postsOrderedByDate.map((posts, index) => (
          <li
            className="flex text-sm leading-[1.6]"
            key={`${posts.title}-${index}`}
          >
            <span className="basis-[130px] grow-[0px] shrink-[0px] text-slate-600">
              {posts.date}
            </span>
            <Link
              href={posts.url}
              className="text-blue-700 hover:underline decoration-solid flex-1"
            >
              {posts.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const generateMetadata = () => ({
  title: "文章",
});
