import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ibrahim Runmonkun - Fullstack Developer & IT Professional',
  description: 'Professional portfolio of Ibrahim Runmonkun, a fullstack developer and IT professional with 8+ years of experience in web development, graphic design, video editing, and IT services.',
  keywords: 'fullstack developer, web developer, Laravel, React, Next.js, graphic design, video editing, IT services, CCTV installation, remote work, Lagos Nigeria',
  authors: [{ name: 'Ibrahim Runmonkun' }],
  openGraph: {
    title: 'Ibrahim Runmonkun - Fullstack Developer & IT Professional',
    description: 'Professional portfolio showcasing 8+ years of experience in fullstack development, graphic design, video editing, and IT services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ibrahim Runmonkun - Fullstack Developer & IT Professional',
    description: 'Professional portfolio showcasing 8+ years of experience in fullstack development, graphic design, video editing, and IT services.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}