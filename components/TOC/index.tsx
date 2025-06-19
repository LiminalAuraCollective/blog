"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function TOC() {
  const [headings, setHeadings] = useState<
    { text: string; id: string; level: string }[]
  >([]);

  useEffect(() => {
    const articleElement = document.getElementById("markdown-docs");
    if (!articleElement) return;

    const extractedHeadings = Array.from(
      articleElement.querySelectorAll("h2, h3, h4")
    ).map((heading) => ({
      text: heading.textContent || "",
      id: heading.id || "",
      level: heading.nodeName, // 'H2' or 'H3'
    }));

    setHeadings(extractedHeadings);
  }, []);

  return (
    <nav className="hidden xl:block fixed top-18 right-0 mt-6 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4 max-w-[calc(100vw-80rem)]">
      {!!headings.length && (
        <>
          <h2 className="text-xl font-semibold mb-4">目录</h2>
          <ul className="space-y-2">
            {headings.map(({ text, id, level }) => (
              <li key={id} className={`${level === "H3" ? "ml-4" : ""}`}>
                <Link
                  href={`#${id}`}
                  title={text}
                  prefetch={false}
                  className="hover:text-[#f27c8d] transition-colors duration-200"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
}
