import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokédex",
  description: "Una Pokédex moderna construida con Next.js y PokeAPI",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        
        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
