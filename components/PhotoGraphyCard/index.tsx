"use client";

import { parseISO, format } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import { PhotoView } from "@/components/ImagePreview";
import { AlbumProps } from "@/lib/types";

interface Props extends AlbumProps {
  blurDataURL?: string;
}

export default function PhotoGraphyCard({ src, date, description }: Props) {
  const _date = parseISO(date);
  // 获取月份名称（简写）
  const month = format(_date, "MMMM"); // 'april'
  // 获取星期几（全名）
  const dayOfWeek = format(_date, "EEEE"); // 输出取决于时区，例如 'Tuesday' 或 'Wednesday'
  // 获取当月天数
  const daysInMonth = format(_date, "dd"); // 指定月份的指定天数
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-white p-6 shadow-sm w-full h-auto">
      <header className="text-sm">
        <h1 className="mb-2 capitalize">{month}</h1>
        <div className="flex mb-2 justify-between items-end">
          <span className="text-4xl leading-none font-bold">{daysInMonth}</span>
          <span className="capitalize">{dayOfWeek}</span>
        </div>
      </header>
      <div className="relative w-full h-40">
        {loading && (
          <div className="absolute w-full h-full flex animate-pulse space-x-4 items-center">
            <div className="flex-1 space-y-6 py-1">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 h-2 rounded bg-gray-200" />
                <div className="col-span-2 h-2 rounded bg-gray-200" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 h-2 rounded bg-gray-200" />
                <div className="col-span-2 h-2 rounded bg-gray-200" />
              </div>
              <div className="h-2 rounded bg-gray-200" />
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-200" />
                <div className="col-span-1 h-2 rounded bg-gray-200" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 h-2 rounded bg-gray-200" />
                <div className="col-span-1 h-2 rounded bg-gray-200" />
              </div>
            </div>
          </div>
        )}
        <PhotoView src={src}>
          <Image
            fill
            src={src}
            alt="img"
            priority={false}
            className={`transition-opacity duration-550 ease-in-out object-cover ${
              loading ? "opacity-0 blur-lg" : "opacity-100 blur-0"
            }`}
            style={{ width: "100%" }}
            onLoad={() => setLoading(false)}
          />
        </PhotoView>
      </div>
      <div className="mt-2">
        <p className="text-xs line-clamp-2 h-[34px] break-all">{description}</p>
      </div>
    </div>
  );
}
