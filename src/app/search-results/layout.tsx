import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Results Page',
  description: 'Travel Booking - Search Results Page',
};

export default function SearchResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
