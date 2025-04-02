"use client";

import { useMDXComponent } from "@content-collections/mdx/react";
import Pre from "./Pre";

export default function MDXContentMain({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return (
    <div className="markdown-docs prose max-w-full">
      <Component
        components={{
          pre: Pre,
        }}
      />
    </div>
  );
}
