const scheme = process.env.NEXT_PUBLIC_SCHEME || "https";
const fqdn =
  process.env.NEXT_PUBLIC_FQDN || process.env.VERCEL_URL || "liucy.cn";
export const baseUrl = `${scheme}://${fqdn}`;

export const createCompleteUrl = (path: string) => {
  return `${baseUrl}/${path.startsWith("/") ? path.slice(1) : path}`;
};

export const metaConfig = {
  title: "猫和鱼儿恋爱啦",
  description: "一个记录技术、读书、生活、自媒体的小小博客网站",
  authors: {
    name: "Liminal Aura Collective",
    url: "https://github.com/LiminalAuraCollective",
  },
  keywords: ["Blog", "Code", "Web"],
  category: "blog",
};
