import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/footer';

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
      <body className={inter.className}>
        <Header />
        <section className="mx-[132px] my-10">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
