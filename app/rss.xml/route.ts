import { Feed } from "feed";
import { parseISO, setHours } from "date-fns";
import { baseUrl } from "@/lib/config";
import { postsOrderedByDate } from "@/lib/posts";

const createPostUrl = (url: string) => {
  return url + "?utm_campaign=feed&utm_source=rss2";
};

const me = {
  name: "橘子路十字街道 24 号",
  email: "chengyongliu@foxmail.com",
  link: baseUrl,
};

const createFeed = async () => {
  const feed = new Feed({
    title: "橘子路十字街道 24 号",
    description: "Recent content on 橘子路十字街道 24 号",
    id: baseUrl,
    link: baseUrl,
    language: "zh-cn",
    favicon: `${baseUrl}/icons/favicon.ico`,
    copyright: "Copyright © 2020 橘子路十字街道 24 号. All rights reserved",
    author: me,
  });

  postsOrderedByDate.forEach((post) => {
    const id = `${baseUrl}${post.url}`;
    const url = createPostUrl(id);
    feed.addItem({
      title: post.title,
      link: url,
      date: setHours(parseISO(post.date), 13),
      description: post.description,
      category: [{ name: post.category }],
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
