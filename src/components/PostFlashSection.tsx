import React from 'react';
import { 
  Zap, 
  HardDrive, 
  Users, 
  Share2, 
  Sparkles, 
  MessageSquare, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Flame,
  Clock,
  Layers,
  Instagram
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { TikTokIcon } from './TikTokLogo';

interface PostFlashPlan {
  id: string;
  name: string;
  badge?: string;
  badgeColor?: string;
  price: string;
  period: string;
  accounts: string;
  posts: string;
  storage: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export const PostFlashSection: React.FC = () => {
  const plans: PostFlashPlan[] = [
    {
      id: "postflash-400",
      name: "Plano Starter",
      price: "400",
      period: "mês",
      accounts: "50 contas",
      posts: "3.000 posts por mês",
      storage: "250 GB",
      description: "Ideal para iniciar sua esteira de postagens automáticas e orgânicas no TikTok e Instagram sem esforço manual.",
      features: [
        "50 contas conectadas (TikTok & Instagram)",
        "3.000 posts por mês (Reels, TikTok & Feed)",
        "250 GB de armazenamento em nuvem",
        "Agendamento inteligente com espaçamento seguro",
        "Distribuição balanceada entre perfis",
        "Suporte e liberação via Discord"
      ],
      highlight: false
    },
    {
      id: "postflash-600",
      name: "Plano Pro",
      badge: "Mais Popular",
      badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.25)]",
      price: "600",
      period: "mês",
      accounts: "130 contas",
      posts: "130.000 posts por mês",
      storage: "2 TB",
      description: "O mais escolhido por infoprodutores, afiliados e gestores de tráfego. Volume massivo para dominar TikTok e Instagram.",
      features: [
        "130 contas conectadas (TikTok & Instagram)",
        "130.000 posts por mês em massa",
        "2 TB de armazenamento para vídeos e criativos",
        "Publicação simultânea multi-perfil e multi-nicho",
        "Suporte a rotação de legendas, hashtags e áudios",
        "Ativação prioritária direta no Discord"
      ],
      highlight: true
    },
    {
      id: "postflash-900",
      name: "Plano Scale Elite",
      badge: "Máxima Escala",
      badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.25)]",
      price: "900",
      period: "mês",
      accounts: "300 contas",
      posts: "150.000 posts por mês",
      storage: "2 TB",
      description: "Poder de fogo máximo para operações de alta escala, esteiras de canais dark, múltiplos nichos e virais contínuos.",
      features: [
        "300 contas conectadas (TikTok & Instagram)",
        "150.000 posts por mês sem gargalos",
        "2 TB de armazenamento em nuvem ultra veloz",
        "Prioridade absoluta na fila de processamento",
        "Onboarding assistido pela equipe",
        "Atendimento VIP individual no Discord"
      ],
      highlight: false
    }
  ];

  return (
    <section id="postflash" className="relative py-24 md:py-32 scroll-mt-20 overflow-hidden bg-[#07090e]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-cyan-500/10 via-purple-600/10 to-pink-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Automação de Postagens TikTok & Instagram</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            PostFlash{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400">
              TikTok & Instagram
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6">
            Multiplique seu alcance no <strong className="text-white font-semibold">TikTok</strong> e no <strong className="text-white font-semibold">Instagram</strong> com postagens automáticas em dezenas ou centenas de contas ao mesmo tempo. Escolha o plano perfeito e compre direto pelo nosso Discord.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-200">
              <TikTokIcon className="w-3.5 h-3.5" glow={false} />
              TikTok & Reels
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-300">
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              Instagram Multi-Contas
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08]">
              <Share2 className="w-3.5 h-3.5 text-cyan-400" />
              Até 150.000 Posts/Mês
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08]">
              <HardDrive className="w-3.5 h-3.5 text-purple-400" />
              Armazenamento em Nuvem
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08]">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              Ativação Imediata no Discord
            </span>
          </div>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              id={`card-${plan.id}`}
              className={`relative flex flex-col justify-between rounded-2xl bg-[#0c0e17]/90 border transition-all duration-300 backdrop-blur-xl p-6 sm:p-8 hover:shadow-[0_10px_40px_rgba(6,182,212,0.2)] overflow-hidden ${
                plan.highlight
                  ? 'border-cyan-500/50 shadow-[0_0_35px_rgba(6,182,212,0.18)] scale-[1.02] z-20'
                  : 'border-white/[0.08] hover:border-cyan-500/30'
              }`}
            >
              {/* Highlight Neon bar */}
              {plan.highlight && (
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
              )}

              <div>
                {/* Header with Title and optional Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-1 text-slate-300">
                      <span className="text-xs font-bold uppercase tracking-wider">
                        PostFlash
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/[0.08] text-pink-300 font-semibold">
                        TikTok + Insta
                      </span>
                    </div>
                  </div>

                  {plan.badge && (
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${plan.badgeColor}`}>
                      <Sparkles className="w-3 h-3" />
                      {plan.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                  {plan.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed mb-6">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="p-4 rounded-xl bg-black/50 border border-white/[0.06] mb-6">
                  <div className="flex items-baseline gap-1 text-white">
                    <span className="text-xs font-semibold text-slate-400">R$</span>
                    <span className="text-4xl font-extrabold tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                {/* Core Specs Highlights (Accounts, Posts, Storage) */}
                <div className="grid grid-cols-1 gap-2.5 mb-6">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="font-semibold">Contas TikTok / Insta:</span>
                    </div>
                    <span className="font-bold text-white text-sm">
                      {plan.accounts}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-purple-500/5 border border-purple-500/20 text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Share2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <span className="font-semibold">Volume de posts:</span>
                    </div>
                    <span className="font-bold text-purple-300 text-sm">
                      {plan.posts}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <HardDrive className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-semibold">Armazenamento:</span>
                    </div>
                    <span className="font-bold text-emerald-300 text-sm">
                      {plan.storage}
                    </span>
                  </div>
                </div>

                {/* Features list */}
                <div className="space-y-2.5 pt-4 border-t border-white/[0.06] mb-6">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Benefícios incluídos:
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Purchase Button linking to Discord */}
              <div className="pt-4 border-t border-white/[0.06] mt-auto">
                <a
                  id={`btn-comprar-${plan.id}`}
                  href={SITE_CONFIG.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 shadow-lg transform active:scale-[0.99] ${
                    plan.highlight
                      ? 'text-white bg-gradient-to-r from-cyan-500 via-pink-600 to-purple-600 hover:from-cyan-400 hover:via-pink-500 hover:to-purple-500 shadow-cyan-500/25 hover:shadow-cyan-500/40'
                      : 'text-white bg-white/[0.08] hover:bg-cyan-600 hover:text-white border border-white/[0.12] hover:border-cyan-400 shadow-black/40'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>COMPRAR NO DISCORD</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-200" />
                </a>
                
                <span className="text-[11px] text-slate-400 text-center block mt-2">
                  Atendimento e liberação imediata no Discord
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner: How to activate on Discord */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0e121c] to-[#090b12] border border-cyan-500/25 p-8 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Flame className="w-3.5 h-3.5 text-cyan-400" />
                <span>Velocidade & Escala Multi-Rede</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Como funciona o PostFlash (TikTok & Instagram) no Discord?
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Todos os planos do PostFlash são adquiridos e ativados diretamente através do nosso servidor oficial no Discord. Nossa equipe fornece o acesso, instruções de conexão para suas contas do <strong className="text-white">TikTok</strong> e perfis do <strong className="text-white">Instagram</strong>, além de suporte completo para você começar a rodar suas postagens em massa em poucos minutos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="text-cyan-400 font-extrabold text-lg mb-1">1. Escolha o Plano</div>
                  <div className="text-xs text-slate-300 leading-snug">
                    Selecione 50, 130 ou 300 contas para TikTok e Instagram.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="text-purple-400 font-extrabold text-lg mb-1">2. Abra o Ticket</div>
                  <div className="text-xs text-slate-300 leading-snug">
                    No Discord, informe o plano desejado para receber sua licença.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="text-emerald-400 font-extrabold text-lg mb-1">3. Escala Imediata</div>
                  <div className="text-xs text-slate-300 leading-snug">
                    Conecte os perfis e programe milhares de posts automáticos.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-black/60 border border-cyan-500/30 text-center">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <Zap className="w-6 h-6" />
              </div>
              
              <h4 className="text-lg font-bold text-white mb-2">
                Dúvidas sobre o PostFlash?
              </h4>
              
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Fale com nossa equipe agora no Discord e tire suas dúvidas sobre suporte para TikTok e Instagram, conexões e automações.
              </p>
              
              <a
                id="btn-postflash-discord-banner"
                href={SITE_CONFIG.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-cyan-500/25 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>COMPRAR PELO DISCORD</span>
                <ArrowUpRight className="w-4 h-4 text-slate-200" />
              </a>

              <span className="text-[11px] text-slate-400 mt-3 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Suporte online para liberação
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
