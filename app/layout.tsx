"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import "./styles.css";

// ========================
// Config fontes
// ========================
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ========================
// Meta infos
// ========================
export const metadata: Metadata = {
  title: "Trabalho Amazon",
  description: "Portal de acompanhamento do Trabalho Amazon, com informações.",
};

// ========================
// Dispara PageView só em trocas de rota
// ========================
declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

function MetaPixelPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.fbq !== "undefined") {
      // 🔥 Dispara apenas PageView (sem reinit)
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}

// ========================
// RootLayout
// ========================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '804164179222567'); 
              fbq('track', 'PageView'); // só 1x no load inicial
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=804164179222567&ev=PageView&noscript=1"
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* Dispara PageView em trocas de rota (SPA) */}
        <MetaPixelPageView />
      </body>
    </html>
  );
}
