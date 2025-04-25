"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

interface Props {
  src: string;
}

export default function ViewImgBox({ src }: Props) {
  return (
    <PhotoProvider>
      <PhotoView src={src}>
        <img src={src} alt="" className="cursor-pointer" />
      </PhotoView>
    </PhotoProvider>
  );
}
