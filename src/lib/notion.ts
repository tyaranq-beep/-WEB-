import { Client } from '@notionhq/client';
import { IMAGES } from './constants';

export type ServiceData = {
    id: string; // Notion page ID
    title: string;
    problem: string;
    solution: string;
    beforeImageUrl: string;
    afterImageUrl: string;
    lastUpdated?: string; // e.g. "2024-03-01T10:00:00Z"
    isActive?: boolean;
};

export type ProjectData = {
    id: string; // Notion page ID
    title: string;
    description: string;
    customerVoice: string;
    beforeImageUrl: string;
    afterImageUrl: string;
    completionDate?: string; // e.g. "2024-02-15"
    locationArea?: string; // e.g. "〇〇市"
    constructionCost?: number; // Optional: 費用
};

// ==========================================
// API Initialize (Conditional)
// ==========================================
const notionToken = process.env.NOTION_API_KEY;
const notion = notionToken ? new Client({ auth: notionToken }) : null;
const isMockMode = !notionToken;

export async function getServicesFromNotion(): Promise<ServiceData[]> {
    if (isMockMode) {
        console.log("Mock Mode Active: Returning simulated SERVICES data");
        // モックデータ返却（実際はLINE→Notionに蓄積されたDBを叩く）
        return [
            {
                id: '1',
                title: '外壁・屋根塗装',
                problem: '「手で触ると白い粉がつく（チョーキング）」',
                solution: '単に色を塗るだけでなく、下地処理（高圧洗浄・ひび割れ補修）から徹底的に行い、家を長持ちさせる塗装を行います。',
                beforeImageUrl: IMAGES.SERVICES.ROOF_BEFORE, // public/images配置 または URL
                afterImageUrl: IMAGES.SERVICES.ROOF_AFTER
            },
            {
                id: '2',
                title: '防水・雨漏り工事',
                problem: '「天井にシミができている」「ベランダの水はけが悪い」',
                solution: '雨漏りは家の天敵です。原因箇所を徹底的に特定し、確実な防水処理を施します。緊急の応急処置にも対応可能です。',
                beforeImageUrl: IMAGES.PROJECTS.WALL_BEFORE,
                afterImageUrl: IMAGES.PROJECTS.WALL_AFTER
            }
        ];
    }

    try {
        console.log("Live Mode Active: Fetching SERVICES from Notion API");
        const dbId = process.env.NOTION_SERVICES_DB_ID!;
        const response = await notion!.dataSources.query({
            data_source_id: dbId,
            filter: { property: 'isActive', checkbox: { equals: true } }
        });

        // Map Notion properties to ServiceData interface
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return response.results.map((page: any) => ({
            id: page.id,
            title: page.properties.Title?.title[0]?.plain_text || '未設定',
            problem: page.properties.Problem?.rich_text[0]?.plain_text || '',
            solution: page.properties.Solution?.rich_text[0]?.plain_text || '',
            beforeImageUrl: page.properties.BeforeImage?.files[0]?.file?.url || IMAGES.SERVICES.ROOF_BEFORE,
            afterImageUrl: page.properties.AfterImage?.files[0]?.file?.url || IMAGES.SERVICES.ROOF_AFTER,
            isActive: page.properties.isActive?.checkbox,
        }));
    } catch (e) {
        console.error("Failed to fetch Services from Notion", e);
        return [];
    }
}

export async function getProjectsFromNotion(): Promise<ProjectData[]> {
    if (isMockMode) {
        console.log("Mock Mode Active: Returning simulated PROJECTS data");
        return [
            {
                id: 'p1',
                title: '〇〇市 Y様邸 外壁・屋根塗装工事',
                description: '築15年で初めての塗り替え。チョーキングとコケが目立っていたため、フッ素塗料で高耐久に仕上げました。',
                customerVoice: '「職人さんの挨拶が気持ちよく、毎日の作業報告のLINEも安心できました。新築みたいになって嬉しいです。」',
                beforeImageUrl: IMAGES.PROJECTS.WALL_BEFORE,
                afterImageUrl: IMAGES.PROJECTS.WALL_AFTER
            }
        ];
    }

    try {
        console.log("Live Mode Active: Fetching PROJECTS from Notion API");
        const dbId = process.env.NOTION_PROJECTS_DB_ID!;
        const response = await notion!.dataSources.query({
            data_source_id: dbId,
            sorts: [{ property: 'completionDate', direction: 'descending' }]
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return response.results.map((page: any) => ({
            id: page.id,
            title: page.properties.Title?.title[0]?.plain_text || '未設定',
            description: page.properties.Description?.rich_text[0]?.plain_text || '',
            customerVoice: page.properties.CustomerVoice?.rich_text[0]?.plain_text || '',
            beforeImageUrl: page.properties.BeforeImage?.files[0]?.file?.url || IMAGES.PROJECTS.WALL_BEFORE,
            afterImageUrl: page.properties.AfterImage?.files[0]?.file?.url || IMAGES.PROJECTS.WALL_AFTER,
            completionDate: page.properties.completionDate?.date?.start || null,
        }));
    } catch (e) {
        console.error("Failed to fetch Projects from Notion", e);
        return [];
    }
}
