"use client";

import { PortfolioProvider } from "./Context/PortfolioContext";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <PortfolioProvider>{children}</PortfolioProvider>
      </body>
    </html>
  );
}



