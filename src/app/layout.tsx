import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import '../styles/globals.css';

import ClientLayout from './ClientLayout'; // Import the new client layout

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Contest Dashboard',
  description: 'Welcome to the Contest Dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout> {/* Use the client layout */}
      </body>
    </html>
  );
}
