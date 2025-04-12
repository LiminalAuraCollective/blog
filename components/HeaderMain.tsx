import Link from "next/link";

const LinkClass = "mr-3 text-blue-700 hover:underline decoration-solid";

export default function HeaderMain() {
  return (
    <header>
      <Link href="/">
        <h1 className="text-[1.2em] font-bold">橘子路十字街道 24 号</h1>
      </Link>
      <nav className="my-4 text-sm">
        <Link href="/" className={LinkClass}>
          关于
        </Link>
        <Link href="/posts" className={LinkClass}>
          文章
        </Link>
        <Link
          href="https://wallpapers-phi.vercel.app/"
          className={LinkClass}
          target="_blank"
        >
          壁纸
        </Link>
        <Link href="/photography" className={LinkClass}>
          摄影
        </Link>
        <Link href="/books" className={LinkClass}>
          书籍
        </Link>
        <Link href="/feed" className={LinkClass} target="_blank">
          RSS
        </Link>
      </nav>
    </header>
  );
}
