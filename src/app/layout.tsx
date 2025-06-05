import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Free Shadcnblocks",
  description: "An opensource collection of shadcn/ui blocks and components",
  keywords: [
    "shadcn",
    "ui",
    "react",
    "tailwind",
    "components",
    "blocks",
    "opensource",
    "free",
    "nextjs",
    "design system",
  ],
  metadataBase: new URL("https://shadcnblocks-free.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Shadcnblocks",
    description: "An opensource collection of shadcn/ui blocks and components",
    url: "https://shadcnblocks-free.vercel.app",
    siteName: "Free Shadcnblocks",
    images: [
      {
        url: "/images/og/ogimage.png",
        width: 1200,
        height: 630,
        alt: "Free Shadcnblocks OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Shadcnblocks",
    description: "An opensource collection of shadcn/ui blocks and components",
    images: ["/images/og/ogimage.png"],
    creator: "@shadcnblocks",
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">{children}</body>
    </html>
  );
}
