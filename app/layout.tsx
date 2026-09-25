import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://framra.vercel.app"),
  title: {
    default: "Tjäna extra. Ha kul på vägen. | FRAMRA",
    template: "%s | Framra",
  },
  description:
    "Sugen på ett extrajobb som ger mer än bara lön? Lär dig sälja från grunden, träffa nya människor och utvecklas med FRAMRA. Du får provision och kan själv påverka vad du tjänar.",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "FRAMRA",
    title: "Tjäna extra. Ha kul på vägen. | FRAMRA",
    description:
      "Lär dig försäljning från grunden, träffa nya människor och utvecklas med FRAMRA. Ett extrajobb där du får provision och kan påverka vad du tjänar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tjäna extra. Ha kul på vägen. | FRAMRA",
    description:
      "Lär dig sälja från grunden, träffa nya människor och ha kul med teamet. Sök extrajobb hos FRAMRA.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6d4aff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
