import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Hanken_Grotesk } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Metanoia — Daily Bible Verse',
  description: 'A quiet space for daily scripture reflection.',
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#001714',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${hanken.variable} bg-background text-on-background font-body antialiased relative min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
