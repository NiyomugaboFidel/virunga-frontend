import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Header from "./UI/organisms/Header";
import DarkModeProvider, { DarkModeContext } from "./context/DarkModeContext";
import ReactQueryContext from "./context/ReactQueryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Virunga",
  description: "Virunga online shop | E-commerce",
  icons: {
    icon:'/icons/virunga-logo.svg'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryContext>
        <DarkModeProvider>
        <div className="w-[100%] h-full dark:bg-Gary-900 bg-[#FFFFFF] dark:text-Gary-100 text-Gary-800 ">
        {children}
        </div>
        </DarkModeProvider>
        </ReactQueryContext>
       
      </body>
    </html>
  );
}
