import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DemoBanner from '@/components/ui/DemoBanner';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: '〇〇工務店 | 〇〇市の外壁塗装・屋根修理・リフォーム',
  description: '〇〇市で創業20年。地域密着、職人直営だからできる「適正価格」と「嘘のない施工」。お見積もり・点検無料。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* 
        Note: React 19 / Next 15 with Tailwind 4.
        Add font links here or in CSS.
      */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,300;1,400;1,600&family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Serif+JP:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans text-earth-900 bg-earth-100 antialiased pt-[76px] lg:pt-[84px] min-h-screen flex flex-col">
        <ScrollReveal />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <DemoBanner industry="建設・エクステリア業" />
        <Footer />
      </body>
    </html>
  );
}
