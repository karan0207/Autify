import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import ModalProvider from '../providers/modal-provider';

const font = DM_Sans({ subsets: ["latin"] });



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
        <body className={font.className}>
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
