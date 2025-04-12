import { Feed } from "feed";
import { parseISO, setHours } from "date-fns";
import { baseUrl } from "@/lib/config";
import { postsOrderedByDate } from "@/lib/posts";
import { PostOverview } from "@/lib/types";

const createPostUrl = (url: string) => {
  return url + "?utm_campaign=feed&utm_source=rss2";
};

const createContent = (post: PostOverview, url: string) => `
<p>${post.description}</p>
<p>Read the full article on <a href="${url}">橘子路十字街道 24 号</a></p>`;

const me = {
  name: "橘子路十字街道 24 号",
  email: "chengyongliu@foxmail.com",
  link: baseUrl,
};

const createFeed = async () => {
  const feed = new Feed({
    title: "橘子路十字街道 24 号",
    description: "A site about software development by No. 24, Orange Road Cross Street",
    id: baseUrl,
    link: baseUrl,
    language: "en",
    favicon: `${baseUrl}/icons/favicon.ico`,
    copyright: "All rights reserved 2020, No. 24, Orange Road Cross Street",
    author: me,
  });

  postsOrderedByDate.forEach((post) => {
    const id = `${baseUrl}${post.url}`;
    const url = createPostUrl(id);
    feed.addItem({
      title: post.title,
      id: id,
      link: url,
      description: post.description,
      content: createContent(post, url),
      author: [me],
      date: setHours(parseISO(post.date), 13),
      category: post.labels.map((name) => ({ name })),
    });
  });

  return feed.rss2();
};

export const GET = async () => {
  const feed = await createFeed();
  return new Response(feed, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
