import type { Metadata } from "next";
import { Lora, Pacifico } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/sidebar";
import Header from "@/components/header";
import { fetchAvailableCountries, fetchAvailableLanguages } from "@/utils/api";
import { RadioPlayerProvider } from "@/components/radioPlayer/useRadioPlayer";
import RadioPlayer from "@/components/radioPlayer";
import { SidebarProvider } from "@/components/sidebar/sidebarContext";
import { FavoritesProvider } from "./favorites/components/FavoritesTable/FavoritesContext";
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
})
const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Radio Vibe",
  description: "A rádio que toca o que você gosta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const availableCountries = fetchAvailableCountries()
  const availableLanguages = fetchAvailableLanguages()
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${pacifico.variable} antialiased`}
      >
        <SidebarProvider>
          <FavoritesProvider>
            <RadioPlayerProvider>
              <div className="flex h-screen">
                <SideBar />
                <div className="flex-1 h-full overflow-scroll">
                  <Header availableCountries={availableCountries} availableLanguages={availableLanguages} />
                  {children}
                </div>
                <RadioPlayer />
              </div>
            </RadioPlayerProvider>
          </FavoritesProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
