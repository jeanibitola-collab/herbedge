import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const heading = Fraunces({ subsets: ["latin"], variable: "--font-heading" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Vitamin D3 + K2 | HerbEdge",
  description:
    "Vitamin D3 + K2 supplement with free delivery across Nigeria and payment on delivery.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="bg-stone-50 text-stone-800 antialiased font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}