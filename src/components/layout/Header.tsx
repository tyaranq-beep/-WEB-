"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Menu, X, Mail } from 'lucide-react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { label: 'ホーム', href: '/' },
        { label: '事業内容', href: '/services' },
        { label: '施工事例・お客様の声', href: '/projects' },
        { label: '会社案内', href: '/about' },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-white border-b-4 border-earth-900 shadow-[0_4px_0_rgba(44,30,22,0.1)]">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
                {/* Logo Area */}
                <Link href="/" className="flex flex-col">
                    <span className="text-2xl font-serif font-black text-earth-900 tracking-tight">
                        〇〇工務店
                    </span>
                    <span className="text-xs font-bold text-earth-800 mt-1">
                        地域密着・〇〇市の住まいの相談窓口
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    <nav className="flex gap-6">
                        {navLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`text-sm font-bold transition-colors hover:text-earth-600 ${pathname === item.href ? 'text-earth-900 border-b-2 border-earth-900' : 'text-earth-800'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6 ml-4 border-l-2 border-earth-100 pl-6">
                        <div className="flex flex-col items-end">
                            <span className="text-xs font-bold text-earth-800 bg-earth-100 px-2 py-1 mb-1">お電話でのご相談</span>
                            <a href="tel:0120-XXX-XXX" className="text-xl font-black text-forest-700 flex items-center gap-2 lg:pointer-events-none lg:cursor-default">
                                <Phone className="w-5 h-5" />
                                0120-XXX-XXX
                            </a>
                        </div>
                        <Link
                            href="/contact"
                            className="bg-earth-900 text-white px-6 py-3 font-bold border-b-4 border-black active:border-b-0 active:translate-y-1 transition-all"
                        >
                            無料お見積り
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-earth-900 px-3 py-2 font-bold bg-earth-100 border-2 border-earth-900 flex items-center gap-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="メニュー"
                >
                    {isMobileMenuOpen ? (
                        <><X className="w-5 h-5" /> 閉じる</>
                    ) : (
                        <><Menu className="w-5 h-5" /> メニュー</>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden fixed top-[76px] left-0 w-full h-[calc(100vh-76px)] overflow-y-auto bg-white border-b-4 border-earth-900 py-4 px-6 flex flex-col gap-4 shadow-xl z-40 pb-20">
                    {navLinks.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-earth-900 text-lg font-bold py-3 border-b-2 border-earth-100"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <a
                        href="tel:0120-XXX-XXX"
                        className="flex items-center justify-center gap-2 w-full py-4 mt-4 bg-earth-100 text-forest-700 font-black border-2 border-forest-700"
                    >
                        <Phone className="w-5 h-5" /> 0120-XXX-XXX に電話する
                    </a>
                    <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-earth-900 text-white font-bold text-center border-b-4 border-black active:border-b-0 active:translate-y-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <Mail className="w-5 h-5" /> 無料お見積り・ご相談
                    </Link>
                </div>
            )}
        </header>
    );
}
