import { TikTokAsset } from '../types';

/**
 * Catálogo Oficial de Ativos e Contas da Agência:
 * - Contas Google Ads (Aquecidas, Aged, Verificadas, MCC e Internacionais)
 * - Contas e Business Centers TikTok Ads (Restabelecidas 1x, 2x, 3x e BC 30)
 * Todas com compra e liberação direta no Discord.
 */
export const TIKTOK_ASSETS: TikTokAsset[] = [
  // --- GOOGLE ADS ACCOUNTS ---
  {
    id: "google-ads-aquecida",
    name: "Google Ads Aquecida (BR)",
    category: "google_ads",
    platform: "google",
    type: "Conta Google Ads Aquecida",
    country: "Brasil (BRL)",
    countryCode: "BR",
    description: "Conta aquecida com histórico de buscas e campanhas leves aprovadas. Ideal para rodar anúncios na Rede de Pesquisa e Display.",
    features: [
      "Histórico de aquecimento prévio validado",
      "Pronta para Pesquisa, Display e YouTube",
      "Alta resistência a 'Pagamento Suspeito'",
      "Instruções de acesso limpo e suporte via Discord"
    ],
    availability: "Pronta Entrega",
    availabilityColor: "emerald",
    priceText: "Consulte no Discord",
    highlight: true,
    iconName: "google-ads"
  },
  {
    id: "google-ads-aged",
    name: "Google Ads Aged (Envelhecida)",
    category: "google_ads",
    platform: "google",
    type: "Conta Google Ads Aged",
    country: "Brasil / Global",
    countryCode: "GL",
    description: "Conta com tempo de criação consolidado e alto Trust Score no algoritmo do Google. Perfeita para operações de alta escala.",
    features: [
      "Anos de criação e histórico orgânico",
      "Trust Score elevado para aprovação ágil",
      "Maior tolerância para orçamentos elevados",
      "Suporte exclusivo na entrega pelo Discord"
    ],
    availability: "Últimas Unidades",
    availabilityColor: "purple",
    priceText: "Consulte no Discord",
    highlight: true,
    iconName: "google"
  },
  {
    id: "google-ads-verificada",
    name: "Google Ads Verificada (CNPJ/ID)",
    category: "google_ads",
    platform: "google",
    type: "Conta Anunciante Verificado",
    country: "Brasil",
    countryCode: "BR",
    description: "Conta com processo de verificação de identidade e anunciante 100% concluído pelo Google Ads. Segurança institucional.",
    features: [
      "Selo oficial de Anunciante Verificado",
      "Sem risco de pausa para verificação repentina",
      "Estrutura blindada para contingência pesada",
      "Pronta para subir campanhas imediatamente"
    ],
    availability: "Disponível",
    availabilityColor: "cyan",
    priceText: "Consulte no Discord",
    highlight: false,
    iconName: "shield-check"
  },
  {
    id: "google-ads-mcc",
    name: "MCC Google Ads Estruturada",
    category: "google_ads",
    platform: "google",
    type: "Minha Central de Clientes (MCC)",
    country: "Brasil / Global",
    countryCode: "BR",
    description: "Estrutura corporativa MCC para gerenciar e vincular dezenas de sub-contas de anúncios Google Ads com faturamento centralizado.",
    features: [
      "Capacidade para múltiplas contas Google Ads",
      "Painel de agência para gestão centralizada",
      "Contingência profissional e organizada",
      "Transferência rápida de permissões de administrador"
    ],
    availability: "Pronta Entrega",
    availabilityColor: "emerald",
    priceText: "Consulte no Discord",
    highlight: false,
    iconName: "building"
  },
  {
    id: "google-ads-internacional",
    name: "Google Ads EUA (Dólar)",
    category: "google_ads",
    platform: "google",
    type: "Conta Google Ads Internacional",
    country: "Estados Unidos (USD)",
    countryCode: "US",
    description: "Conta configurada em dólar (USD) para tráfego internacional nos EUA e Europa, com alta liquidez e sem restrições de faturamento local.",
    features: [
      "Faturamento em Dólar Americano (USD)",
      "Acesso direto ao mercado global Google Ads",
      "Pronta para campanhas de Search e Shopping",
      "Ativação e liberação assistida no Discord"
    ],
    availability: "Disponível",
    availabilityColor: "blue",
    priceText: "Consulte no Discord",
    highlight: false,
    iconName: "globe"
  },

  // --- TIKTOK ADS ACCOUNTS & BUSINESS CENTERS ---
  {
    id: "restabelecida-1x",
    name: "TikTok Restabelecida 1x",
    category: "restabelecida",
    platform: "tiktok",
    type: "Conta TikTok Restabelecida",
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
    priceText: "Consulte no Discord",
    highlight: false,
    iconName: "shield-check"
  },
  {
    id: "restabelecida-2x",
    name: "TikTok Restabelecida 2x",
    category: "restabelecida",
    platform: "tiktok",
    type: "Conta TikTok Restabelecida",
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
    priceText: "Consulte no Discord",
    highlight: true,
    iconName: "shield-check"
  },
  {
    id: "restabelecida-3x",
    name: "TikTok Restabelecida 3x",
    category: "restabelecida",
    platform: "tiktok",
    type: "Conta TikTok Restabelecida",
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
    priceText: "Consulte no Discord",
    highlight: false,
    iconName: "shield-alert"
  },
  {
    id: "bc-30-br",
    name: "TikTok BC 30 BR",
    category: "business_center",
    platform: "tiktok",
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
    priceText: "Consulte no Discord",
    highlight: true,
    iconName: "building"
  },
  {
    id: "bc-30-fr",
    name: "TikTok BC 30 FR",
    category: "business_center",
    platform: "tiktok",
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
    priceText: "Consulte no Discord",
    highlight: false,
    iconName: "globe"
  },
  {
    id: "bc-30-eua",
    name: "TikTok BC 30 EUA",
    category: "business_center",
    platform: "tiktok",
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
    priceText: "Consulte no Discord",
    highlight: false,
    iconName: "globe"
  },
  {
    id: "bc-30-chile",
    name: "TikTok BC 30 Chile",
    category: "business_center",
    platform: "tiktok",
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
    priceText: "Consulte no Discord",
    highlight: false,
    iconName: "building"
  }
];

