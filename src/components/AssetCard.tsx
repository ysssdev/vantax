import React from 'react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Building2, 
  Globe2, 
  Layers, 
  Check, 
  MessageSquare,
  ArrowUpRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { TikTokAsset } from '../types';
import { SITE_CONFIG } from '../config/site';
import { TikTokIcon } from './TikTokLogo';
import { GoogleAdsIcon, GoogleIcon } from './GoogleLogo';

interface AssetCardProps {
  asset: TikTokAsset;
}

export const AssetCard: React.FC<AssetCardProps> = ({ asset }) => {
  const isGoogle = asset.platform === 'google' || asset.category === 'google_ads';

  // Select icon based on asset.iconName
  const renderIcon = () => {
    switch (asset.iconName) {
      case 'google':
        return <GoogleIcon className="w-5 h-5" />;
      case 'google-ads':
        return <GoogleAdsIcon className="w-5 h-5" />;
      case 'shield-check':
        return isGoogle ? <ShieldCheck className="w-5 h-5 text-blue-400" /> : <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'shield-alert':
        return <ShieldAlert className="w-5 h-5 text-purple-400" />;
      case 'building':
        return <Building2 className="w-5 h-5 text-blue-400" />;
      case 'globe':
        return <Globe2 className="w-5 h-5 text-cyan-300" />;
      default:
        return isGoogle ? <GoogleAdsIcon className="w-5 h-5" /> : <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  // Availability badge styling
  const getBadgeStyles = () => {
    switch (asset.availabilityColor) {
      case 'emerald':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'cyan':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'purple':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'amber':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'blue':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default:
        return 'bg-slate-500/10 text-slate-300 border-slate-500/20';
    }
  };

  return (
    <div
      id={`card-${asset.id}`}
      className={`group relative flex flex-col justify-between rounded-2xl bg-[#0c0e17]/85 border transition-all duration-300 backdrop-blur-xl p-6 hover:shadow-[0_10px_35px_rgba(6,182,212,0.14)] overflow-hidden ${
        asset.highlight
          ? isGoogle
            ? 'border-blue-500/40 shadow-[0_0_20px_rgba(66,133,244,0.12)]'
            : 'border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.08)]'
          : 'border-white/[0.08] hover:border-cyan-500/30'
      }`}
    >
      {/* Background Watermark on hover */}
      <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none">
        {isGoogle ? (
          <GoogleAdsIcon size={120} glow={false} />
        ) : (
          <TikTokIcon size={120} glow={false} />
        )}
      </div>

      {/* Subtle top neon border line */}
      <div 
        className={`absolute inset-x-0 top-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl ${
          isGoogle 
            ? 'bg-gradient-to-r from-transparent via-blue-500/50 to-transparent' 
            : 'bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent'
        }`} 
      />

      <div>
        {/* Top bar: Icon + Availability Badge + Highlight flag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:border-cyan-500/30 transition-colors">
              {renderIcon()}
            </div>
            {asset.highlight && (
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold border ${
                isGoogle 
                  ? 'bg-blue-500/15 text-blue-300 border-blue-500/25' 
                  : 'bg-purple-500/15 text-purple-300 border-purple-500/25'
              }`}>
                <Sparkles className="w-3 h-3" />
                Popular
              </span>
            )}
          </div>

          {/* Availability Badge */}
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${getBadgeStyles()}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {asset.availability}
          </span>
        </div>

        {/* Asset Name Highlighted */}
        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors mb-1.5 flex items-center justify-between">
          <span>{asset.name}</span>
          {isGoogle ? (
            <GoogleAdsIcon className="w-4 h-4 opacity-75 group-hover:opacity-100 transition-opacity" />
          ) : (
            <TikTokIcon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          )}
        </h3>

        {/* Type & Country/Region Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/[0.08] text-xs font-medium text-slate-300">
            {isGoogle ? (
              <GoogleAdsIcon className="w-3 h-3" glow={false} />
            ) : (
              <TikTokIcon className="w-3 h-3" glow={false} />
            )}
            {asset.type}
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300">
            <MapPin className="w-3 h-3" />
            {asset.country}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-400 font-normal leading-relaxed mb-5">
          {asset.description}
        </p>

        {/* Informações Resumidas (Summary Bullets) */}
        <div className="pt-4 border-t border-white/[0.06] mb-5 space-y-2.5">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block mb-1">
            Informações do Ativo:
          </span>
          {asset.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isGoogle ? 'text-blue-400' : 'text-cyan-400'}`} />
              <span className="leading-snug">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Area: Optional Price Field + COMPRAR AGORA Button */}
      <div className="pt-4 border-t border-white/[0.06] mt-2 relative z-10">
        {/* Optional Price Field */}
        <div className="flex items-center justify-between mb-3 text-xs">
          <span className="text-slate-400 font-medium">Condição / Valor:</span>
          <span className={`font-semibold ${isGoogle ? 'text-blue-300' : 'text-cyan-300'}`}>
            {asset.priceText || "Consulte no Discord"}
          </span>
        </div>

        {/* Button "COMPRAR AGORA" */}
        <a
          id={`btn-comprar-${asset.id}`}
          href={SITE_CONFIG.discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white transition-all duration-200 shadow-md transform active:scale-[0.99] ${
            isGoogle
              ? 'bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 hover:from-blue-500 hover:via-sky-400 hover:to-indigo-500 shadow-blue-500/20 hover:shadow-blue-500/35'
              : 'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 shadow-cyan-500/15 hover:shadow-cyan-500/30'
          }`}
        >
          <MessageSquare className="w-4 h-4" />
          <span>COMPRAR NO DISCORD</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-200" />
        </a>
      </div>
    </div>
  );
};

