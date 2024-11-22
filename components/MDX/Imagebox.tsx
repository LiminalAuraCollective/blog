"use client";

import "react-photo-view/dist/react-photo-view.css";
import type { ImageProps } from "next/image";
import Image from "next/image";
import type { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function Imagebox(
  props: DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  return (
    <PhotoProvider>
      <PhotoView src={props.src as string}>
        <Image
          {...(props as ImageProps)}
          priority
          alt={props.alt ?? ""}
          width={0}
          height={0}
          sizes="100vw"
          className="cursor-pointer"
          style={{ width: "100%", height: "auto" }}
        />
      </PhotoView>
    </PhotoProvider>
  );
}
