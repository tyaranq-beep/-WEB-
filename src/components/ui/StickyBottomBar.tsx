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
            className={`fixed bottom-0 left-0 w-full z-50 md:hidden flex shadow-[0_-8px_30px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            <a
                href="tel:0120-000-000"
                className="flex-1 bg-stone-900 text-white flex flex-col items-center justify-center py-4 border-r border-stone-700 active:bg-stone-800 transition-colors"
            >
                <Phone className="w-6 h-6 mb-1 text-copper" />
                <span className="text-[11px] tracking-widest font-bold">電話ご相談</span>
            </a>
            <Link
                href="/contact"
                className="flex-1 bg-copper text-white flex flex-col items-center justify-center py-4 active:bg-[#a36528] transition-colors"
            >
                <Mail className="w-6 h-6 mb-1 text-white" />
                <span className="text-[11px] tracking-widest font-bold">無料お見積り</span>
            </Link>
        </div>
    );
}
