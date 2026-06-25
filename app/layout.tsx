import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Transa TMS AI | Move Smarter. Deliver Better.',
  description: 'AI-powered freight operating system for brokers, carriers, dispatch, tracking, and back-office automation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
