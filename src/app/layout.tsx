import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import PrelineScript from '@/components/PrelineScript';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home',
  description: 'Travel Booking - Home Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <PrelineScript />
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
