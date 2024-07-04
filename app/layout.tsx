import { Metadata } from 'next';
import { fraunces } from '@/components/ui/fonts';

import '@/styles/global.css';
import { ThemeProvider } from '@/components/theme-provider';

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
