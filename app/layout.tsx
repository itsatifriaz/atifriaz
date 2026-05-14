import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { GeistPixelCircle } from "geist/font/pixel";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

const BASE_URL = "https://atifriaz.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Atif Riaz — Lead Frontend & Principal Software Engineer",
    template: "%s | Atif Riaz",
  },
  description:
    "Atif Riaz is a Lead Frontend & Principal Software Engineer with 10+ years of experience building high-traffic web products at Zameen.com and Cityscape Technology. Expert in React, Next.js, TypeScript, and AI-enhanced development. Open to remote roles worldwide.",
  keywords: [
    "Atif Riaz",
    "Lead Frontend Engineer",
    "Principal Software Engineer",
    "React Developer",
    "Next.js Expert",
    "TypeScript Engineer",
    "Angular Developer",
    "Vue.js Developer",
    "Remote Frontend Engineer",
    "AI-Enhanced Developer",
    "Zameen.com Engineer",
    "Cityscape Technology",
    "Pakistan Software Engineer",
    "Frontend Architect",
    "UI Engineer",
    "Full Stack Developer",
  ],
  authors: [{ name: "Atif Riaz", url: BASE_URL }],
  creator: "Atif Riaz",
  publisher: "Atif Riaz",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: BASE_URL,
    title: "Atif Riaz — Lead Frontend & Principal Software Engineer",
    description:
      "10+ years shipping high-traffic web products. React, Next.js, TypeScript, Angular. AI-native engineering workflow. Open to remote roles worldwide.",
    siteName: "Atif Riaz — Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Atif Riaz — Lead Frontend & Principal Software Engineer",
      },
    ],
    firstName: "Atif",
    lastName: "Riaz",
    username: "iamatifriaz",
    gender: "male",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atif Riaz — Lead Frontend & Principal Software Engineer",
    description:
      "10+ years shipping high-traffic web products. React, Next.js, TypeScript, Angular. AI-native workflow. Open to remote.",
    creator: "@iamatifriaz",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#person`,
      name: "Atif Riaz",
      url: BASE_URL,
      image: {
        "@type": "ImageObject",
        url: `${BASE_URL}/atifriaz.png`,
        width: 800,
        height: 800,
      },
      jobTitle: "Lead Frontend Engineer",
      description:
        "Lead Frontend & Principal Software Engineer with 10+ years of experience building high-traffic web products. Expert in React, Next.js, TypeScript, Angular, and Vue.js. Previously Staff Engineer at Zameen.com and Lead Frontend Architect at Cityscape Technology, Canada.",
      email: "atifriaz.se@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "PK",
      },
      sameAs: [
        "https://github.com/itsatifriaz",
        "https://linkedin.com/in/iamatifriaz",
        "https://twitter.com/iamatifriaz",
        "https://dev.to/iamatifriaz",
        "https://atifriaz.hashnode.dev",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Angular",
        "Vue.js",
        "Nuxt",
        "Node.js",
        "Frontend Architecture",
        "Web Performance",
        "SEO",
        "AI-Enhanced Development",
        "Claude Code",
        "GitHub Copilot",
      ],
      worksFor: [
        {
          "@type": "Organization",
          name: "Cityscape Technology",
          url: "https://cityscapeone.com",
          address: { "@type": "PostalAddress", addressCountry: "CA" },
        },
      ],
      alumniOf: [
        {
          "@type": "Organization",
          name: "Zameen.com",
          url: "https://zameen.com",
        },
      ],
      seeks: {
        "@type": "Demand",
        name: "Remote Senior / Lead / Principal Frontend Engineering roles",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Atif Riaz — Portfolio",
      description: "Personal portfolio of Atif Riaz, Lead Frontend Engineer",
      author: { "@id": `${BASE_URL}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Atif Riaz?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Atif Riaz is a Lead Frontend & Principal Software Engineer based in Lahore, Pakistan, with 10+ years of experience building high-traffic web products. He has worked as a Staff Engineer at Zameen.com (Pakistan's #1 property portal) and as Lead Frontend Architect at Cityscape Technology in Canada. He specialises in React, Next.js, TypeScript, Angular, and AI-enhanced development.",
          },
        },
        {
          "@type": "Question",
          name: "What technologies does Atif Riaz specialise in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Atif Riaz specialises in React, Next.js, TypeScript, Angular, Vue.js, Nuxt, Node.js, Tailwind CSS, and AI-assisted development tools like Claude Code, GitHub Copilot, and Cursor. He has deep experience in frontend architecture, web performance, SEO, and analytics integration.",
          },
        },
        {
          "@type": "Question",
          name: "Is Atif Riaz available for remote work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Atif Riaz is open to remote Senior, Lead, and Principal Frontend Engineering roles as well as freelance projects worldwide. He can be reached at atifriaz.se@gmail.com.",
          },
        },
        {
          "@type": "Question",
          name: "Where has Atif Riaz worked?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Atif Riaz has worked at Zameen.com as a Staff Software Engineer (Pakistan's #1 property portal, serving millions of users) and at Cityscape Technology in Canada as Lead Frontend Architect, building a technology-driven real estate brokerage platform for the Greater Toronto Area market.",
          },
        },
      ],
    },
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
      className={`${inter.variable} ${jetbrains.variable} ${GeistPixelCircle.variable}`}
    >
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='8' fill='%230a0a0a'/><text x='50' y='68' font-family='Georgia,serif' font-size='42' font-weight='700' fill='%234ade80' text-anchor='middle'>AR</text></svg>" />
        {/* Anti-flash: sets data-theme before React hydrates to prevent FOSWT */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme:light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);document.documentElement.classList.add('no-transitions');requestAnimationFrame(function(){document.documentElement.classList.remove('no-transitions');});}catch(e){}})();` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
