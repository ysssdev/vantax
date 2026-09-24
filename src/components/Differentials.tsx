import React from 'react';
import { Zap, Lock, MessageSquare, Package } from 'lucide-react';

export const Differentials: React.FC = () => {
  const items = [
    {
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      title: "⚡ Ativação Imediata",
      description: "Liberação rápida de contas e licenças sem enrolação direto no Discord.",
      gradient: "from-amber-500/10 to-transparent",
      border: "hover:border-amber-500/30"
    },
    {
      icon: <Lock className="w-6 h-6 text-cyan-400" />,
      title: "🛡️ Contingência Anti-Bloqueio",
      description: "Ativos testados, restabelecidos e preparados para suportar escala de tráfego.",
      gradient: "from-cyan-500/10 to-transparent",
      border: "hover:border-cyan-500/30"
    },
    {
      icon: <Package className="w-6 h-6 text-blue-400" />,
      title: "🚀 Automação PostFlash",
      description: "Tecnologia de ponta para postagens em massa no TikTok e Instagram.",
      gradient: "from-blue-500/10 to-transparent",
      border: "hover:border-blue-500/30"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      title: "💬 Atendimento VIP no Discord",
      description: "Comunicação transparente e suporte individual com nosso time técnico.",
      gradient: "from-purple-500/10 to-transparent",
      border: "hover:border-purple-500/30"
    }
  ];

  return (
    <section id="diferenciais" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Por que escolher nossa agência
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Diferenciais VantaX
          </h2>
          <p className="text-slate-400 text-base">
            Compromisso inegociável com agilidade, estabilidade e escala contínua no ecossistema TikTok.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl bg-[#0c0e17]/90 border border-white/[0.08] p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg ${item.border} flex flex-col justify-between`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/[0.05] text-[11px] font-medium text-slate-500">
                Padrão Profissional
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
