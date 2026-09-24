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
  Flame
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { TikTokIcon } from './TikTokLogo';

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
      id: "contingencia-ativos",
      badge: "Infraestrutura Oficial",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      title: "Contingência & Ativos Blindados",
      description: "Nossa agência fornece a espinha dorsal para sua operação nunca parar: contas restabelecidas (1x, 2x, 3x) e Business Centers internacionais multi-país com até 30 contas de anúncios cada.",
      highlights: [
        "Contas com histórico de restabelecimento comprovado",
        "Business Centers BR, EUA, França e Chile",
        "Alta tolerância e aprovação ágil de anúncios",
        "Instruções e esteira de contingência personalizada"
      ],
      ctaText: "VER CATÁLOGO DE ATIVOS",
      ctaHref: "#ativos",
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      popular: true
    },
    {
      id: "postflash-automacao",
      badge: "Escala Orgânica & Viral",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      title: "Automação PostFlash (TikTok & Insta)",
      description: "Software exclusivo da agência para postagens automatizadas em massa. Publique milhares de vídeos por mês em até 300 contas simultâneas no TikTok e Instagram sem esforço braçal.",
      highlights: [
        "Até 150.000 posts/mês em múltiplas contas",
        "Multiplicação de alcance no TikTok e Reels",
        "Distribuição inteligente e rotação de criativos",
        "2 TB de armazenamento em nuvem ultrarrápido"
      ],
      ctaText: "CONHECER O POSTFLASH",
      ctaHref: "#postflash",
      icon: <Zap className="w-6 h-6 text-purple-400" />
    },
    {
      id: "escala-performance",
      badge: "Tráfego Pago & ROI",
      badgeColor: "bg-pink-500/10 text-pink-300 border-pink-500/30",
      title: "Gestão & Aceleração de Escala",
      description: "Consultoria e direcionamento prático para tracionar campanhas no TikTok Ads. Ajudamos sua equipe a estruturar esteiras de testes de criativos, blindagem de checkout e otimização de CPA.",
      highlights: [
        "Direcionamento estratégico para infoprodutos e e-commerces",
        "Estratégia de criativos de alta retenção no TikTok",
        "Estruturação de funis de alta conversão",
        "Suporte direto e próximo de quem roda no campo de batalha"
      ],
      ctaText: "FALAR COM A AGÊNCIA NO DISCORD",
      ctaHref: SITE_CONFIG.discordUrl,
      icon: <Rocket className="w-6 h-6 text-pink-400" />
    }
  ];

  return (
    <section id="servicos" className="relative py-24 md:py-32 scroll-mt-20 overflow-hidden bg-[#07090e]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-pink-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <TikTokIcon className="w-3.5 h-3.5" />
            <span>Ecossistema VantaX • Soluções de Agência</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Como Nossa Agência{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              Escala Seu TikTok
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Eliminamos os principais gargalos de operações no TikTok: bloqueios de contas, falta de contingência e limitação de alcance orgânico. Entregamos a estrutura completa pronta para você lucrar.
          </p>
        </div>

        {/* Agency Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 items-stretch">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative flex flex-col justify-between rounded-2xl bg-[#0c0e17]/90 border transition-all duration-300 backdrop-blur-xl p-6 sm:p-8 hover:shadow-[0_10px_40px_rgba(6,182,212,0.18)] ${
                service.popular
                  ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]'
                  : 'border-white/[0.08] hover:border-cyan-500/30'
              }`}
            >
              {service.popular && (
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500" />
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
                      ? 'text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 shadow-lg shadow-cyan-500/25'
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
        <div className="rounded-2xl bg-gradient-to-r from-[#0d1017] via-[#101423] to-[#0d1017] border border-cyan-500/20 p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 font-mono">
                +1.400
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">Membros Ativos no Discord</div>
            </div>

            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 font-mono">
                100%
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">Foco Especializado em TikTok</div>
            </div>

            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 font-mono">
                Até 30 BCs
              </div>
              <div className="text-xs text-slate-300 font-medium mt-1">Contas por Business Center</div>
            </div>

            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono">
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
