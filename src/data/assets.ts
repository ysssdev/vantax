import { TikTokAsset } from '../types';

/**
 * Lista dos 7 ativos oficiais solicitados.
 * Todas as informações, preços e características podem ser editadas diretamente aqui.
 */
export const TIKTOK_ASSETS: TikTokAsset[] = [
  {
    id: "restabelecida-1x",
    name: "Restabelecida 1x",
    category: "restabelecida",
    type: "Conta Restabelecida",
    country: "Global / Multi-região",
    countryCode: "GL",
    description: "Conta com histórico de 1 restabelecimento com sucesso, pronta para veiculação de anúncios.",
    features: [
      "1x Restabelecimento validado",
      "Pronta para contingência de tráfego",
      "Acesso completo e seguro",
      "Suporte via Discord na entrega"
    ],
    availability: "Pronta Entrega",
    availabilityColor: "emerald",
    priceText: "Consulte no Discord", // Campo opcional para preço
    highlight: false,
    iconName: "shield-check"
  },
  {
    id: "restabelecida-2x",
    name: "Restabelecida 2x",
    category: "restabelecida",
    type: "Conta Restabelecida",
    country: "Global / Multi-região",
    countryCode: "GL",
    description: "Conta restabelecida duas vezes, histórico reforçado para maior resiliência em contingência.",
    features: [
      "2x Restabelecimentos concluídos",
      "Maior tolerância operacional",
      "Verificação prévia realizada",
      "Instruções de acesso e aquecimento inclusas"
    ],
    availability: "Disponível",
    availabilityColor: "cyan",
    priceText: "Consulte no Discord", // Campo opcional para preço
    highlight: true,
    iconName: "shield-check"
  },
  {
    id: "restabelecida-3x",
    name: "Restabelecida 3x",
    category: "restabelecida",
    type: "Conta Restabelecida",
    country: "Global / Multi-região",
    countryCode: "GL",
    description: "Ativo de alto nível de blindagem com histórico de 3 restabelecimentos consolidados.",
    features: [
      "3x Restabelecimentos aprovados",
      "Estrutura robusta para escala",
      "Ideal para operações consolidadas",
      "Acompanhamento direto no suporte"
    ],
    availability: "Últimas Unidades",
    availabilityColor: "purple",
    priceText: "Consulte no Discord", // Campo opcional para preço
    highlight: false,
    iconName: "shield-alert"
  },
  {
    id: "bc-30-br",
    name: "BC 30 BR",
    category: "business_center",
    type: "Business Center (BC 30)",
    country: "Brasil",
    countryCode: "BR",
    description: "Business Center com capacidade para até 30 contas de anúncios vinculadas à região do Brasil.",
    features: [
      "Capacidade: 30 contas vinculadas",
      "Região / Faturamento: Brasil",
      "Painel corporativo pronto",
      "Suporte para transferência e configuração"
    ],
    availability: "Pronta Entrega",
    availabilityColor: "emerald",
    priceText: "Consulte no Discord", // Campo opcional para preço
    highlight: true,
    iconName: "building"
  },
  {
    id: "bc-30-fr",
    name: "BC 30 FR",
    category: "business_center",
    type: "Business Center (BC 30)",
    country: "França",
    countryCode: "FR",
    description: "Business Center com capacidade para até 30 contas de anúncios vinculadas à região da França (Europa).",
    features: [
      "Capacidade: 30 contas vinculadas",
      "Região / Faturamento: França (FR)",
      "Estrutura para operações internacionais",
      "Acesso e permissões administrativas"
    ],
    availability: "Disponível",
    availabilityColor: "cyan",
    priceText: "Consulte no Discord", // Campo opcional para preço
    highlight: false,
    iconName: "globe"
  },
  {
    id: "bc-30-eua",
    name: "BC 30 EUA",
    category: "business_center",
    type: "Business Center (BC 30)",
    country: "Estados Unidos",
    countryCode: "US",
    description: "Business Center com capacidade de 30 contas direcionadas para o mercado norte-americano.",
    features: [
      "Capacidade: 30 contas vinculadas",
      "Região / Faturamento: Estados Unidos (EUA)",
      "Acesso a mercado de alta liquidez",
      "Ativação rápida via suporte"
    ],
    availability: "Disponível",
    availabilityColor: "cyan",
    priceText: "Consulte no Discord", // Campo opcional para preço
    highlight: false,
    iconName: "globe"
  },
  {
    id: "bc-30-chile",
    name: "BC 30 Chile",
    category: "business_center",
    type: "Business Center (BC 30)",
    country: "Chile",
    countryCode: "CL",
    description: "Business Center estruturado para operações na América Latina com faturamento no Chile.",
    features: [
      "Capacidade: 30 contas vinculadas",
      "Região / Faturamento: Chile (CL)",
      "Gestão centralizada de contas",
      "Pronta para transferência de titularidade"
    ],
    availability: "Pronta Entrega",
    availabilityColor: "emerald",
    priceText: "Consulte no Discord", // Campo opcional para preço
    highlight: false,
    iconName: "building"
  }
];
