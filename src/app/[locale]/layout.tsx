import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import DarkModeProvider from "../context/DarkModeContext";
import ReactQueryContext from "../context/ReactQueryContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virunga",
  description: "Virunga online shop | E-commerce",
  icons: {
    icon: "/icons/virunga-logo.svg",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/icons/virunga-logo.svg" />
      </head>
      <body className={`${inter.className}`}>
        <div
          className={`${inter.className} w-[100%] h-full dark:bg-Gary-900 bg-[#FFFFFF] dark:text-Gary-100 text-Gary-800`}
        >
          <ReactQueryContext>
            <DarkModeProvider>
              <Toaster />
              {children}
            </DarkModeProvider>
          </ReactQueryContext>
        </div>
      </body>
    </html>
  );
}
