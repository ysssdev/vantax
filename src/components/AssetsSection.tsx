import React, { useState } from 'react';
import { TIKTOK_ASSETS } from '../data/assets';
import { AssetCard } from './AssetCard';
import { AssetCategory } from '../types';
import { Layers, ShieldCheck, Building2 } from 'lucide-react';
import { TikTokIcon } from './TikTokLogo';

export const AssetsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<AssetCategory>('all');

  const filteredAssets = TIKTOK_ASSETS.filter((asset) => {
    if (selectedCategory === 'all') return true;
    return asset.category === selectedCategory;
  });

  return (
    <section id="ativos" className="relative py-24 md:py-32 scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-cyan-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header with TikTok Branding */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(6,182,212,0.12)]">
            <TikTokIcon className="w-3.5 h-3.5" />
            <span>Catálogo Oficial TikTok Ads • VantaX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Escolha seu ativo
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Opções selecionadas para contingência, tráfego internacional e escala no TikTok Ads.
          </p>

          {/* Quick Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06] hover:bg-white/[0.06]'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Todos os Ativos ({TIKTOK_ASSETS.length})</span>
            </button>

            <button
              onClick={() => setSelectedCategory('restabelecida')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'restabelecida'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06] hover:bg-white/[0.06]'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Restabelecidas (3)</span>
            </button>

            <button
              onClick={() => setSelectedCategory('business_center')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === 'business_center'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                  : 'bg-white/[0.03] text-slate-400 hover:text-white border border-white/[0.06] hover:bg-white/[0.06]'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Business Centers (4)</span>
            </button>
          </div>
        </div>

        {/* 7 Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredAssets.map((asset) => (
            <AssetCard key={asset.id} asset={asset} />
          ))}
        </div>

        {/* Informative Sub-banner */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400">
            Precisa de um ativo personalizado ou quantidade específica? Entre em contato diretamente no nosso Discord para pacotes sob demanda.
          </p>
        </div>

      </div>
    </section>
  );
};
