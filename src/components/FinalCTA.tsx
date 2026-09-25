import React from 'react';
import { MessageSquare, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { TikTokIcon } from './TikTokLogo';
import { GoogleAdsIcon } from './GoogleLogo';

export const FinalCTA: React.FC = () => {
  return (
    <section id="contato" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[350px] bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-purple-600/20 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0e121c] to-[#080a11] border border-blue-500/30 p-8 sm:p-12 md:p-16 text-center shadow-[0_0_50px_rgba(66,133,244,0.15)] overflow-hidden">
          
          {/* Subtle neon top accent */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          
          {/* Ambient TikTok & Google watermarks */}
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none">
            <TikTokIcon size={180} glow={false} />
          </div>
          <div className="absolute -left-10 -top-10 opacity-5 pointer-events-none">
            <GoogleAdsIcon size={180} glow={false} />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-blue-500/30 text-slate-200 text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(66,133,244,0.15)]">
            <div className="flex items-center gap-1.5">
              <GoogleAdsIcon className="w-3.5 h-3.5" />
              <TikTokIcon className="w-3 h-3" />
            </div>
            <span>VantaX • Agência Especializada em Google & TikTok</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Pronto para escalar no Google e no TikTok?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto mb-10 font-normal leading-relaxed">
            Entre no nosso Discord e fale diretamente com o time de especialistas da VantaX para comprar contas Google Ads aquecidas, ativos TikTok Ads, ativar o PostFlash ou estruturar sua contingência.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              id="cta-final-btn"
              href={SITE_CONFIG.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 hover:from-blue-500 hover:via-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-[0_0_30px_rgba(66,133,244,0.4)] hover:shadow-[0_0_40px_rgba(66,133,244,0.6)] transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-5 h-5 text-white" />
              <span>COMPRAR CONTAS NO DISCORD</span>
              <ArrowUpRight className="w-4 h-4 text-slate-200" />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Negociação Segura no Discord</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>Suporte Centralizado e Dedicado</span>
          </div>

        </div>
      </div>
    </section>
  );
};

