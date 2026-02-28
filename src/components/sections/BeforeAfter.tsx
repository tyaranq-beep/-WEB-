import React from 'react';
import RealImage from '../ui/RealImage';
import { IMAGES } from '@/lib/constants';
import Link from 'next/link';

const BeforeAfter = () => {
    return (
        <section className="py-24 bg-white border-b-4 border-earth-900">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-forest-700 font-black tracking-widest text-sm mb-2 block border-4 border-forest-700 bg-earth-100 inline-block px-4 py-1">BEFORE & AFTER</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-earth-900 font-black mt-4 border-b-8 border-forest-700 inline-block pb-2">
                        ごまかしのきかない「結果」
                    </h2>
                    <p className="mt-8 text-earth-800 max-w-2xl mx-auto font-bold text-lg">
                        私たちの答えはすべて現場にあります。
                        一切の妥協を許さない、職人の本気の仕事をご覧ください。
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Example 1 */}
                    <div className="solid-card bg-earth-100 p-6">
                        <h3 className="text-2xl font-black text-earth-900 mb-6 pb-2 border-b-4 border-earth-900">
                            外壁塗装・ひび割れ補修
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative border-4 border-gray-400">
                                <span className="absolute top-0 left-0 bg-gray-800 text-white font-bold px-3 py-1 z-10">施工前</span>
                                <RealImage src={IMAGES.PROJECTS.WALL_BEFORE} alt="外壁 施工前" isMock />
                            </div>
                            <div className="relative border-4 border-forest-700">
                                <span className="absolute top-0 left-0 bg-forest-700 text-white font-bold px-3 py-1 z-10">施工後</span>
                                <RealImage src={IMAGES.PROJECTS.WALL_AFTER} alt="外壁 施工後" isMock />
                            </div>
                        </div>
                        <p className="mt-6 text-earth-900 font-bold leading-relaxed bg-white border-2 border-earth-900 p-4">
                            【課題】細かなひび割れ（クラック）からの雨水浸入が懸念される状態。<br />
                            【解決】高圧洗浄後、ひび割れを専用シーリング材で完全に埋め、高耐久のフッ素塗料で3回塗りを実施。
                        </p>
                    </div>

                    {/* Example 2 */}
                    <div className="solid-card bg-earth-100 p-6">
                        <h3 className="text-2xl font-black text-earth-900 mb-6 pb-2 border-b-4 border-earth-900">
                            屋根・金属部分のサビ修繕
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative border-4 border-gray-400">
                                <span className="absolute top-0 left-0 bg-gray-800 text-white font-bold px-3 py-1 z-10">施工前</span>
                                <RealImage src={IMAGES.SERVICES.ROOF_BEFORE} alt="屋根 施工前" isMock />
                            </div>
                            <div className="relative border-4 border-forest-700">
                                <span className="absolute top-0 left-0 bg-forest-700 text-white font-bold px-3 py-1 z-10">施工後</span>
                                <RealImage src={IMAGES.SERVICES.ROOF_AFTER} alt="屋根 施工後" isMock />
                            </div>
                        </div>
                        <p className="mt-6 text-earth-900 font-bold leading-relaxed bg-white border-2 border-earth-900 p-4">
                            【課題】金属屋根の経年劣化による激しい赤サビの発生。<br />
                            【解決】グラインダー等で手作業によりサビを限界まで落とし（ケレン作業）、強力なサビ止め塗料を下塗りした上で仕上げ塗装。
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <Link
                        href="/projects"
                        className="inline-block bg-earth-900 text-white font-black text-xl px-12 py-5 border-b-8 border-black active:border-b-0 active:translate-y-2 transition-all"
                    >
                        その他の施工事例を見る →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BeforeAfter;
