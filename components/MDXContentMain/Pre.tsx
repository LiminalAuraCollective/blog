"use client";

import { Check, Copy } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from "react";

export default function Pre({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) {
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleClickCopy = async () => {
    const code = preRef.current?.textContent;

    if (code) {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };

  return (
    <div className="relative">
      <pre ref={preRef} {...props} suppressHydrationWarning>
        <button
          disabled={isCopied}
          onClick={handleClickCopy}
          className="absolute right-4 size-6 cursor-pointer"
        >
          {isCopied ? <Check color="#00c9a7"/> : <Copy color="#009efa"/>}
        </button>
        {children}
      </pre>
    </div>
  );
}
