import clsx from "clsx";
import Link from "next/link";

export default function Home() {
  const ClassP = "text-sm my-4 leading-[1.6]";

  return (
    <main>
      <h2 className="my-4 font-bold text-xl">🎏关于博主</h2>
      <p className={ClassP}>Hi, 欢迎你来到我的博客，你可以叫我小橘。</p>
      <p className={ClassP}>
        这里主要是一些 Coding 相关的记录,
        当然也随机掉会落一些其他的日常记录及感想。
      </p>
      <p className={ClassP}>
        喜欢的事：📖读闲书、📝
        想写作、🚶‍♂️散步、🛤爬山、👩‍🎤看Live和🐆逛动物园（不支持强迫性动物表演）。
      </p>
      <p className={ClassP}>
        给我发邮件：
        <Link
          href="mailto:chengyongliu@foxmail.com"
          className="text-blue-700 hover:underline decoration-solid"
        >
          chengyongliu@foxmail.com
        </Link>
      </p>
      <p className={ClassP}>
        项目源地址：
        <Link
          href="https://github.com/TravelerAs/blog"
          className="text-blue-700 hover:underline decoration-solid"
          target="_blank"
        >
          A salted fish that doesn&apos;t want to work hard.
        </Link>
      </p>
      <hr className="border-dashed border-t my-2" />
      <p className={ClassP}>
        2025
        年最喜欢的一句话「文字更利于深度学习和独立思考，而视频则更适合娱乐消遣与信息传播。」
      </p>
      <p className={ClassP}>
        2022 年最喜欢的一句话出自彭
        萦「吵架目的不是只发泄情绪，而是解决问题、表达脆弱、增进理解、和建立
        connetion。」
      </p>
      <hr className="border-dashed border-t my-2" />
      <h2 className="my-4 font-bold text-xl">🎠关于博客</h2>
      <p className={ClassP}>
        与他人建立联结的最简单方式，就是向他们分享一些东西。分享一次谈话，分享一次经历，分享一个故事，分享一个笑话，分享一顿美食，分享一个游戏，分享真实的自己。在人生中有无数次机会，我们可以跟其他人分享有趣的时光。
      </p>
      <hr className="border-dashed border-t my-2" />
      <h2 className="my-4 font-bold text-xl">📜博客编年史</h2>
      <p className={clsx(ClassP, "font-bold")}>2025 年 4 月</p>
      <ul className="list-disc list-inside indent-[2em]">
        <li>
          <span className="mr-2">参考</span>
          <Link
            href="https://www.javis.me/"
            className="text-blue-700 hover:underline decoration-solid"
          >
            大佬
          </Link>
          <span className="mx-2">使用</span>
          <Link
            href="https://nextjs.org/"
            className="text-blue-700 hover:underline decoration-solid"
          >
            Next.js
          </Link>
          <span className="mr-2"></span>
          15.x 进行博客改版 ，同时博客名改为「橘子路十字街道 24 号」。
        </li>
      </ul>
      <p className={clsx(ClassP, "font-bold")}>2022 年 10 月</p>
      <ul className="list-disc list-inside indent-[2em]">
        <li>
          开始使用
          <Link
            href="https://nextjs.org/"
            className="text-blue-700 hover:underline decoration-solid ml-2"
          >
            Next.js
          </Link>
          <span className="mx-2">构建博客并托管于</span>
          <Link
            href="https://vercel.com/home"
            className="text-blue-700 hover:underline decoration-solid mr-2"
          >
            Vercel
          </Link>
          平台进行部署管理
        </li>
      </ul>
    </main>
  );
}
