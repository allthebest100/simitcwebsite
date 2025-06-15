// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "SIM IT Club",
  description: "Official Website of SIM IT Club",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
