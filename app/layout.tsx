import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Top Fives",
  description: "What are your top fives? Movies, TV shows, books, places, artists, songs? Share them here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-white to-yellow-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
