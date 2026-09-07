import React from 'react';

interface TikTokIconProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export const TikTokIcon: React.FC<TikTokIconProps> = ({ 
  className = "w-5 h-5", 
  size, 
  glow = true 
}) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 ${glow ? 'drop-shadow-[0_0_8px_rgba(37,244,238,0.4)]' : ''} ${className}`}
      style={size ? { width: size, height: size } : undefined}
    >
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Red/Pink Layer Offset */}
        <path
          d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.67a2.89 2.89 0 0 1-2.88 2.882 2.89 2.89 0 0 1-2.89-2.882 2.89 2.89 0 0 1 2.89-2.882c.408 0 .796.082 1.15.23V9.435a6.326 6.326 0 0 0-1.15-.106 6.327 6.327 0 0 0-6.323 6.33 6.327 6.327 0 0 0 6.323 6.33 6.327 6.327 0 0 0 6.324-6.33V8.847a8.212 8.212 0 0 0 3.77.925V6.686z"
          fill="#FE2C55"
          transform="translate(0.6, 0.6)"
          opacity="0.9"
        />
        {/* Cyan/Blue Layer Offset */}
        <path
          d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.67a2.89 2.89 0 0 1-2.88 2.882 2.89 2.89 0 0 1-2.89-2.882 2.89 2.89 0 0 1 2.89-2.882c.408 0 .796.082 1.15.23V9.435a6.326 6.326 0 0 0-1.15-.106 6.327 6.327 0 0 0-6.323 6.33 6.327 6.327 0 0 0 6.323 6.33 6.327 6.327 0 0 0 6.324-6.33V8.847a8.212 8.212 0 0 0 3.77.925V6.686z"
          fill="#25F4EE"
          transform="translate(-0.6, -0.6)"
          opacity="0.9"
        />
        {/* White Center Primary Layer */}
        <path
          d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.67a2.89 2.89 0 0 1-2.88 2.882 2.89 2.89 0 0 1-2.89-2.882 2.89 2.89 0 0 1 2.89-2.882c.408 0 .796.082 1.15.23V9.435a6.326 6.326 0 0 0-1.15-.106 6.327 6.327 0 0 0-6.323 6.33 6.327 6.327 0 0 0 6.323 6.33 6.327 6.327 0 0 0 6.324-6.33V8.847a8.212 8.212 0 0 0 3.77.925V6.686z"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );
};

export const TikTokBadge: React.FC<{ text?: string; className?: string }> = ({ 
  text = "TikTok Ads & Contingência",
  className = "" 
}) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-cyan-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(37,244,238,0.12)] ${className}`}>
      <TikTokIcon className="w-3.5 h-3.5" />
      <span className="text-xs font-semibold tracking-wide text-slate-200">
        {text}
      </span>
    </div>
  );
};
