"use client"

import { PhotoProvider } from "@/components/ImagePreview";
import { PropsWithChildren } from "react";

export default function Providers({ children }: PropsWithChildren) {
  return <PhotoProvider>{children}</PhotoProvider>;
}
