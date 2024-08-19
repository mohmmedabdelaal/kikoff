import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/share/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GoalStorm',
  description: 'GoalStorm is football live matches',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <main className="h-full relative flex flex-col">
            <Navbar />

            <section className="flex">
              <div className="w-full">{children}</div>
            </section>
            <div>
              <Footer />
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
