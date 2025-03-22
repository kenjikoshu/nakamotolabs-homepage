import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "中本研究所 | Nakamoto Labs",
  description: "Bitcoin research and education for the Chinese-speaking community",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "中本研究所 | Nakamoto Labs",
    description: "Bitcoin research and education for the Chinese-speaking community",
    url: "https://nakamotolabs.org",
    siteName: "Nakamoto Labs",
    images: [
      {
        url: "/SocialPreview.png",
        width: 1200,
        height: 630,
        alt: "Nakamoto Labs Social Preview",
      },
    ],
    locale: "zh_TW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "中本研究所 | Nakamoto Labs",
    description: "Bitcoin research and education for the Chinese-speaking community",
    images: ["/SocialPreview.png"],
    creator: "@zhbitcoin",
  },
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