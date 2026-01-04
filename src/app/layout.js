import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";

import AOSWrapper from "./components/AOSWrapper";
import NavBar from "./components/navbar";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Mohit Gupta | Frontend Developer Portfolio",
    template: "%s | Mohit Gupta",
  },
  description:
    "Mohit Gupta is a BCA student and Frontend Developer specialising in React, Next.js, Tailwind CSS and modern web development.",
  keywords: [
    "Mohit Gupta",
    "Frontend Developer Portfolio",
    "React Developer India",
    "Next.js Developer",
    "BCA Student Portfolio",
    "Web Developer Portfolio",
    "Mellifluousguy",
    "mellifluousguy",
    "Mellifluousguy Developer",
    "Mellifluousguy Mohoit Gupta",
  ],
  authors: [{ name: "Mohit Gupta" }],
  creator: "Mohit Gupta",
  metadataBase: new URL("https://mellifluousguy.vercel.app"), // replace with custom domain later
  openGraph: {
    title: "Mohit Gupta | Frontend Developer",
    description:
      "Portfolio of Mohit Gupta showcasing React, Next.js, Tailwind CSS projects.",
    url: "https://mellifluousguy.vercel.app",
    siteName: "Mohit Gupta Portfolio",
    images: [
      {
        url: "/hero.svg",
        width: 1200,
        height: 630,
        alt: "Mohit Gupta Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohit Gupta | Frontend Developer",
    description:
      "Frontend Developer Portfolio built using Next.js and Tailwind CSS.",
    images: ["/hero.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/tabIcon.svg",
    shortcut: "/tabIcon.svg",
    apple: "/tabIcon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={space.variable}>
      <body className="antialiased text-space overflow-x-hidden bg-dark-bg">
        {/* Animation On Scroll */}
        <AOSWrapper />

        {/* Layout */}
        <div className="w-full min-h-screen animate-[glow_5s_infinite_alternate]">
          <NavBar />
          {children}
        </div>

        {/* Load reCAPTCHA ONLY if really required */}
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
