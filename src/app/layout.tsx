import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "LoBot LLC — AI-native business & logistics solutions",
    template: "%s | LoBot LLC",
  },
  description:
    "LoBot LLC is an AI-native startup that creates business solutions enabling large enterprises to make future-ready strategic decisions.",
  icons: { icon: "/favicon.svg" },
};

// Applies the saved/system theme before paint to avoid a flash of the wrong theme.
const themeScript = `(function(){try{var p=localStorage.getItem('lobot-theme')||'system';var d=p==='dark'||(p==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');var l=localStorage.getItem('lobot-lang');if(l)document.documentElement.lang=l;}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
