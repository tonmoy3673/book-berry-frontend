import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";
import LayoutWrapper from "@/common/LayoutWrapper";

const roboto = Roboto_Mono({
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Book-Berry",
  description:
    "Book-Berry is a modern e-commerce platform for buying and selling books online, built to provide a fast, secure, and user-friendly experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`roboto.className antialiased`}>
        <LayoutWrapper>
          {/* =============== Header ============= */}
          <Header />
          <main>{children}</main>
          {/* ============ Footer ============ */}
          <Footer />
        </LayoutWrapper>
      </body>
    </html>
  );
}
