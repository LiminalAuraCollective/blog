import RSSGenerator from "@/lib/rss";
import { parseISO, setHours } from "date-fns";
import { baseUrl } from "@/lib/config";
import { postsOrderedByDate } from "@/lib/posts";
import { IRSSChannel } from "@/lib/types";

const createPostUrl = (url: string) => {
  return url + "?utm_campaign=feed&utm_source=rss2";
};

const feedChannel: IRSSChannel = {
  title: "橘子路十字街道 24 号",
  link: baseUrl,
  description: "Recent content on 橘子路十字街道 24 号",
  language: "zh-cn",
  generator: "RSS 2.0",
  lastBuildDate: new Date(),
  atomLink: {
    href: baseUrl + "/rss.xml",
    rel: "self",
    type: "application/rss+xml",
  },
  managingEditor: "chengyongliu@foxmail.com (橘子路十字街道 24 号)",
  docs: "https://www.rssboard.org/rss-specification",
};

const createFeed = async () => {
  const feed = new RSSGenerator(feedChannel);

  postsOrderedByDate.forEach((post) => {
    const id = `${baseUrl}${post.url}`;
    const url = createPostUrl(id);
    feed.addItem({
      title: post.title,
      link: url,
      pubDate: setHours(parseISO(post.date), 13),
      description: post.description,
      categories: [post.category],
      guid: {
        value: url,
      },
    });
  });

  return feed.generate();
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
