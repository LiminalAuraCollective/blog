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
        <Link href="/links" className={LinkClass}>
          友链
        </Link>
        <Link href="/feed" className={LinkClass}>
          RSS
        </Link>
      </nav>
    </header>
  );
}
