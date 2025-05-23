"use client";

import { PhotoView } from "@/components/ImagePreview";
import { useState } from "react";
import NextImage from "next/image";
import type { ImageProps } from "next/image";
import type { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import LoadingAnimation from "../LoadingAnimation";

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
        {loading && <LoadingAnimation />}
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
