import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prasad Electrical Works | Professional Electrician in Bengaluru",
  description:
    "Prasad Electrical Works provides reliable, professional residential and commercial electrical services in Srinivasapura, Yelahanka, and surrounding areas. Specialized in complete building electrical wiring, emergency repairs, LED lights, and more.",
  keywords:
    "Electrician Bengaluru, Electrical Works Srinivasapura, Yelahanka electrician, house wiring, switchboards, emergency electrical repair, commercial electrical services",
  openGraph: {
    title: "Prasad Electrical Works",
    description: "Expert electrical solutions for homes and businesses in Bengaluru.",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/Logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
