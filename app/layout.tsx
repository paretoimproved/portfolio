import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brandon Queener | Engineering Leader",
  description: "Engineering Manager at Coinbase. Leading teams that build agentic AI systems, enterprise platforms, and tools that scale.",
  openGraph: {
    title: "Brandon Queener | Engineering Leader",
    description: "Engineering Manager at Coinbase. Leading teams that build agentic AI systems, enterprise platforms, and tools that scale.",
    type: "website",
    url: "https://brandonqueener.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#09090b]">{children}</body>
    </html>
  );
}
