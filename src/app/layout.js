import SmoothScrolling from "@/components/SmoothScrolling";
import "./globals.css";
import { Space_Grotesk, Space_Mono, Cambay, Oswald } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "700"], // adjust as needed
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
});

const cambay = Cambay({
  subsets: ["latin"],
  variable: "--font-cambay",
  weight: ["400"],
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400"],
});

export const metadata = {
  title: "Vspcoderz Portfolio ",
  description:
    "Hey I am Vedant Pakwane AKA Vspcoderz I am In 10th In 2025 I am Intrested In Java , DSA , Javascript , Python , AI/ML , Next.js , React  & More.... ",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-zinc-900 text-zinc-100 ${spaceGrotesk.variable} ${spaceMono.variable} ${cambay.variable}`}
      >
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
