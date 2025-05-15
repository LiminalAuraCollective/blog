"use client";

import { PhotoView } from "@/components/ImagePreview";
import { useState } from "react";
import NextImage from "next/image";
import type { ImageProps } from "next/image";
import type { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export default function Image(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > & { originalsrc?: string }
) {
  const [loading, setLoading] = useState(true);
  const originalsrc = props.originalsrc ?? props.src;

  return (
    <PhotoView src={originalsrc}>
      <span className="block relative h-50 md:h-80">
        {loading && (
          <span className="absolute w-full h-full flex justify-center items-center h-32 bg-zinc-50 rounded-md">
            <span className="animate-spin rounded-full h-12 w-12 border-4 border-zinc-100 border-t-transparent" />
          </span>
        )}
        <NextImage
          {...(props as ImageProps)}
          fill
          priority={false}
          alt={props.alt ?? ""}
          onLoad={() => setLoading(false)}
          onError={() => setLoading(true)}
          className={`object-cover transition-opacity duration-500 rounded-md ${
            loading ? "opacity-0" : "opacity-100"
          }`}
        />
      </span>
    </PhotoView>
  );
}
