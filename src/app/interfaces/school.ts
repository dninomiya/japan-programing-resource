export interface School {
  id: string;
  name: string;
  places: string[];
  types: ('マークアップ' | 'フロントエンド' | 'サーバーサイド' | 'モバイル' | 'インフラ' | 'デザイン' | '機械学習')[];
  skills: string[];
  plans: ('ISA' | '無料' | '授業料')[];
  description: string;
  url: string;
  price?: {
    min: number;
    max?: number;
  };
  host: {
    name: string;
    url: string;
  };
}
