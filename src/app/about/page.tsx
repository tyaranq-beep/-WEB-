import RealImage from '@/components/ui/RealImage';
import { IMAGES } from '@/lib/constants';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '会社案内 | 〇〇工務店',
    description: '私たち〇〇工務店の代表挨拶、会社概要、およびアクセス情報です。地元密着で長年皆様の住環境をサポートしてまいりました。'
};

export default function AboutPage() {
    return (
        <div className="pt-12 pb-24 bg-white min-h-screen">
            <div className="bg-earth-100 border-y-4 border-earth-900 py-16 text-center px-6 mb-16 shadow-sm">
                <h1 className="text-4xl md:text-5xl font-serif font-black text-earth-900 mb-6 tracking-tight">
                    会社案内
                </h1>
                <p className="text-lg text-earth-800 font-bold max-w-3xl mx-auto leading-relaxed border-l-4 border-earth-900 bg-white p-4">
                    私たちのモットーは「お客様に嘘をつかないこと」。<br />
                    地元の皆様に寄り添う工務店として、顔の見える安心の施工をお届けします。
                </p>
            </div>

            <div className="max-w-4xl mx-auto px-6 space-y-20">

                {/* 代表挨拶 */}
                <section className="solid-card bg-white p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-earth-100 -mr-16 -mt-16 transform rotate-45 border-4 border-earth-900"></div>

                    <h2 className="text-3xl font-black text-earth-900 border-b-8 border-earth-900 inline-block pb-2 mb-10">
                        代表挨拶
                    </h2>

                    <div className="flex flex-col md:flex-row gap-10 items-start">
                        <div className="w-full md:w-1/3 shrink-0">
                            <div className="border-4 border-earth-900 bg-earth-100 p-2 transform -rotate-2 shadow-[8px_8px_0px_#2C1E16]">
                                <img src={IMAGES.HERO.CEO} alt="代表取締役 山田 太郎" className="w-full h-auto object-cover aspect-square grayscale-[30%]" />
                                <p className="text-center font-bold text-sm mt-3 pb-1 tracking-widest text-earth-900">代表取締役: 山田 太郎</p>
                            </div>
                        </div>

                        <div className="w-full md:w-2/3">
                            <h3 className="text-xl md:text-2xl font-black text-earth-900 mb-6 leading-relaxed bg-earth-100 p-4 border-l-8 border-forest-700">
                                「その家、まだ諦めないでください。」
                            </h3>
                            <p className="text-earth-900 font-bold leading-relaxed mb-6">
                                私たちは地域密着で、長年お客様の住環境をサポートしてまいりました。<br /><br />
                                適正な価格で、最良の品質を提供すること。そして何より「お客様に嘘をつかない」ことを信条としています。
                            </p>
                            <p className="text-earth-800 font-medium leading-relaxed">
                                大手メーカーにはできない細やかな気配りと、職人直営ならではの柔軟な対応力で、お客様の「こうしたい」を形にします。<br />
                                どんな小さな悩みでも、まずは私たちプロの目利きにご相談ください。
                            </p>
                        </div>
                    </div>
                </section>

                {/* 会社概要 */}
                <section className="solid-card bg-earth-100 p-8 md:p-12">
                    <h2 className="text-3xl font-black text-earth-900 border-b-8 border-earth-900 inline-block pb-2 mb-10">
                        会社概要
                    </h2>

                    <div className="bg-white border-4 border-earth-900 p-4">
                        <table className="w-full text-left font-bold">
                            <tbody>
                                <tr className="border-b-2 border-earth-100">
                                    <th className="py-4 px-4 bg-earth-100 w-1/3 text-earth-900">会社名</th>
                                    <td className="py-4 px-4 text-earth-900">〇〇工務店</td>
                                </tr>
                                <tr className="border-b-2 border-earth-100">
                                    <th className="py-4 px-4 bg-earth-100 text-earth-900">代表者</th>
                                    <td className="py-4 px-4 text-earth-900">山田 太郎</td>
                                </tr>
                                <tr className="border-b-2 border-earth-100">
                                    <th className="py-4 px-4 bg-earth-100 text-earth-900">設立</th>
                                    <td className="py-4 px-4 text-earth-900">2010年4月</td>
                                </tr>
                                <tr className="border-b-2 border-earth-100">
                                    <th className="py-4 px-4 bg-earth-100 text-earth-900">事業内容</th>
                                    <td className="py-4 px-4 text-earth-900 leading-relaxed">
                                        外壁塗装、屋根工事、水回りリフォーム、エクステリア工事全般
                                    </td>
                                </tr>
                                <tr className="border-b-2 border-earth-100">
                                    <th className="py-4 px-4 bg-earth-100 text-earth-900">所在地</th>
                                    <td className="py-4 px-4 text-earth-900">
                                        〒000-0000<br />〇〇県〇〇市〇〇町1-2-3
                                    </td>
                                </tr>
                                <tr>
                                    <th className="py-4 px-4 bg-earth-100 text-earth-900">資格・許認可</th>
                                    <td className="py-4 px-4 text-earth-900 leading-relaxed">
                                        <span className="block mb-1 border-b border-gray-300 pb-1">建設業許可 〇〇県知事（般-X）第XXXXX号</span>
                                        <span className="block mb-1 border-b border-gray-300 pb-1">一級塗装技能士</span>
                                        <span className="block">二級建築施工管理技士</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* コールトゥアクション */}
                <div className="text-center pt-8 border-t-4 border-earth-900">
                    <p className="text-earth-900 font-black text-xl mb-6">お住まいに関するお悩みは、お気軽にご相談ください。</p>
                    <Link href="/contact" className="inline-block bg-focus-red text-white text-xl font-black py-5 px-12 border-b-8 border-red-900 active:border-b-0 active:translate-y-2 transition-all">
                        無料お見積り・お問い合わせ
                    </Link>
                </div>
            </div>
        </div>
    );
}
