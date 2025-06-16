import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Assess.ng - The Smarter Way to Find, Hire & Retain Top Talent',
  description: 'Revolutionary assessment platform that helps you simplify talent acquisition, retention and management. Reduce recruitment time by 60% with AI-powered assessments.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}