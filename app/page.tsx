import Link from "next/link";
import React from "react";

function TitleElement({ title, icon }: { title: string; icon: string }) {
  return (
    <h2 className="my-4 font-bold text-xl">
      {icon}
      {title}
    </h2>
  );
}

function PElement({
  text,
  children,
}: {
  text?: string;
  children?: React.ReactNode;
}) {
  return <p className="my-4 leading-[1.6]">{children || text}</p>;
}

function HRElement() {
  return <hr className="border-dashed border-t my-2" />;
}

function SubTElement({ text }: { text: string }) {
  return <p className="my-4 leading-[1.6] font-bold">{text}</p>;
}

function ListElement({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc list-inside indent-[2em]">{children}</ul>;
}

export default function Home() {
  return (
    <main>
      <TitleElement title="关于博主" icon="🎏" />
      <PElement text="Hi, 欢迎你来到我的博客，你可以叫我小橘。" />
      <PElement text="这里主要是一些 Coding 相关的记录,当然也随机掉会落一些其他的日常记录及感想。" />
      <PElement text="喜欢的事：📖读闲书、📝想写作、🚶‍♂️散步、🛤爬山、👩‍🎤看Live和🐆逛动物园（不支持强迫性动物表演）。" />
      <PElement>
        给我发邮件：
        <Link
          href="mailto:chengyongliu@foxmail.com"
          className="text-blue-700 hover:underline decoration-solid"
        >
          chengyongliu@foxmail.com
        </Link>
      </PElement>
      <PElement>
        项目源地址：
        <Link
          href="https://github.com/TravelerAs/blog"
          className="text-blue-700 hover:underline decoration-solid"
          target="_blank"
        >
          A salted fish that doesn&apos;t want to work hard.
        </Link>
      </PElement>
      <HRElement />
      <PElement text="2025 年最喜欢的一句话「文字更利于深度学习和独立思考，而视频则更适合娱乐消遣与信息传播。」" />
      <PElement text="2022 年最喜欢的一句话出自彭萦「吵架目的不是只发泄情绪，而是解决问题、表达脆弱、增进理解、和建立connetion。」" />
      <HRElement />
      <TitleElement title="关于博客" icon="🎠" />
      <PElement text="与他人建立联结的最简单方式，就是向他们分享一些东西。分享一次谈话，分享一次经历，分享一个故事，分享一个笑话，分享一顿美食，分享一个游戏，分享真实的自己。在人生中有无数次机会，我们可以跟其他人分享有趣的时光。" />
      <HRElement />
      <TitleElement title="博客编年史" icon="📜" />
      <SubTElement text="2025 年 4 月" />
      <ListElement>
        <li>
          使用 Next.js 15.x 进行博客改版 ，同时博客名改为「橘子路十字街道
          24号」。
        </li>
      </ListElement>
      <SubTElement text="2022 年 10 月" />
      <ListElement>
        <li>开始使用 Next.js 构建博客并托管于 Vercel 平台进行部署管理</li>
      </ListElement>
    </main>
  );
}
