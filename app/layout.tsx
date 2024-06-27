import '@/styles/global.css';
import { fraunces } from '@/components/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Acme',
  description:
    'An example app built using Next.js, Auth.js, Stripe, shadcn/ui and Fraunces typeface family.',
  metadataBase: new URL('https://acme-seven-tau.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fraunces.className} antialiased`}>{children}</body>
    </html>
  );
}
