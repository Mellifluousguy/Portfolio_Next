
import { Geist, Space_Grotesk } from "next/font/google";
import AOSWrapper from './components/AOSWrapper'
import "./globals.css";
import Script from "next/script";


import NavBar from './components/navbar'



// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const space = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});
export const metadata = {
  title: "Portfolio - Mellifluousguy",
  description: "Portfolio of Mohit Gupta a Frontend Developer.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <Script src={`https://www.google.com/recaptcha/api.js`} async defer />
      </head>
      <body
        // className={`${geistSans.variable} antialiased`}
        className={`${space.variable} antialiased text-space overflow-x-hidden bg-dark-bg`}
      >
        <AOSWrapper />
        <div data-aos='fade-in' className="patterns">
          {/* <div className="w-full min-h-screen animate-[glow_5s_infinite_alternate]"> */}
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
