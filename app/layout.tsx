import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Inter, Space_Grotesk } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "DevFlow is a platform for developers to share their knowledge and experience.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">  
    <body className={`${inter.variable} ${spaceGrotesk.variable} `}>

      <ClerkProvider appearance={{
        elements: {
          formButtonPrimary: "primary-gradient",
          footerActionLink: " primary-text-gradient hover:text-primary-500",
        },
      }}>

        <ThemeProvider>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          
          {children}

        </ThemeProvider>
      </ClerkProvider> 
       </body>
    </html>
  );
}
