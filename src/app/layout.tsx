import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", axes: ["SOFT", "opsz"], display: "swap" });
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: "Shining Star International School | Learn, Grow & Shine",
  description: "Discover Shining Star International School and explore its learning environment, educational approach, school activities, and admissions information.",
  alternates: { canonical: "/" }, // TODO: set real canonical URL
  openGraph: { title: "Shining Star International School", description: "Learn, Grow & Shine", type: "website" },
};
export const viewport: Viewport = { themeColor: "#142B4A", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <head><noscript><style>{`[style*="opacity"]{opacity:1!important;transform:none!important}`}</style></noscript></head>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
