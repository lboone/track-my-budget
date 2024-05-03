import { Lato } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import "./auth.css";
import { ThemeProvider} from "@/providers";
import { ClerkProvider } from '@clerk/nextjs'

const lato = Lato({subsets: [], weight: ['300','400','700']});

export const metadata: Metadata = {
  title: "Track My Budget",
  description: "Easy to use budget tracking app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${lato.className}`}>
        <body >
          <ThemeProvider>
              {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
