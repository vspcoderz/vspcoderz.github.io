import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const manrope = Manrope({
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Vspcoderz",
  description: "Hello World.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", manrope.variable, "font-sans", inter.variable)}>
      <body className="font-datatype">
        <Navbar />
        <div className="">{children}</div>
      </body>
    </html>
  );
}
