import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "中本研究所 | Nakamoto Labs",
  description: "Bitcoin research and education for the Chinese-speaking community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className="bg-whitepaper min-h-screen">
        {children}
      </body>
    </html>
  );
} 