import type { Metadata } from 'next';
import { Source_Sans_3 as FontSans } from 'next/font/google';
import './globals.css';

const fontSans = FontSans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title:
    'Summo – AI PDF Summarizer | Instantly Extract Key Points from Any Document',
  description:
    'Summo is a smart AI-powered PDF summarizer that turns long documents into clear, concise summaries in seconds. Save time, boost productivity, and get the gist instantly. Try Smmo for free.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${fontSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
