import './globals.css';
import { Inter } from 'next/font/google';
import Header from './header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Random Quote Generator',
  description: 'Powered By Vercel and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <Header />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
