import type { Metadata } from "next";
import "./globals.css";
import {Space_Grotesk} from 'next/font/google'

const spaceGrotesk = Space_Grotesk({
  weight: ['300', '400', '500', '600', '700', '300'],
  subsets: ['latin'],
  variable: '--font-spaceGrotesk'
})

export const metadata: Metadata = {
  title: "Telegram Web",
  description: "Telegram Web Application clone created by ask250",
  icons: { icon:'/logo.svg' }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
