import React from 'react';
import { MessageSquare, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface KLOption {
  id: string;
  name: string;
  badge?: string;
  badgeColor?: string;
}

export const KLSection: React.FC = () => {
  const klOptions: KLOption[] = [
    {
      id: 'btmob',
      name: 'BTMOB',
      badge: 'Disponível',
      badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]',
    },
    {
      id: 'kraken',
      name: 'KRAKEN',
      badge: 'Disponível',
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]',
    },
  ];

  return (
    <section id="kl" className="relative py-20 md:py-28 scroll-mt-20 overflow-hidden bg-[#07090e]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-purple-600/10 to-pink-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Catálogo KL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            KL
          </h2>

          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Adquira diretamente através do nosso servidor oficial no Discord com suporte e liberação imediata.
          </p>
        </div>

        {/* 2 Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {klOptions.map((option) => (
            <div
              key={option.id}
              id={`card-kl-${option.id}`}
              className="relative flex flex-col justify-between rounded-2xl bg-[#0c0e17]/90 border border-white/[0.08] hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-xl p-8 hover:shadow-[0_10px_35px_rgba(6,182,212,0.2)] overflow-hidden group"
            >
              {/* Subtle top border accent */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    KL
                  </span>

                  {option.badge && (
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border ${option.badgeColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                      {option.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-8">
                  {option.name}
                </h3>
              </div>

              {/* Purchase button linking directly to Discord */}
              <div className="pt-6 border-t border-white/[0.06] mt-auto">
                <a
                  id={`btn-comprar-${option.id}`}
                  href={SITE_CONFIG.discordUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform active:scale-[0.99]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>COMPRAR NO DISCORD</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-200" />
                </a>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center mt-3">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Atendimento e entrega via Discord</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
