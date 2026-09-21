import React from 'react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { TikTokIcon } from './TikTokLogo';

interface FooterProps {
  onOpenLegal: (type: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070c] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand Info with VantaX Image */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
              <img 
                src={SITE_CONFIG.logoUrl} 
                alt="VantaX"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-black tracking-wider text-base uppercase">
                  {SITE_CONFIG.brandName}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded border border-cyan-500/20">
                  <TikTokIcon className="w-2.5 h-2.5" glow={false} />
                  TikTok Assets
                </span>
              </div>
              <span className="text-xs text-slate-400 block">
                Ativos TikTok, PostFlash, KL & Telas Clonadas para Escala de Alta Performance
              </span>
            </div>
          </div>

          {/* Discord and Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="#postflash"
              className="hover:text-white transition-colors"
            >
              PostFlash
            </a>

            <a
              href="#kl"
              className="hover:text-white transition-colors"
            >
              KL
            </a>

            <a
              href="#telas"
              className="hover:text-white transition-colors"
            >
              Telas Clonadas
            </a>

            <a
              id="footer-discord-link"
              href={SITE_CONFIG.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discord Oficial</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              id="footer-terms-btn"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>

            <button
              id="footer-privacy-btn"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Política de Privacidade
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {SITE_CONFIG.brandName} — Ativos TikTok. Todos os direitos reservados.
          </p>
          <p className="text-slate-400">
            Link oficial do Discord: {SITE_CONFIG.discordUrl}
          </p>
        </div>

      </div>
    </footer>
  );
};
