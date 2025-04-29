import PhotoGraphyCard from "@/components/PhotoGraphyCard";
import type { Metadata } from "next";
import { AlbumArr } from "@/lib/album";

export default function Photography() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {AlbumArr.map((album, index) => (
        <PhotoGraphyCard {...album} key={index} />
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
