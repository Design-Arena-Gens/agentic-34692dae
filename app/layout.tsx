import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Birds - Discover the Beauty of Nature",
  description: "Explore the fascinating world of birds with stunning imagery and information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
