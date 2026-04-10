import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const bebas = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

// Replace per client
export const metadata: Metadata = {
  title: "20th Street Auto Service | Trusted Auto Repair in Boca Raton, FL",
  description: "Honest diagnostics, quality repairs, and fair pricing. Family-owned ASE-certified auto shop on N Dixie Hwy serving Boca Raton for 15+ years. Call (561) 465-5512.",
  keywords: ["auto repair boca raton", "mechanic boca raton", "brake service", "oil change", "20th street auto", "car repair near me"],
  openGraph: {
    title: "20th Street Auto Service | Trusted Auto Repair in Boca Raton, FL",
    description: "Honest diagnostics, quality repairs, and fair pricing. Family-owned ASE-certified auto shop serving Boca Raton for 15+ years.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--text)]">
        {children}
      </body>
    </html>
  );
}
