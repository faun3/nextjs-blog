import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeContext, ThemeProvider } from "@/context/ThemeContext";
import { useContext } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "dremt - design & blogging",
  description: "next.js 13 bb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-w-100vw overflow-x-hidden bg-slate-950 text-slate-300 `}
      >
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
