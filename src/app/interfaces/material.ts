export interface Material {
  id: string;
  name: string;
  url: string;
  description: string;
  price: '無料' | '有料';
  licences: ('著作権表記不要' | '著作権表記必要')[];
  types: ('ベクター' | '効果音' | 'BGM' | '写真' | 'イラスト' | 'ベクター' | 'アイコン' | 'フォント')[];
}

export interface MaterialFilter {
  licences: ('著作権表記不要' | '著作権表記必要')[];
  price: '無料' | '有料';
  types: ('ベクター' | '効果音' | 'BGM' | '写真' | 'イラスト' | 'ベクター' | 'アイコン' | 'フォント')[];
}
