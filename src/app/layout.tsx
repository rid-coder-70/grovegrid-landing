import type { Metadata } from "next";
import { Inter, Space_Mono, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Synthorix | We Build the Web. We Automate the Rest.",
  description: "Synthorix architects brutalist web experiences and zero-friction automated workflows.",
  icons: {
    icon: "/favicon.png",
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
      className={`${inter.variable} ${spaceMono.variable} ${syne.variable} h-full antialiased scroll-smooth overflow-x-hidden`}
    >
      <body className="min-h-full w-full flex flex-col bg-[#050810] text-[#e2e8f0] font-inter overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
