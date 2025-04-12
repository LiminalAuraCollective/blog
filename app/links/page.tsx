import Link from "next/link";
import { LinksArr } from "@/lib/links";

export default function LinksPage() {
  return (
    <main>
      <p className="my-2 text-sm">
        兴趣是广泛的，行为是未知的，这里的内容一定是令我欣喜的。
      </p>
      <p className="my-2 text-sm">2025-04-10</p>
      <div className="text-sm my-2 font-bold">历程</div>
      <ul className="list-disc list-inside indent-[2em] text-sm">
        {LinksArr.map((link, index) => (
          <li key={index}>
            <Link
              href={link.url}
              className="text-[#1a89ae] hover:text-blue-700"
              target="_blank"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
