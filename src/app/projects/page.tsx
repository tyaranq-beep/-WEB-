import { getProjectsFromNotion } from '@/lib/notion';
import RealImage from '@/components/ui/RealImage';
import TrustBadges from '@/components/sections/TrustBadges';
import { MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '施工事例・お客様の声 | 〇〇工務店',
    description: '〇〇工務店が手掛けた実際の施工事例と、お客様からの直筆アンケート・声を掲載しています。'
};

export default async function ProjectsPage() {
    const projects = await getProjectsFromNotion();

    return (
        <div className="pt-12 pb-24 bg-earth-100 min-h-screen">
            <div className="bg-white border-y-4 border-earth-900 py-16 text-center px-6 mb-16 shadow-sm">
                <h1 className="text-4xl md:text-5xl font-serif font-black text-earth-900 mb-6 tracking-tight">
                    施工事例・お客様の声
                </h1>
                <p className="text-lg text-earth-800 font-bold max-w-3xl mx-auto leading-relaxed">
                    私たちが日々現場で流した汗の結晶です。<br />
                    すべて地元のお客様から頂いた大切な実績と「生の声」をご紹介します。
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-6 mb-20">
                <div className="grid lg:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <div key={project.id} className="solid-card bg-white flex flex-col">
                            <div className="grid grid-cols-2">
                                <div className="relative border-r-4 border-earth-900 border-b-4 h-[200px] sm:h-[250px]">
                                    <span className="absolute top-0 left-0 bg-gray-800 text-white text-xs font-bold px-3 py-1 z-10">施工前</span>
                                    <div className="absolute inset-0">
                                        <RealImage src={project.beforeImageUrl} alt="施工前" isMock />
                                    </div>
                                </div>
                                <div className="relative border-b-4 border-earth-900 h-[200px] sm:h-[250px]">
                                    <span className="absolute top-0 left-0 bg-forest-700 text-white text-xs font-bold px-3 py-1 z-10">施工後</span>
                                    <div className="absolute inset-0">
                                        <RealImage src={project.afterImageUrl} alt="施工後" isMock />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 md:p-8 flex-1 flex flex-col">
                                <h2 className="text-2xl font-black text-earth-900 mb-4">{project.title}</h2>
                                <div className="mb-6 flex-1">
                                    <span className="inline-block bg-earth-900 text-white font-bold px-3 py-1 text-sm mb-2">工事のポイント</span>
                                    <p className="text-earth-900 font-bold leading-relaxed">{project.description}</p>
                                </div>

                                <div className="bg-earth-100 p-5 border-l-8 border-focus-red">
                                    <span className="text-earth-900 font-black text-sm mb-2 tracking-widest border-b-2 border-earth-400 pb-1 flex items-center gap-2">
                                        <MessageCircle className="w-4 h-4" /> お客様の声
                                    </span>
                                    <p className="text-earth-900 font-bold text-lg leading-relaxed">{project.customerVoice}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <TrustBadges />
        </div>
    );
}
