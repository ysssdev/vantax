import React from 'react';
import { MousePointerClick, MessageSquare, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Defina sua Necessidade",
      description: "Escolha entre nossa infraestrutura de ativos (Contas e BCs), automação PostFlash (TikTok & Insta) ou assessoria de escala.",
      icon: <MousePointerClick className="w-6 h-6 text-cyan-400" />,
      accent: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/30"
    },
    {
      number: "02",
      title: "Fale com a Agência no Discord",
      description: "Clique no botão e seja direcionado instantaneamente para nosso servidor oficial no Discord com atendimento direto da equipe.",
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      accent: "from-purple-500/20 to-cyan-500/20",
      border: "border-purple-500/30"
    },
    {
      number: "03",
      title: "Ativação & Escala Imediata",
      description: "Receba seus acessos, instruções de contingência e liberação imediata para rodar campanhas com máxima segurança.",
      icon: <CheckCircle className="w-6 h-6 text-emerald-400" />,
      accent: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/30"
    }
  ];

  return (
    <section id="como-funciona" className="relative py-20 md:py-28 bg-[#090b12]/50 border-y border-white/[0.05] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Fluxo da Agência
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Como Funciona o Atendimento
          </h2>
          <p className="text-slate-400 text-base">
            Processo ágil, discreto e desburocratizado em 3 etapas simples pelo Discord.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative rounded-2xl bg-[#0c0e17] border border-white/[0.08] p-8 flex flex-col justify-between hover:border-white/[0.15] transition-all duration-300 group"
            >
              {/* Step indicator top */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono">
                    {step.number}
                  </span>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${step.accent} border ${step.border}`}>
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.04] text-xs font-medium text-slate-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60" />
                <span>Etapa {index + 1} de 3</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
