'use client';

import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function StickyBottomBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // 最初のセクション（ファーストビュー）を過ぎたら表示
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 w-full z-50 md:hidden flex shadow-[0_-8px_30px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-in-out pb-safe ${isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            <a
                href="tel:0120-XXX-XXX"
                className="flex-[0.8] bg-stone-900 text-white flex flex-col items-center justify-center py-3 border-r border-stone-700 active:bg-stone-800 transition-colors"
            >
                <div className="bg-stone-800 text-[9px] px-2 py-0.5 rounded-sm text-stone-300 mb-1 font-bold">お急ぎの方</div>
                <div className="flex items-center gap-1.5">
                    <Phone className="w-5 h-5 text-copper gap-0" />
                    <span className="text-sm font-black">電話相談</span>
                </div>
            </a>
            <Link
                href="/contact"
                className="flex-[1.2] bg-copper text-white flex flex-col items-center justify-center py-3 active:bg-[#a36528] transition-colors relative overflow-hidden"
            >
                <div className="text-[9px] font-bold tracking-wider mb-0.5 opacity-90">24時間受付・相談無料</div>
                <div className="flex items-center gap-1.5">
                    <Mail className="w-5 h-5" />
                    <span className="text-base font-black tracking-wide">WEBお見積り</span>
                </div>
            </Link>
        </div>
    );
}
