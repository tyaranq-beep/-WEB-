'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = '施工前',
    afterLabel = '施工後',
}: BeforeAfterSliderProps) {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        setSliderPos((x / rect.width) * 100);
    };

    const onMouseDown = () => setIsDragging(true);
    const onMouseMove = (e: React.MouseEvent) => {
        if (isDragging) handleMove(e.clientX);
    };
    const onTouchMove = (e: React.TouchEvent) => {
        handleMove(e.touches[0].clientX);
    };

    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleGlobalMouseUp);
        window.addEventListener('touchend', handleGlobalMouseUp);
        return () => {
            window.removeEventListener('mouseup', handleGlobalMouseUp);
            window.removeEventListener('touchend', handleGlobalMouseUp);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video md:aspect-[16/9] overflow-hidden border-4 border-earth-900 shadow-[12px_12px_0px_rgba(44,30,22,0.1)] cursor-col-resize select-none touch-pan-y"
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            onMouseDown={onMouseDown}
            onTouchStart={onMouseDown}
        >
            {/* 指摘8: touch-action-none (touch-pan-y) を追加してスクロール競合を排除 */}
            {/* 指摘7: next/image で LCP最適化 */}
            <Image
                src={afterImage}
                alt="施工後の様子"
                fill
                className="absolute inset-0 object-cover pointer-events-none"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 right-4 bg-earth-900 text-white px-3 py-1 text-sm font-bold z-10 shadow-md">
                {afterLabel}
            </div>

            <div
                className="absolute inset-0 h-full w-full pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
                <Image
                    src={beforeImage}
                    alt="施工前の様子"
                    fill
                    className="absolute inset-0 object-cover pointer-events-none"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority // Before画像はLCP対象になる可能性が高いため付与
                />
                <div className="absolute top-4 left-4 bg-copper text-white px-3 py-1 text-sm font-bold z-10 shadow-md whitespace-nowrap">
                    {beforeLabel}
                </div>
            </div>

            {/* スライダーハンドル */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20"
                style={{ left: `${sliderPos}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white border-4 border-earth-900 rounded-full flex items-center justify-center shadow-xl">
                    <div className="flex gap-1">
                        <div className="w-1 h-5 bg-earth-900 rounded-full" />
                        <div className="w-1 h-5 bg-earth-900 rounded-full" />
                    </div>
                </div>
            </div>
        </div >
    );
}
