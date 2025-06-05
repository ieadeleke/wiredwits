import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Work_Sans } from "next/font/google";
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import RootLayoutClient from "@/components/client/RootLayout";
import Script from 'next/script';
import { GA_TRACKING_ID } from '@/lib/gtag';
import AnalyticsProvider from '@/app/providers';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Wired Wits",
  description: "Truth, clarity, and understanding — powered by AI.",
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${workSans.variable} ${inter.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <AnalyticsProvider>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
        </AnalyticsProvider>
      </body>
    </html >
  );
}
