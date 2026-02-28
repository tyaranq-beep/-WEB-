/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface RealImageProps {
    src: string;
    alt: string;
    isMock?: boolean;
}

export default function RealImage({ src, alt, isMock = true }: RealImageProps) {
    return (
        <div className="relative border-4 border-earth-900 overflow-hidden bg-earth-100 aspect-video sm:aspect-[4/3] w-full group">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {isMock && (
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] sm:text-xs font-black px-2 py-1 shadow-md border border-white/20">
                    ※画像はイメージです
                </div>
            )}
        </div>
    );
}
