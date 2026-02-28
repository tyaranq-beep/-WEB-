'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        // DOMの描画を待機するための遅延
        const timeout = setTimeout(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.12,
                    rootMargin: '0px 0px -40px 0px',
                }
            );

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach((el) => {
                // すでに is-visible がついている場合は監視から外す（二重登録防止）
                if (!el.classList.contains('is-visible')) {
                    observer.observe(el);
                }
            });

            return () => observer.disconnect();
        }, 100);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return null;
}
