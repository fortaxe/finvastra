

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/landing/footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import AnalyticsScripts from "@/components/ui/analytics-scripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Finvastra | Home Loans, Business Loans, Wealth Planning & Corporate Funding",
  description: "Finvastra offers expert support in Home Loans, Business Loans, Wealth Planning and Corporate Funding. Clear options, fast assistance and trusted financial guidance for every goal.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NVNXZZ6F"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <AnalyticsScripts />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
