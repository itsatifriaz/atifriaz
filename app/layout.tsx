import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://atifriaz.dev"),
  title: "Atif Riaz — Lead Frontend & Principal Software Engineer",
  description:
    "Lead Frontend & Principal Software Engineer with 10+ years experience. React, Next.js, Angular, TypeScript. AI-enhanced workflow. Open to remote.",
  keywords: [
    "Lead Frontend Engineer",
    "Principal Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Angular",
    "Atif Riaz",
    "Remote Frontend Engineer",
  ],
  authors: [{ name: "Atif Riaz" }],
  creator: "Atif Riaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atifriaz.dev",
    title: "Atif Riaz — Lead Frontend & Principal Software Engineer",
    description:
      "Lead Frontend & Principal Software Engineer with 10+ years experience. React, Next.js, Angular, TypeScript. AI-enhanced workflow. Open to remote.",
    siteName: "Atif Riaz",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atif Riaz — Lead Frontend & Principal Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atif Riaz — Lead Frontend & Principal Software Engineer",
    description:
      "Lead Frontend & Principal Software Engineer with 10+ years experience. React, Next.js, Angular, TypeScript.",
    creator: "@iamatifriaz",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}
    >
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='8' fill='%230a0a0a'/><text x='50' y='68' font-family='Georgia,serif' font-size='42' font-weight='700' fill='%234ade80' text-anchor='middle'>AR</text></svg>" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
