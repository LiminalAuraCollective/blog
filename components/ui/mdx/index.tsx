"use client";

import { useMDXComponent } from "@content-collections/mdx/react";
import Pre from "./pre";

export default function MDX({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return (
    <div className="markdown-docs prose max-w-full" id="markdown-docs">
      <Component
        components={{
          pre: Pre,
        }}
      />
    </div>
  );
}
