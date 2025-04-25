import PhotoGraphyCard from "@/components/PhotoGraphyCard";
import type { Metadata } from "next";
import { AlbumArr } from "@/lib/album";

export default function Photography() {
  return (
    <main className="flex justify-between flex-wrap">
      {AlbumArr.map((album, index) => (
        <div className="md:mr-3 mb-5" key={index}>
          <PhotoGraphyCard {...album} />
        </div>
      ))}
    </main>
  );
}

export const metadata: Metadata = {
  title: "摄影",
  description:
    "A collection of my photography and creative work, each image capturing a unique moment and emotion.",
  keywords: ["album", "photo", "photography", "travel", "摄影"],
};
