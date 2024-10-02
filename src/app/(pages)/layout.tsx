'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Uzuri Essentials",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="bg-background relative">
        <Navbar />
        <div className="w-full flex justify-center">
          <div className="w-full xl:w-[1400px]">
            {children}
          </div>  
        </div>
        <Footer />
      </body>
    </html>
  );
}
