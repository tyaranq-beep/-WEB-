import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-earth-900 text-white pt-16 pb-12 lg:pb-8 border-t-8 border-forest-700">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b-2 border-earth-800 pb-12">
                    {/* Logo & About */}
                    <div className="lg:col-span-2 text-center md:text-left text-white block pb-4 mb-4">
                        <h2 className="text-2xl font-serif font-black mb-4">〇〇工務店</h2>
                        <p className="text-earth-100 font-medium leading-relaxed max-w-md mx-auto md:mx-0">
                            地域密着で、外壁塗装・屋根修理・リフォームなど住まいのトラブルに幅広く対応。
                            「嘘をつかない適正価格」をモットーに、職人直営の安心施工をお届けします。
                        </p>
                    </div>

                    <div className="bg-white text-earth-900 p-6 solid-card col-span-2 lg:col-span-2 border-2 border-earth-900 border-b-4 border-l-4">
                        <h3 className="text-xl font-bold mb-4 border-b-2 border-earth-800 pb-2">お問い合わせ</h3>
                        <p className="text-forest-700 font-black text-3xl mb-2 flex items-center gap-2 lg:pointer-events-none lg:cursor-default">
                            <Phone className="w-7 h-7" /> 0120-XXX-XXX
                        </p>
                        <p className="text-sm font-bold text-earth-800 mb-6 leading-relaxed">
                            <span className="block xl:inline">営業時間：8:00〜19:00</span>
                            <span className="hidden xl:inline"> / </span>
                            <span className="block xl:inline">定休日：日曜日（※緊急時はお電話ください）</span>
                        </p>
                        <Link href="/contact" className="flex justify-center items-center gap-2 bg-forest-700 text-white font-bold py-3 border-b-4 border-forest-900 active:border-b-0 active:translate-y-1 transition-all">
                            <Mail className="w-5 h-5" /> 24時間受付中 無料見積りはこちら
                        </Link>
                    </div>
                </div>

                <div className="text-center text-earth-400 text-sm font-bold">
                    <p>&copy; {new Date().getFullYear()} 〇〇工務店 無断転載を禁じます。</p>
                </div>
            </div>
        </footer>
    );
}
