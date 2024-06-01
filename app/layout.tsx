import '@/styles/global.css';
import { fraunces } from '@/components/ui/fonts';

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
