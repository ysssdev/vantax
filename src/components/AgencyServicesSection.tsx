import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Users, 
  Rocket, 
  Target, 
  Sparkles, 
  MessageSquare, 
  ArrowUpRight, 
  CheckCircle2,
  Lock,
  Layers,
  Flame,
  Globe2
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { TikTokIcon } from './TikTokLogo';
import { GoogleAdsIcon, GoogleIcon } from './GoogleLogo';

interface AgencyService {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  highlights: string[];
  ctaText: string;
  ctaHref: string;
  icon: React.ReactNode;
  popular?: boolean;
}

export const AgencyServicesSection: React.FC = () => {
  const services: AgencyService[] = [
    {
      id: "google-ads-accounts",
      badge: "Venda de Contas Google",
      badgeColor: "bg-blue-500/10 text-blue-300 border-blue-500/30",
      title: "Contas Google Ads & Contingência",
      description: "Fornecimento de contas Google Ads aquecidas, envelhecidas (Aged), verificadas com CNPJ/ID e estruturas MCC completas para rodar Search, Display, YouTube e Performance Max sem bloqueios de pagamento suspeito.",
      highlights: [
        "Contas aquecidas com campanhas leves e histórico",
        "Contas Aged com Trust Score elevado no algoritmo",
        "Opções com selo de Anunciante Verificado oficial",
        "MCCs estruturadas e contas em Dólar (USD)"
      ],
      ctaText: "VER CONTAS GOOGLE ADS",
      ctaHref: "#ativos",
      icon: <GoogleAdsIcon className="w-6 h-6" />,
      popular: true
    },
    {
      id: "tiktok-contingencia",
      badge: "Infraestrutura TikTok",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      title: "Ativos TikTok Ads & Business Centers",
      description: "A espinha dorsal para sua esteira TikTok nunca parar: contas restabelecidas (1x, 2x, 3x) de alta resiliência e Business Centers internacionais (BR, EUA, França e Chile) com capacidade para até 30 contas cada.",
      highlights: [
        "Contas restabelecidas com histórico validado",
        "Business Centers BR, EUA, França e Chile (BC 30)",
        "Alta tolerância e aprovação ágil de anúncios",
        "Transferência e suporte imediato no Discord"
      ],
      ctaText: "VER ATIVOS TIKTOK",
      ctaHref: "#ativos",
      icon: <TikTokIcon className="w-6 h-6" />
    },
    {
      id: "postflash-automacao",
      badge: "Automação Multi-Rede",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      title: "Automação PostFlash (TikTok & Insta)",
      description: "Software exclusivo da agência para postagens automáticas em massa. Publique milhares de vídeos por mês em até 300 contas simultâneas no TikTok e Instagram sem esforço manual.",
      highlights: [
        "Até 150.000 posts/mês em múltiplas contas",
        "Multiplicação de alcance no TikTok e Reels",
        "Distribuição inteligente e rotação de criativos",
        "2 TB de armazenamento em nuvem ultrarrápido"
      ],
      ctaText: "CONHECER O POSTFLASH",
      ctaHref: "#postflash",
      icon: <Zap className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <section id="servicos" className="relative py-24 md:py-32 scroll-mt-20 overflow-hidden bg-[#07090e]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-blue-500/30 text-slate-200 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(66,133,244,0.15)]">
            <div className="flex items-center gap-1.5">
              <GoogleAdsIcon className="w-3.5 h-3.5" />
              <TikTokIcon className="w-3 h-3" />
            </div>
            <span>Ecossistema VantaX • Soluções Google & TikTok</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Como Nossa Agência{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
              Escala Google & TikTok
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Eliminamos os principais gargalos da sua operação: bloqueios repentinos no Google Ads, quedas de BM/BC no TikTok Ads e limitação de alcance. Entregamos contas prontas e infraestrutura validada para você faturar.
          </p>
        </div>

        {/* Agency Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative flex flex-col justify-between rounded-2xl bg-[#0c0e17]/90 border transition-all duration-300 backdrop-blur-xl p-6 sm:p-8 hover:shadow-[0_10px_40px_rgba(66,133,244,0.18)] ${
                service.popular
                  ? 'border-blue-500/50 shadow-[0_0_30px_rgba(66,133,244,0.15)]'
                  : 'border-white/[0.08] hover:border-cyan-500/30'
              }`}
            >
              {service.popular && (
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                    {service.icon}
                  </div>
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border ${service.badgeColor}`}>
                    <Sparkles className="w-3 h-3" />
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  {service.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/[0.06] mb-8">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Entregáveis da agência:
                  </span>
                  {service.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] mt-auto">
                <a
                  href={service.ctaHref}
                  target={service.ctaHref.startsWith('http') ? '_blank' : undefined}
                  rel={service.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 ${
                    service.popular
                      ? 'text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 hover:from-blue-500 hover:via-cyan-400 hover:to-purple-500 shadow-lg shadow-blue-500/25'
                      : 'text-slate-200 bg-white/[0.06] hover:bg-white/[0.12] hover:text-white border border-white/[0.1]'
                  }`}
                >
                  {service.ctaHref.startsWith('http') && <MessageSquare className="w-4 h-4" />}
                  <span>{service.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Agency Metrics Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-[#0d1017] via-[#101423] to-[#0d1017] border border-blue-500/20 p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300 font-mono flex items-center justify-center gap-1.5">
                <GoogleAdsIcon className="w-5 h-5" glow={false} />
                <span>Google</span>
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">Contas Aquecidas & Verificadas</div>
            </div>

            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300 font-mono flex items-center justify-center gap-1.5">
                <TikTokIcon className="w-5 h-5" glow={false} />
                <span>TikTok</span>
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">Restabelecidas & BC 30</div>
            </div>

            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-mono">
                150k
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">Posts/mês PostFlash Automação</div>
            </div>

            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300 font-mono">
                Imediato
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">Atendimento Direto no Discord</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

