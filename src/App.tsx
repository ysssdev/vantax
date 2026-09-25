import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AgencyServicesSection } from './components/AgencyServicesSection';
import { AssetsSection } from './components/AssetsSection';
import { PostFlashSection } from './components/PostFlashSection';
import { HowItWorks } from './components/HowItWorks';
import { Differentials } from './components/Differentials';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ModalType } from './types';
import { MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from './config/site';

export default function App() {
  const [legalModal, setLegalModal] = useState<ModalType>(null);

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Navigation Bar */}
      <Navbar onOpenLegal={(type) => setLegalModal(type)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Section: Soluções da Agência Google & TikTok */}
        <AgencyServicesSection />

        {/* Section: Contas & Ativos (Google Ads & TikTok Ads) */}
        <AssetsSection />

        {/* Section: PostFlash (3 Planos de Automação de Postagens TikTok & Instagram) */}
        <PostFlashSection />

        {/* Section: Como Funciona (3 steps) */}
        <HowItWorks />

        {/* Section: Diferenciais (4 cards) */}
        <Differentials />

        {/* Section: Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setLegalModal(type)} />

      {/* Floating Discord Quick-Action Button */}
      <aside aria-label="Atendimento rápido da agência" className="fixed bottom-6 right-6 z-40">
        <a
          id="floating-discord-btn"
          href={SITE_CONFIG.discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#101422] border border-cyan-500/40 text-cyan-300 hover:text-white hover:bg-cyan-600 hover:border-cyan-400 transition-all duration-300 shadow-[0_4px_25px_rgba(6,182,212,0.3)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.5)] transform hover:scale-105"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-cyan-400 group-hover:text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs font-bold tracking-wide uppercase hidden sm:inline-block">
            Discord Online
          </span>
        </a>
      </aside>

      {/* Legal Modal (Terms of Service & Privacy Policy) */}
      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />

    </div>
  );
}
