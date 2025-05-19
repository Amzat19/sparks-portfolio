import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"], // optional
  display: "swap",
});

export const metadata: Metadata = {
  title: "DJ Msparks Portfolio",
  description:
    "Enter the musical realm of DJ Msparks, where beats and creativity collide. Explore the portfolio showcasing electrifying mixes, unforgettable events, and a passion for music that knows no bounds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
