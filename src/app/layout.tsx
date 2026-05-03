import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "vspcoderz | Full Stack Developer",
  description:
    "Portfolio of vspcoderz, a full stack developer focused on backend, DevOps, and system design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full scroll-smooth",
        "antialiased",
        "font-sans",
        jetbrains.className
      )}
    >
      <body className="">
        <div>{children}</div>
      </body>
    </html>
  );
}
