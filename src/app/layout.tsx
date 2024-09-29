import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import DarkModeProvider from "./context/DarkModeContext";
import ReactQueryContext from "./context/ReactQueryContext";
import { Toaster } from 'react-hot-toast';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virunga",
  description: "Virunga online shop | E-commerce",
  icons: {
    icon: '/icons/virunga-logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/virunga-logo.svg" />
      </head>
      <body className={`${inter.className} w-[100%] h-full dark:bg-Gary-900 bg-[#FFFFFF] dark:text-Gary-100 text-Gary-800`}>
        <ReactQueryContext>
          <DarkModeProvider>
           <Toaster/>
            {children}
          </DarkModeProvider>
        </ReactQueryContext>
      </body>
    </html>
  );
}
