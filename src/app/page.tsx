import { IMAGES } from '@/lib/constants';
import TrustBadges from '@/components/sections/TrustBadges';
import Link from 'next/link';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import StickyBottomBar from '@/components/ui/StickyBottomBar';
import Image from 'next/image';
import { ShieldCheck, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-12">
      {/* Bento UI Hero Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[80vh]">

        {/* Main Title Card (7 cols) */}
        <div className="md:col-span-7 bg-white border-8 border-earth-900 p-8 md:p-16 flex flex-col justify-center shadow-[16px_16px_0px_#2C1E16] reveal-on-scroll">
          <span className="inline-block bg-earth-900 text-white font-bold px-5 py-2 mb-8 text-sm tracking-[0.2em] w-fit shadow-sm">
            創業 2006年
          </span>
          {/* 指摘2: 行間を緩和し、漢字の詰まりを解消する tracking-wide / leading-snug */}
          <h1 className="text-4xl md:text-7xl font-serif font-black text-earth-900 leading-snug tracking-wide mb-8">
            嘘のない施工。<br />
            <span className="text-copper font-serif text-3xl md:text-5xl lg:text-5xl block mt-2 mb-4 leading-normal tracking-wide">妥協なき職人技</span>
            地域に根差す<br />
            町の工務店。
          </h1>
          {/* 指摘2: ゆったりとした行間で高級感を演出 */}
          <p className="text-lg md:text-xl text-earth-800 font-bold mb-10 leading-loose max-w-2xl">
            「顔の見える安心」を大切に。<br />
            細部まで妥協しない職人直営の施工で、<br className="hidden md:block" />
            あなたの住まいを一生涯守り続けます。
          </p>

          <div className="flex flex-col items-start gap-4">
            {/* 指摘1: 赤色を廃止し、重厚感のある漆黒 (bg-stone-900) へ変更 */}
            <Link href="/contact" className="group relative bg-stone-900 text-white text-lg md:text-xl font-black py-5 px-10 border-b-8 border-stone-950 active:border-b-0 active:translate-y-2 transition-all text-center flex items-center gap-3">
              無料お見積もりを依頼する
            </Link>
            {/* 指摘4, 9: 安心感を与えるマイクロコピーの追加 */}
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2 text-earth-700 text-sm md:text-base font-bold">
                <ShieldCheck className="w-5 h-5 text-copper shrink-0" />
                <span>相見積もり歓迎・しつこい営業は一切いたしません</span>
              </div>
              <div className="flex items-center gap-2 text-earth-700 text-sm md:text-base font-bold">
                <MapPin className="w-5 h-5 text-copper shrink-0" />
                <span>対応エリア：〇〇市を中心に県内全域対応</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Image Card (5 cols) */}
        <div className="md:col-span-5 relative overflow-hidden border-8 border-earth-900 shadow-[16px_16px_0px_rgba(44,30,22,0.1)] reveal-on-scroll reveal-delay-100 min-h-[400px]">
          {/* 指摘7: <img> を <Image> に変更、LCP最適化 (priority) */}
          <Image
            src={IMAGES.HERO.MAIN}
            alt="自社職人による丁寧な外壁塗装施工"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover grayscale-[30%] hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-earth-900/20 mix-blend-multiply" />
        </div>

        {/* Stats Grid (5 cols) */}
        <div className="md:col-span-5 grid grid-cols-2 gap-6">
          <div className="bg-earth-900 text-white p-8 flex flex-col justify-center items-center text-center border-4 border-earth-900 reveal-on-scroll reveal-delay-200">
            <span className="text-4xl md:text-5xl font-black mb-2">20+</span>
            <span className="text-sm tracking-widest font-bold opacity-70">年の実績</span>
          </div>
          <div className="bg-white border-4 border-earth-900 p-8 flex flex-col justify-center items-center text-center reveal-on-scroll reveal-delay-300">
            <span className="text-4xl md:text-5xl font-black text-earth-900 mb-2">1,500+</span>
            <span className="text-sm tracking-widest font-bold text-earth-600">施工実績</span>
          </div>
        </div>

        {/* Secondary Message (7 cols) */}
        <div className="md:col-span-7 bg-earth-100 border-4 border-earth-900 p-8 md:p-12 flex items-center gap-8 reveal-on-scroll reveal-delay-400">
          <div className="hidden sm:block w-32 h-32 relative border-4 border-earth-900 p-2 shrink-0 bg-white">
            <div className="w-full h-full bg-earth-200 relative overflow-hidden">
              <Image src={IMAGES.ABOUT.WORKER} alt="職人の顔" fill sizes="128px" className="object-cover grayscale" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-black mb-4 tracking-wide text-earth-900">「安さ」ではなく「安心」を売る。</h3>
            {/* シニア層配慮: text-sm を廃止し text-base へ */}
            <p className="text-base font-bold text-earth-700 leading-loose">
              私たちは大きな広告は出しません。その分、施工品質にコストをかけ、職人が一軒一軒、自分の家を建てる気持ちで真摯に向き合います。
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-24 reveal-on-scroll">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-copper font-serif font-bold text-2xl lg:text-3xl mb-4">信頼と品質</span>
          <h2 className="text-3xl md:text-5xl font-black text-earth-900 tracking-wider">私たちが選ばれる理由</h2>
        </div>
        <TrustBadges />
      </section>

      {/* Interactive Before/After Section */}
      <section className="py-24 border-t-8 border-earth-900 reveal-on-scroll">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-5">
            <span className="bg-stone-900 text-white px-5 py-2 font-bold text-sm mb-6 inline-block tracking-widest shadow-sm">施工事例</span>
            <h2 className="text-4xl md:text-6xl font-black text-earth-900 mb-8 leading-snug tracking-wide">
              劇的な変化を、<br />
              その目で確かめる。
            </h2>
            <p className="text-base md:text-lg font-bold text-earth-800 leading-loose mb-10">
              外壁塗装でお住まいの印象はここまで変わります。単なる塗り替えではなく、耐久性と美観を追求した職人技の結晶をご覧ください。
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              {/* 指摘5: シニア層視点 - 小さすぎる text-xs を text-sm に、text-sm を text-base に引き上げ */}
              <div className="flex-1 border-l-4 border-copper pl-5">
                <span className="block text-sm font-black text-earth-600 mb-1">施工エリア</span>
                <span className="text-base font-black text-earth-900">〇〇市 〇〇様邸</span>
              </div>
              <div className="flex-1 border-l-4 border-copper pl-5">
                <span className="block text-sm font-black text-earth-600 mb-1">施工内容</span>
                <span className="text-base font-black text-earth-900">外壁・屋根塗装</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            {/* 指摘7, 8修正済みのコンポーネント */}
            <BeforeAfterSlider
              beforeImage={IMAGES.BEFORE_AFTER.BEFORE_1}
              afterImage={IMAGES.BEFORE_AFTER.AFTER_1}
            />
          </div>
        </div>
      </section>

      {/* 新規実装: スマホ時の絶対的コンバージョン導線 */}
      <StickyBottomBar />
    </div>
  );
}
