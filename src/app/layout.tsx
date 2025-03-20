import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
// import { ThemeProvider } from "@/providers/theme-provider";
import {ThemeProvider} from "../providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from '../providers/modal-provider';
import { Baloo_Bhai_2, Baloo_Bhaijaan_2} from 'next/font/google';

const font = DM_Sans({ subsets: ["latin"] });
const newFont = Baloo_Bhai_2({ subsets: ["latin"], weight: ["400", "700"] });
const ballo = Baloo_Bhaijaan_2({ subsets: ["latin"], weight: ["400", "700"] });



export const metadata: Metadata = {
  title: "Autify",
  description: "Automate business with autify",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={ballo.className}>
          <ThemeProvider
           attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>
            {children}
            </ModalProvider>
           
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
