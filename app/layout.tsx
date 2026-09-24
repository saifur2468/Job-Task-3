import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./src/landingpage/navbar/navbar";


export const metadata: Metadata = {
  title: "EchoGPT",
  description: "A modern AI workspace for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
  <Navbar></Navbar>

        {children}
      </body>
    </html>
  );
}