import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";

import Navigation from "@/app/_components/Navigation";
import Footer from "@/app/_components/Footer";

import { DarkModeProvider } from "@/app/_context/DarkModeProvider";

import "@/app/_styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krea AI",
  description: "Built with ❤ by CHiDI",
  icons: {
    icon: "/kreaLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DarkModeProvider>
          <Navigation />
          <main className="pt-20">{children}</main>
          <Footer />
        </DarkModeProvider>
      </body>
    </html>
  );
}
