import { getServicesFromNotion } from '@/lib/notion';
import RealImage from '@/components/ui/RealImage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '事業内容・お悩み解決 | 〇〇工務店',
    description: '外壁塗装、屋根修理、雨漏り対策など、〇〇工務店の事業内容を紹介します。現場のリアルな比較画像で私たちの確実な施工をご覧ください。'
};

export default async function ServicesPage() {
    // Notion モックからデータ取得 (Server Component)
    const services = await getServicesFromNotion();

    return (
        <div className="pt-12 pb-24 bg-earth-100 min-h-screen">
            <div className="bg-white border-y-4 border-earth-900 py-16 text-center px-6 mb-16 shadow-sm">
                <h1 className="text-4xl md:text-5xl font-serif font-black text-earth-900 mb-6 tracking-tight">
                    事業内容・お悩み解決
                </h1>
                <p className="text-lg text-earth-800 font-bold max-w-3xl mx-auto leading-relaxed">
                    専門用語や綺麗なイラストは使いません。実際の現場で起きている「リアルな劣化」と「私たちの確実な施工結果」をご覧ください。<br />
                    どんな小さな工事でもお引き受けします。
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 space-y-16">
                {services.map((service, idx) => (
                    <div key={service.id} className="solid-card bg-white p-6 md:p-10">
                        <h2 className="text-3xl font-black text-earth-900 mb-8 pb-4 border-b-8 border-earth-900 flex items-center gap-4">
                            <span className="bg-earth-900 text-white px-4 py-2 text-2xl">0{idx + 1}</span>
                            {service.title}
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            {/* アイコンの代わりにBefore/Afterのリアル画像を配置 */}
                            <div>
                                <div className="bg-gray-800 text-white font-bold px-4 py-2 inline-block mb-2 text-sm border-l-4 border-black">
                                    Before: 放置すると危険な状態
                                </div>
                                <div className="border-4 border-gray-400">
                                    <RealImage src={service.beforeImageUrl} alt={`${service.title} 施工前`} isMock />
                                </div>
                            </div>
                            <div>
                                <div className="bg-forest-700 text-white font-bold px-4 py-2 inline-block mb-2 text-sm border-l-4 border-forest-900">
                                    After: 私たちの施工後
                                </div>
                                <div className="border-4 border-forest-700">
                                    <RealImage src={service.afterImageUrl} alt={`${service.title} 施工後`} isMock />
                                </div>
                            </div>
                        </div>

                        <div className="bg-earth-100 border-4 border-earth-900 p-6 md:p-8">
                            <div className="mb-8">
                                <h3 className="text-earth-900 font-black mb-3 text-lg flex items-center gap-2">
                                    <span className="text-forest-700 text-2xl">▼</span>
                                    お客様からよく頂くお悩み
                                </h3>
                                <p className="text-earth-900 font-bold text-lg bg-white p-4 border-2 border-earth-400">
                                    {service.problem}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-earth-900 font-black mb-3 text-lg flex items-center gap-2">
                                    <span className="text-focus-red text-2xl">▼</span>
                                    〇〇工務店の解決策
                                </h3>
                                <p className="text-earth-900 leading-relaxed font-bold bg-white p-4 border-2 border-earth-900">
                                    {service.solution}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
