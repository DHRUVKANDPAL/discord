import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";
import Head from "next/head";
const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord",
  description: "Discord like application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={cn(font.className,
          "bg-white dark:bg-[#313338]"
        )}>
        <SignedOut>
        </SignedOut>
        <SignedIn>
        </SignedIn>
        <ThemeProvider
         attribute="class"
         defaultTheme="dark"
         enableSystem={false}
         storage-key="discord-theme"
        >
        {children}
        </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
    
  );
}
