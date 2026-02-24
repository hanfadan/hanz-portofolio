import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Farhan Maulidan | Software Developer",
  description:
    "Software Developer specializing in web, mobile, and backend engineering with a focus on scalable, reliable systems.",
  openGraph: {
    title: "Muhammad Farhan Maulidan | Software Developer",
    description:
      "Building scalable, reliable, and user-focused digital products.",
    type: "website",
    url: "https://farhanmaulidan.my.id",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
