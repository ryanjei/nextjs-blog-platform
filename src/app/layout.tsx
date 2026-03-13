import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DEGO`S BLOG.',
  description: 'Next.jsの学習のため始めた私のブログでさぁ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
