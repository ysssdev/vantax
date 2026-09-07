export type AssetCategory = 'all' | 'restabelecida' | 'business_center';

export interface TikTokAsset {
  id: string;
  name: string;
  category: 'restabelecida' | 'business_center';
  type: string;
  country: string;
  countryCode?: string; // for flag or country indicator
  description: string;
  features: string[];
  availability: 'Disponível' | 'Pronta Entrega' | 'Últimas Unidades' | 'Sob Encomenda';
  availabilityColor: 'emerald' | 'cyan' | 'purple' | 'amber';
  priceText?: string; // Campo opcional para preço (ex: "Consulte no Discord", "R$ 350", ou deixar vazio/sob consulta)
  highlight?: boolean;
  iconName: 'shield-check' | 'shield-alert' | 'layers' | 'building' | 'globe' | 'flag' | 'server';
}

export type ModalType = 'terms' | 'privacy' | null;
