import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowDown, ShieldCheck, Zap, Globe, Sparkles, TrendingUp, CheckCircle2, Monitor } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { TikTokIcon, TikTokBadge } from './TikTokLogo';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambient Glows & Floating TikTok Watermarks */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-blue-600/15 blur-[120px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/10 blur-[90px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Ambient floating TikTok logos */}
        <div className="absolute top-24 left-[10%] opacity-15 hover:opacity-30 transition-opacity">
          <TikTokIcon size={48} glow={true} />
        </div>
        <div className="absolute bottom-28 left-[5%] opacity-10">
          <TikTokIcon size={64} glow={true} />
        </div>
        <div className="absolute top-36 right-[8%] opacity-15">
          <TikTokIcon size={56} glow={true} />
        </div>
        <div className="absolute bottom-16 right-[12%] opacity-10">
          <TikTokIcon size={40} glow={true} />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtitle, CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Top Pill / Badge with VantaX + TikTok */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <TikTokIcon className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-wider text-slate-200">
                VANTAX • Ativos TikTok Verificados
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Ativos TikTok{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                Prontos para Escalar
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-10">
              Escolha o ativo ideal para sua operação e tenha acesso rápido aos nossos produtos.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-10 flex-wrap">
              <a
                id="hero-btn-ver-ativos"
                href="#ativos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 bg-white/[0.06] hover:bg-white/[0.1] hover:text-white border border-white/[0.12] hover:border-cyan-500/40 transition-all duration-200 shadow-sm"
              >
                <span>VER ATIVOS</span>
                <ArrowDown className="w-4 h-4 text-cyan-400" />
              </a>

              <a
                id="hero-btn-ver-postflash"
                href="#postflash"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-cyan-300 bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 transition-all duration-200 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>POSTFLASH (TIKTOK & INSTA)</span>
              </a>

              <a
                id="hero-btn-ver-telas"
                href="#telas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.1] transition-all duration-200"
              >
                <Monitor className="w-4 h-4 text-purple-400" />
                <span>TELAS CLONADAS</span>
              </a>

              <a
                id="hero-btn-discord"
                href={SITE_CONFIG.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>COMPRAR NO DISCORD</span>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <TikTokIcon className="w-3.5 h-3.5" glow={false} />
                <span>Especialistas em TikTok</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>PostFlash Automação</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Ativos & Telas Clonadas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Compra no Discord</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Tech & Performance Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Glow frame behind card */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-xl opacity-75" />

            {/* Glassmorphic Tech Terminal Card */}
            <div className="relative rounded-2xl bg-[#0d1017]/90 border border-white/[0.1] backdrop-blur-xl p-6 shadow-2xl">
              
              {/* Terminal Header with VantaX Logo + TikTok Badge */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                    <img 
                      src={SITE_CONFIG.logoUrl} 
                      alt="VantaX"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white tracking-wider uppercase block">
                      VantaX Hub
                    </span>
                    <span className="text-[10px] text-slate-400 flex items-center gap-1">
                      <TikTokIcon className="w-2.5 h-2.5" glow={false} />
                      TikTok Infrastructure
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ESTOQUE ATIVO
                </div>
              </div>

              {/* Status Metric Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Blindagem</span>
                  </div>
                  <div className="text-lg font-bold text-white tracking-tight">1x / 2x / 3x</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Contas Restabelecidas</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Globe className="w-3.5 h-3.5 text-purple-400" />
                    <span>Business Centers</span>
                  </div>
                  <div className="text-lg font-bold text-white tracking-tight">BC 30 Multi</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">BR • FR • EUA • Chile</div>
                </div>
              </div>

              {/* Real-time telemetry feed mockup with TikTok indicators */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/[0.04] text-xs">
                  <div className="flex items-center gap-2.5">
                    <TikTokIcon className="w-3.5 h-3.5" />
                    <span className="text-slate-300 font-medium">TikTok Ads Readiness</span>
                  </div>
                  <span className="text-cyan-300 font-semibold">100% Validado</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/[0.04] text-xs">
                  <div className="flex items-center gap-2.5">
                    <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                    <span className="text-slate-300 font-medium">Capacidade BCs</span>
                  </div>
                  <span className="text-slate-200 font-semibold">Até 30 Contas / BC</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/[0.04] text-xs">
                  <div className="flex items-center gap-2.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-slate-300 font-medium">PostFlash (TikTok & Insta)</span>
                  </div>
                  <span className="text-cyan-300 font-semibold">3 Planos Disponíveis</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/[0.04] text-xs">
                  <div className="flex items-center gap-2.5">
                    <Monitor className="w-3.5 h-3.5 text-purple-400" />
                    <span className="text-slate-300 font-medium">Telas & Sites Clonados</span>
                  </div>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Orçamento Aberto
                  </span>
                </div>
              </div>

              {/* Quick direct CTA inside card */}
              <a
                href={SITE_CONFIG.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 transition-all duration-200"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Atendimento Imediato no Discord</span>
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
