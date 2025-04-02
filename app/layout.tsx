import type { Metadata } from "next";
import { MetadataConfig } from "@/lib/metadata";
import HeaderMain from "@/components/HeaderMain";
import "@/styles/tailwindcss.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="max-w-3xl m-auto p-5">
        <HeaderMain />
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  ...MetadataConfig.metadata,
  icons: {
    icon: [
      { url: "/icons/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png" }],
  },
};
