"use client";

import { useEffect, useState } from "react";

type HeadingDirectdory = Array<{
  level: number;
  text: string;
}>;

export default function PostsDirectory() {
  const [directory, setDirectdory] = useState<HeadingDirectdory>([]);

  useEffect(() => {
    const anchElements = document.querySelectorAll(".prose .anchor");
    const dirs: HeadingDirectdory = [];
    anchElements.forEach((anchEle) => {
      const parentElement = anchEle.parentElement;
      if (parentElement) {
        dirs.push({
          level: +parentElement.tagName.replace(/H/, ""),
          text: parentElement.getAttribute("id") ?? "",
        });
      }
    });
    setDirectdory(dirs);
  }, []);

  return (
    <ol className="my-4 list-decimal pl-5">
      {directory.map(({ text }) => {
        return (
          <li key={text} className="mb-1">
            <a href={`#${text}`} className="text-[#C82F57] ">
              <span className="py-1 text-[15px] hover:border-b-[1.6px] hover:border-[#C82F57]">
                {text}
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}
