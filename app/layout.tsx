import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { ActiveContextProvider } from "@/context/ActiveContext";

const poppins = Poppins({
   subsets: ["latin"], 
   weight: ['200', '300', '400', '500', '600', '700', '900'] 
  },);

export const metadata: Metadata = {
  title: "It's LITTO",
  description: "Freshest greens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}scroll-smooth`}>
        <Header />
        
        <ActiveContextProvider>
          {children}
        </ActiveContextProvider>

        <Footer />
      </body>
    </html>
  );
}
