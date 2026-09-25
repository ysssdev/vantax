import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowDown, ShieldCheck, Zap, Globe, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { TikTokIcon } from './TikTokLogo';
import { GoogleAdsIcon, GoogleIcon } from './GoogleLogo';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden"
    >
      {/* Background Ambient Glows & Floating Google / TikTok Watermarks */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-cyan-600/15 to-purple-600/15 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-500/10 blur-[90px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-cyan-600/10 blur-[100px] rounded-full" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />

        {/* Ambient floating Google and TikTok logos */}
        <div className="absolute top-24 left-[8%] opacity-20 hover:opacity-40 transition-opacity">
          <GoogleAdsIcon size={46} glow={true} />
        </div>
        <div className="absolute bottom-28 left-[5%] opacity-15">
          <TikTokIcon size={64} glow={true} />
        </div>
        <div className="absolute top-36 right-[8%] opacity-20">
          <GoogleIcon size={52} glow={true} />
        </div>
        <div className="absolute bottom-16 right-[12%] opacity-15">
          <TikTokIcon size={46} glow={true} />
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
            {/* Top Pill / Badge with Google + TikTok */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-blue-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(66,133,244,0.18)]">
              <div className="flex items-center gap-1.5">
                <GoogleAdsIcon className="w-4 h-4" />
                <TikTokIcon className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-semibold tracking-wider text-slate-200">
                VANTAX • Agência Google & TikTok Ads
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Agência Especialista em{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                Google & TikTok Ads
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-10">
              Infraestrutura profissional de tráfego pago: Venda de contas Google Ads aquecidas e verificadas, contas TikTok Ads restabelecidas, Business Centers e automação massiva PostFlash.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-10 flex-wrap">
              <a
                id="hero-btn-google-ads"
                href="#ativos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-blue-200 bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/40 transition-all duration-200 shadow-[0_0_15px_rgba(66,133,244,0.2)]"
              >
                <GoogleAdsIcon className="w-4 h-4" />
                <span>CONTAS GOOGLE ADS</span>
              </a>

              <a
                id="hero-btn-ver-ativos"
                href="#ativos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-cyan-200 bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/40 transition-all duration-200 shadow-[0_0_15px_rgba(6,182,212,0.18)]"
              >
                <TikTokIcon className="w-4 h-4" />
                <span>ATIVOS TIKTOK ADS</span>
              </a>

              <a
                id="hero-btn-ver-postflash"
                href="#postflash"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-purple-300 bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/40 transition-all duration-200 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
              >
                <Zap className="w-4 h-4 text-purple-400" />
                <span>POSTFLASH (AUTOMAÇÃO)</span>
              </a>

              <a
                id="hero-btn-discord"
                href={SITE_CONFIG.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 hover:from-blue-500 hover:via-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-[0_0_25px_rgba(66,133,244,0.35)] hover:shadow-[0_0_35px_rgba(66,133,244,0.5)] transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>COMPRAR CONTAS NO DISCORD</span>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <GoogleAdsIcon className="w-3.5 h-3.5" glow={false} />
                <span>Google Ads Verificado</span>
              </div>
              <div className="flex items-center gap-2">
                <TikTokIcon className="w-3.5 h-3.5" glow={false} />
                <span>TikTok Restabelecidas & BCs</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Contas Aquecidas & Blindadas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Suporte Dedicado no Discord</span>
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
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 blur-xl opacity-75" />

            {/* Glassmorphic Tech Terminal Card */}
            <div className="relative rounded-2xl bg-[#0d1017]/90 border border-white/[0.1] backdrop-blur-xl p-6 shadow-2xl">
              
              {/* Terminal Header with VantaX Logo + Google & TikTok Badges */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden border border-blue-500/40 shadow-[0_0_10px_rgba(66,133,244,0.3)]">
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
                    <span className="text-[10px] text-slate-400 flex items-center gap-1.5">
                      <GoogleAdsIcon className="w-2.5 h-2.5" glow={false} />
                      <TikTokIcon className="w-2.5 h-2.5" glow={false} />
                      Google & TikTok Infra
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ESTOQUE PRONTA ENTREGA
                </div>
              </div>

              {/* Status Metric Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <GoogleAdsIcon className="w-3.5 h-3.5" />
                    <span>Google Ads</span>
                  </div>
                  <div className="text-lg font-bold text-white tracking-tight">Aquecidas / Aged</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Trust Score Alto • CNPJ</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <TikTokIcon className="w-3.5 h-3.5" />
                    <span>TikTok Ads</span>
                  </div>
                  <div className="text-lg font-bold text-white tracking-tight">1x / 2x / 3x & BCs</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">BR • FR • EUA • Chile</div>
                </div>
              </div>

              {/* Real-time telemetry feed mockup with Google & TikTok indicators */}
              <div className="space-y-2 mb-5">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/[0.04] text-xs">
                  <div className="flex items-center gap-2.5">
                    <GoogleAdsIcon className="w-3.5 h-3.5" />
                    <span className="text-slate-300 font-medium">Google Ads Status</span>
                  </div>
                  <span className="text-blue-300 font-semibold">100% Aquecido & Testado</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/[0.04] text-xs">
                  <div className="flex items-center gap-2.5">
                    <TikTokIcon className="w-3.5 h-3.5" />
                    <span className="text-slate-300 font-medium">TikTok Ads Contingência</span>
                  </div>
                  <span className="text-cyan-300 font-semibold">Restabelecidas & BC 30</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/[0.04] text-xs">
                  <div className="flex items-center gap-2.5">
                    <Zap className="w-3.5 h-3.5 text-purple-400" />
                    <span className="text-slate-300 font-medium">PostFlash (TikTok & Insta)</span>
                  </div>
                  <span className="text-purple-300 font-semibold">Automação Massiva</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/[0.04] text-xs">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-slate-300 font-medium">Blindagem Anti-Bloqueio</span>
                  </div>
                  <span className="text-emerald-300 font-semibold">Garantia de Ativação</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-black/40 border border-white/[0.04] text-xs">
                  <div className="flex items-center gap-2.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-slate-300 font-medium">Atendimento da Agência</span>
                  </div>
                  <span className="text-blue-300 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online no Discord
                  </span>
                </div>
              </div>

              {/* Quick direct CTA inside card */}
              <a
                href={SITE_CONFIG.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/40 transition-all duration-200"
              >
                <MessageSquare className="w-3.5 h-3.5 text-blue-300" />
                <span>Atendimento & Venda Direta no Discord</span>
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

