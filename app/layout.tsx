import type React from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "next-themes";
import { ThemeProvider } from "next-themes";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Lewix - Elegant Footwear for Women",
  description:
    "Discover our collection of handcrafted shoes designed for the modern woman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
