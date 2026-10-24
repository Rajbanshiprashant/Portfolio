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
  title: "PRASHANT // Motion & 3D Lab • Designing Beyond The Frame",
  description:
    "Transforming complex concepts into motion, spatial identity, typography, and procedural visual systems. Operating across Paris & remote stages globally.",
  keywords: [
    "Prashant",
    "motion design",
    "3D artist",
    "anime production",
    "sakuga",
    "graphic design",
    "video editor",
    "Houdini",
    "Octane",
    "Cinema 4D",
    "creative direction",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#070714] text-white font-mono antialiased overflow-x-hidden selection:bg-[#FF2A85] selection:text-[#00F0FF]">
        {children}
      </body>
    </html>
  );
}
