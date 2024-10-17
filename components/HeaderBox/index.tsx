"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavList } from "@/lib/nav";

export default function HeaderBox() {
  const pathname = usePathname();

  return (
    <header>
      <div className="font-bold text-2xl">立冬 | IIex Lesquereux</div>
      <nav className="my-4">
        <ul className="flex flex-wrap">
          {NavList.map((nav) => (
            <li key={nav.title} className="mr-4">
              <Link
                href={nav.url}
                className={`hover:text-[#27AE60] ${
                  pathname === nav.url ? "text-[#27AE60]" : ""
                }`}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
