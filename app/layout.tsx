import type { Metadata } from "next";
import "../styles/index.css";
import LayoutBox from "@/components/LayoutBox";

export const metadata: Metadata = {
  title: "立冬 | 众里寻他千百度，蓦然回首，那人却在，灯火阑珊处",
  authors: [
    { name: "IIex-Lesquereux", url: "https://github.com/IIex-Lesquereux" },
  ],
  keywords: "Text, Blog, Chat, ACG, IIex-Lesquereux, Wallpapers, Next, Next.js",
  description:
    "立冬 | 众里寻他千百度，蓦然回首，那人却在，灯火阑珊处 | 记录哪些令人无法忘怀的点点滴滴",
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body suppressHydrationWarning>
        <LayoutBox>{children}</LayoutBox>
      </body>
    </html>
  );
}
