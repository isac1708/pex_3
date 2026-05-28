import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import Header from "../components/Header"; 
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Floricultura Alcobaça",
  description: "Os mais belos arranjos para quem você ama.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}