import React from 'react';

const TrustBadges = () => {
    return (
        <section className="py-16 bg-white border-y-4 border-earth-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-black text-earth-900 border-b-4 border-earth-900 inline-block pb-2">
                        安心と信頼の証
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: '一級建築施工管理技士',
                            desc: '国家資格を持ったプロフェッショナルが、施工の品質を徹底管理します。'
                        },
                        {
                            title: '建設業許可 第XXXXX号',
                            desc: '〇〇県知事認可。厳しい審査をクリアした正規の建設事業者です。'
                        },
                        {
                            title: '地域密着 創業20年',
                            desc: '逃げも隠れもしません。地元で長く愛される「顔の見える」工務店です。'
                        }
                    ].map((badge, i) => (
                        <div key={i} className="solid-card p-8 text-center flex flex-col items-center">
                            {/* solid-card is defined in globals.css */}
                            <div className="w-16 h-16 bg-earth-900 text-white rounded-sm flex items-center justify-center font-black text-2xl mb-6 shadow-[4px_4px_0px_#C29A74]">
                                {i + 1}
                            </div>
                            <h3 className="text-xl font-bold text-earth-900 mb-4">{badge.title}</h3>
                            <p className="text-earth-800 font-medium leading-relaxed">{badge.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
