import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./components/stylesheets/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PRAISE UGOCHIM GEORGEWILL",
  description: "Explore 's portfolio showcasing expertise in full-stack engineering and Web3 development. Discover projects, services, and insights into blockchain technology. Connect for consultations and collaborations!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
