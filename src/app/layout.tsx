import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/_component/Header";
import { LocationProvider } from "@/contexts/LocationContext";
import Footer from "@/components/Footer/Footer";
import { LocationSelector, OurPhilosophy, RestaurantPhoto } from "@/components";
import Popup from "@/_component/Popup";
import Hero from "@/components/Hero/Hero";
import Menu from "@/_component/Menu";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Sushiwood Fernie",
  description:
    "Sushiwood blends the best of Japanese and Korean cuisine, offering a fusion of traditional flavors with a modern twist. Enjoy fresh sushi, sashimi, and Korean specialties in a cozy, vibrant setting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/sushiwood/favicon-with-icon/favicon.ico"
        sizes="any"
      />
      <body className={`${inter.className} text-white bg-black`}>
        <LocationProvider>
          <Header />
          {children}
        </LocationProvider>
      </body>
    </html>
  );
}
