import "./globals.css";

export const metadata = {
  title: "Vspcoderz | Under Construction",
  description: "This site is currently under construction.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
