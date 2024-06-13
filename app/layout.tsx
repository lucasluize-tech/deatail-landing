import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UD - Ultimate Detailing",
  description: "Professional car detailing services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={inter.className}>
        <Toaster />
        <div className='bg-#2e2d2d-900 text-white min-h-screen px-4 py-8 font-serif mx-auto'>
          {children}
        </div>
      </body>
    </html>
  );
}
