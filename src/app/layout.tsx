import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";
import { StoreProvider } from "@/lib/store";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "IKEA Baghdad | Scandinavian Furniture in Iraq — IQD Prices",
  description: "Shop sofas, beds, dining, office & garden furniture in Baghdad. Prices in IQD, free delivery & assembly, WhatsApp ordering. English, Arabic & Kurdish Sorani.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <LanguageProvider>
          <StoreProvider>
            <Header />
            <main className="min-h-[60vh]">{children}</main>
            <Footer />
            <WhatsAppFloat />
          </StoreProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
