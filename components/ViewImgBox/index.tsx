"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import blurImg from "@/public/images/blur_img.png";

interface Props {
  src: string;
}

export default function ViewImgBox({ src }: Props) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="relative w-full h-40">
      <PhotoProvider>
        <PhotoView src={src}>
          <div>
            <Image
              src={blurImg}
              fill
              alt=""
              placeholder="blur"
              className={clsx(loading ? "blur-lg" : "hidden")}
              loading="lazy"
            />
            <Image
              src={src}
              alt=""
              className={clsx(
                "transition-opacity duration-550 ease-in-out",
                "cursor-pointer object-cover",
                loading ? "opacity-0 blur-lg" : "opacity-100 blur-0"
              )}
              fill
              loading="lazy"
              onLoad={() => setLoading(false)}
            />
          </div>
        </PhotoView>
      </PhotoProvider>
    </div>
  );
}
