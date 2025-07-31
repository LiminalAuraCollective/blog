"use client";

import Giscus from "@giscus/react";

interface Props {
  term: string;
}

export default function Comments({ term }: Props) {
  return (
    <Giscus
      id="comments"
      repo="TravelerAs/comment"
      repoId="R_kgDOLceyIw"
      category="Announcements"
      categoryId="DIC_kwDOLceyI84Cdw7Z"
      mapping="specific"
      term={term}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="zh-CN"
      loading="lazy"
    />
  );
}
