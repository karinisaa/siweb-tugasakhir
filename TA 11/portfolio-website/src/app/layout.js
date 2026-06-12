import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Karin Khairinissa | System Analyst & Frontend Developer",
  description:
    "Portfolio website of Karin Khairinissa, a System Analyst & Frontend Developer from ITENAS Bandung.",
  keywords: "portfolio, system analyst, frontend developer, itenas, next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
