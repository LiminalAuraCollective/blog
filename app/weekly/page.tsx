import { compareDesc, format } from "date-fns";
import Link from "next/link";
import type { Posts } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";
import HeaderBox from "@/components/HeaderBox";
import { AccType, GroupPostsType } from "@/types";

export default function Posts() {
  const groupedAllPosts = allPosts.reduce((acc: AccType, item) => {
    const { date } = item;
    acc[format(date, "yyyy")] = acc[format(date, "yyyy")] || [];
    acc[format(date, "yyyy")].push(item);
    return acc;
  }, {});
  const sortedAllPosts = Object.entries(groupedAllPosts)
    .map(([year, data]) => {
      return { year, data };
    })
    .sort(
      (a: GroupPostsType, b: GroupPostsType) =>
        parseInt(b.year) - parseInt(a.year)
    )
    .map((item: GroupPostsType) => ({
      ...item,
      data: item.data.sort((a: Posts, b: Posts) =>
        compareDesc(new Date(a.date), new Date(b.date))
      ),
    }));

  return (
    <main>
      <HeaderBox />
      <section>
        {sortedAllPosts.slice(0, 1).map((_allPosts: GroupPostsType) => (
          <div key={_allPosts.year}>
            <div className="mb-4">
              {_allPosts.year}
              <span>[{_allPosts?.data?.length || 0}]</span>
              <span className="ml-2">🍃</span>
            </div>
            {_allPosts?.data?.map((_posts: Posts) => (
              <div className="flex mb-4" key={_posts.title}>
                <span className="pl-4 mr-8">
                  {format(_posts.date, "MM/dd")}
                </span>
                <Link href={_posts.url} className="text-[#800] hover:underline">
                  {_posts.category} | {_posts.title}
                </Link>
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
}
