import "./globals.css";

export const metadata = {
  title:
    "Vspcoderz Portfolio - Hi, I am Vspcoderz a 10th Student Passionate In Code ",
  description:
    "Hey I am Vedant Pakwane AKA Vspcoderz I am In 10th In 2025 I am Intrested In Java , DSA , Javascript , Python , AI/ML , Next.js , React  & More.... ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-100">{children}</body>
    </html>
  );
}
