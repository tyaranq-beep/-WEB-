import { IMAGES } from '@/lib/constants';
import TrustBadges from '@/components/sections/TrustBadges';
import BeforeAfter from '@/components/sections/BeforeAfter';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex items-center min-h-[85vh] border-b-8 border-earth-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={IMAGES.HERO.MAIN} alt="施工風景" className="w-full h-full object-cover grayscale-[20%]" />
          <div className="absolute inset-0 bg-earth-900/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 w-full mt-12">
          <div className="bg-white/95 p-8 md:p-12 border-4 border-earth-900 shadow-[12px_12px_0px_#2C1E16] max-w-3xl">
            <span className="inline-block bg-earth-900 text-white font-bold px-4 py-1 mb-6 text-sm">
              地域密着・〇〇市周辺で選ばれて20年
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-black text-earth-900 leading-tight mb-8">
              あなたの「住まい」を、<br />
              一番近くで守る<br />
              町の工務店です。
            </h1>
            <p className="text-lg md:text-xl text-earth-800 font-bold mb-8 leading-relaxed border-l-4 border-forest-700 pl-4 bg-earth-100/50 py-2">
              外壁塗装から小さな修理まで、どんな小さな悩みでもご相談ください。<br />
              「嘘をつかない適正価格」と「職人直営の丁寧な仕事」で、顔の見える安心の施工をお届けします。
            </p>

            {/* Trust Badges directly in Hero for immediate authority */}
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="bg-earth-100 text-earth-900 border-2 border-earth-900 px-4 py-2 font-black text-sm">✓ 建設業許可 第XXXXX号</span>
              <span className="bg-earth-100 text-earth-900 border-2 border-earth-900 px-4 py-2 font-black text-sm">✓ 一級塗装技能士在籍</span>
              <span className="bg-earth-100 text-earth-900 border-2 border-earth-900 px-4 py-2 font-black text-sm">✓ 最短即日対応</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="block text-center flex-1 bg-focus-red text-white text-xl font-black py-5 px-8 border-b-8 border-red-900 active:border-b-0 active:translate-y-2 transition-all">
                無料でお見積り・ご相談
              </Link>
              <a href="tel:0120-XXX-XXX" className="block text-center bg-forest-700 text-white text-xl font-black py-5 px-8 border-b-8 border-forest-900 active:border-b-0 active:translate-y-2 transition-all">
                📞 まずは電話する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 権威性セクション */}
      <TrustBadges />

      {/* 緊急対応用バナー */}
      <section className="py-8 bg-earth-900 text-white text-center px-6 border-b-4 border-earth-800">
        <h2 className="text-2xl font-black mb-2">🚨 お急ぎの方へ</h2>
        <p className="font-bold">「雨漏りしている」「台風で屋根が飛んだ」など、緊急のトラブルにも最短即日で駆けつけます。</p>
      </section>

      {/* 比較画像セクション */}
      <BeforeAfter />
    </>
  );
}
