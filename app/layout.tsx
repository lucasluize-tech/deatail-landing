import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UDX - Ultimate Detailing Experience",
  description:
    "Professional auto detailing services near me, ceramic coating, interior car cleaning, and more!",
  creator: "Lucas Santos Luize | lucasluize.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={inter.className}>
        <Toaster
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
              fontWeight: "semibold",
              fontSize: "1.25rem",
              fontFamily: "sans-serif",
            },
          }}
        />
        <div className='bg-#2e2d2d-900 text-white min-h-screen px-4 py-8 font-serif mx-auto'>
          {children}
        </div>
      </body>
    </html>
  );
}
