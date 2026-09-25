export type AssetCategory = 'all' | 'google_ads' | 'restabelecida' | 'business_center';

export interface TikTokAsset {
  id: string;
  name: string;
  category: 'google_ads' | 'restabelecida' | 'business_center';
  platform?: 'google' | 'tiktok';
  type: string;
  country: string;
  countryCode?: string; // for flag or country indicator
  description: string;
  features: string[];
  availability: 'Disponível' | 'Pronta Entrega' | 'Últimas Unidades' | 'Sob Encomenda';
  availabilityColor: 'emerald' | 'cyan' | 'purple' | 'amber' | 'blue';
  priceText?: string; // Campo opcional para preço (ex: "Consulte no Discord", "R$ 350", ou deixar vazio/sob consulta)
  highlight?: boolean;
  iconName: 'shield-check' | 'shield-alert' | 'layers' | 'building' | 'globe' | 'flag' | 'server' | 'google' | 'google-ads';
}

export type AdAsset = TikTokAsset;

export type ModalType = 'terms' | 'privacy' | null;
