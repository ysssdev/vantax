import React from 'react';
import { 
  Monitor, 
  Copy, 
  Code2, 
  Sparkles, 
  MessageSquare, 
  ArrowUpRight, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  MousePointerClick, 
  Layers,
  HelpCircle,
  Clock
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { TikTokIcon } from './TikTokLogo';

interface TelaOption {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  features: string[];
  idealFor: string;
  highlight?: boolean;
}

export const TelasSection: React.FC = () => {
  const telaOptions: TelaOption[] = [
    {
      id: "vsl-sales-page",
      title: "Página de Vendas & VSL Clonada",
      badge: "Mais Vendida",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      description: "Clonagem fiel 1:1 de qualquer landing page de vendas com player otimizado e delay configurável no botão de checkout.",
      features: [
        "Cópia idêntica de design, cores e fontes",
        "Player de vídeo (VTurb, Panda, YouTube) com delay do botão",
        "Remoção de scripts rastreadores do concorrente original",
        "Carregamento ultrarrápido otimizado para mobile"
      ],
      idealFor: "Ofertas diretas e produtos digitais/físicos no TikTok Ads",
      highlight: true
    },
    {
      id: "advertorial-nativo",
      title: "Advertorial & Notícia Nativa",
      badge: "Alta Credibilidade",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      description: "Estrutura estilo portal de notícias de grande autoridade (G1, R7, Forbes) com comentários dinâmicos e prova social.",
      features: [
        "Layout jornalístico de alta credibilidade",
        "Seção de comentários simulados com fotos e depoimentos",
        "Redirecionamento estratégico de links para a sua oferta",
        "Estrutura blindada contra reprovações de anúncios"
      ],
      idealFor: "Produtos de saúde, beleza, encapsulados e nichos black"
    },
    {
      id: "presell-quiz",
      title: "Presell & Quiz Interativo",
      badge: "Filtro & Aquecimento",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      description: "Página interativa com perguntas gamificadas para engajar e pré-qualificar o visitante antes da oferta final.",
      features: [
        "Quiz dinâmico com pontuação e barras de progresso",
        "Aquecimento do lead antes de enviar para o VSL/Checkout",
        "Redução drástica do CPA nas campanhas do TikTok",
        "Passagem automática de UTMs e parâmetros de rastreio"
      ],
      idealFor: "Engajamento máximo, campanhas de baixo custo e retenção"
    },
    {
      id: "funil-completo",
      title: "Funil Completo Sob Medida",
      badge: "Solução Completa",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      description: "Clonamos o ecossistema inteiro: Presell + Advertorial + VSL + Integração direta no seu domínio com Pixels instalados.",
      features: [
        "Clonagem de múltiplas páginas com fluxo conectado",
        "Instalação e configuração de Pixel TikTok Ads e Meta",
        "Subida no seu domínio com SSL e Cloudflare",
        "Entrega de arquivos limpos e organizados"
      ],
      idealFor: "Operações profissionais que exigem estrutura pronta para rodar"
    }
  ];

  return (
    <section id="telas" className="relative py-24 md:py-32 scroll-mt-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-purple-600/10 to-blue-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <Monitor className="w-3.5 h-3.5 text-cyan-400" />
            <span>Novo Serviço • Telas Clonadas</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Telas & Sites Clonados{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
              para Escala
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6">
            Precisa daquela página que está faturando alto? Clonamos qualquer site, advertorial, VSL ou presell com fidelidade 1:1, códigos 100% limpos e pronta para rodar no TikTok Ads.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08]">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              Cópia 1:1 Fiel
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Sem rastreadores antigos
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08]">
              <Clock className="w-3.5 h-3.5 text-purple-400" />
              Entrega Rápida
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08]">
              <TikTokIcon className="w-3 h-3" glow={false} />
              Otimizado para TikTok
            </span>
          </div>
        </div>

        {/* Telas Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {telaOptions.map((tela) => (
            <div
              key={tela.id}
              id={`tela-card-${tela.id}`}
              className={`group relative flex flex-col justify-between rounded-2xl bg-[#0c0e17]/90 border transition-all duration-300 backdrop-blur-xl p-6 sm:p-8 hover:shadow-[0_10px_40px_rgba(6,182,212,0.16)] overflow-hidden ${
                tela.highlight 
                  ? 'border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.1)]' 
                  : 'border-white/[0.08] hover:border-cyan-500/30'
              }`}
            >
              {/* Subtle top neon border line */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              <div>
                {/* Header row with Badge and Type */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-105 transition-transform duration-200">
                      <Monitor className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Site Clonado
                    </span>
                  </div>

                  <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${tela.badgeColor}`}>
                    <Sparkles className="w-3 h-3" />
                    {tela.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-3">
                  {tela.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 font-normal leading-relaxed mb-6">
                  {tela.description}
                </p>

                {/* Features list */}
                <div className="space-y-3 mb-6 pt-4 border-t border-white/[0.06]">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    O que está incluído na tela:
                  </span>
                  {tela.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal for tag */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-6">
                  <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block mb-0.5">
                    Ideal para:
                  </span>
                  <p className="text-xs text-slate-300">
                    {tela.idealFor}
                  </p>
                </div>
              </div>

              {/* Action Area: Budget on Discord */}
              <div className="pt-5 border-t border-white/[0.06] mt-2">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="text-slate-400 font-medium">Investimento:</span>
                  <span className="font-bold text-cyan-300 uppercase tracking-wider">
                    Sob Orçamento no Discord
                  </span>
                </div>

                <a
                  id={`btn-orcamento-${tela.id}`}
                  href={SITE_CONFIG.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transform active:scale-[0.99]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>FAZER ORÇAMENTO NO DISCORD</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-200" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* How the Telas Process works banner */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0e121c] to-[#090b12] border border-cyan-500/25 p-8 sm:p-10 lg:p-12 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Code2 className="w-3.5 h-3.5" />
                <span>Fluxo de Clonagem Simples</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Como solicitar o orçamento da sua tela?
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                Envie o link do site ou oferta que você quer clonar no nosso servidor do Discord. Nossa equipe analisa a estrutura e passa o orçamento imediatamente.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="text-cyan-400 font-extrabold text-lg mb-1">01</div>
                  <div className="text-xs font-bold text-white mb-1">Envie o Link</div>
                  <div className="text-[11px] text-slate-400 leading-snug">
                    Cole o link do concorrente ou da página desejada no Discord.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="text-purple-400 font-extrabold text-lg mb-1">02</div>
                  <div className="text-xs font-bold text-white mb-1">Orçamento Rápido</div>
                  <div className="text-[11px] text-slate-400 leading-snug">
                    Definimos prazo de entrega e valor justo em poucos minutos.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                  <div className="text-emerald-400 font-extrabold text-lg mb-1">03</div>
                  <div className="text-xs font-bold text-white mb-1">Tela Pronta</div>
                  <div className="text-[11px] text-slate-400 leading-snug">
                    Receba os arquivos limpos ou já subimos diretamente no seu domínio.
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-black/60 border border-cyan-500/30 text-center">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                Fale Diretamente com Nosso Dev
              </h4>
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                Atendimento em tempo real no Discord para tirar dúvidas técnicas sobre clonagem, VSL, player e gateways.
              </p>
              
              <a
                id="btn-orcamento-geral-telas"
                href={SITE_CONFIG.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-cyan-500/25 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>FAZER ORÇAMENTO NO DISCORD</span>
                <ArrowUpRight className="w-4 h-4 text-slate-200" />
              </a>

              <span className="text-[11px] text-slate-400 mt-3 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Atendimento prioritário online agora
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
