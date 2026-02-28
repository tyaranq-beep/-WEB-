"use client";
import React, { useState, useEffect } from 'react';

export default function DemoBanner({ industry }: { industry: string }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible || isClosed) return null;

    return (
        <div className="fixed bottom-4 right-4 left-4 md:left-auto md:w-full md:max-w-[420px] z-[100] animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-200 rounded-2xl p-5 pr-12 relative overflow-hidden">
                <button
                    onClick={() => setIsClosed(true)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-full p-1.5 transition-colors"
                    aria-label="閉じる"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
                <div className="flex gap-4">
                    <div className="mt-1 shrink-0 text-amber-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-2 text-sm leading-tight">
                            ※こちらは{industry}向けのデモサイトです
                        </h4>
                        <div className="text-xs text-gray-600 space-y-2 leading-relaxed font-medium">
                            <p>現在のデザインや構成はベースの一例です。実際の制作では、企業様のブランドイメージに合わせて<strong>フルカスタマイズ</strong>でご提供いたします。</p>
                            <p>また、<strong>LINE連携</strong>や<strong>Notionを用いた独自の自動更新システム</strong>など、業務効率化・コスト削減のための高度な機能追加にも柔軟に対応しております。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
