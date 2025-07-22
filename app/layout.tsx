import type { Metadata } from "next";
import "../styles/tailwindcss.css";
import { baseUrl, metaConfig } from "@/lib/metadata";
import Header from "@/components/layouts/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <main className="mx-auto max-w-3xl p-5" id="main-box">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  ...metaConfig,
  metadataBase: new URL(baseUrl),
  title: {
    default: metaConfig.title,
    template: `%s | ${metaConfig.title}`,
  },
};
