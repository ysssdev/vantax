import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { ModalType } from '../types';
import { SITE_CONFIG } from '../config/site';

interface LegalModalProps {
  type: ModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#0d1017] border border-white/[0.1] p-6 sm:p-8 shadow-2xl text-slate-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'terms' ? (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Termos de Uso
              </h3>
            </div>
            <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
              <p>
                Bem-vindo à plataforma {SITE_CONFIG.brandName}. Ao adquirir e utilizar nossos ativos, você declara estar ciente e de acordo com os termos descritos abaixo:
              </p>
              
              <h4 className="text-base font-semibold text-slate-200">1. Natureza dos Ativos</h4>
              <p>
                Os ativos disponibilizados (contas restabelecidas e Business Centers) são fornecidos no estado em que se encontram, verificados e validados no momento da entrega conforme especificado em cada categoria.
              </p>

              <h4 className="text-base font-semibold text-slate-200">2. Transferência e Suporte</h4>
              <p>
                Após a confirmação da negociação realizada exclusivamente em nosso canal do Discord, os dados de acesso e instruções de segurança são fornecidos. O suporte técnico auxilia no processo inicial de transição.
              </p>

              <h4 className="text-base font-semibold text-slate-200">3. Responsabilidade do Operador</h4>
              <p>
                O comprador é o único responsável pelo conteúdo veiculado, métodos de pagamento associados e respeito às políticas de publicidade da plataforma TikTok.
              </p>

              <h4 className="text-base font-semibold text-slate-200">4. Canal Oficial</h4>
              <p>
                Todas as tratativas financeiras, dúvidas e confirmações de pedidos ocorrem unicamente através do nosso servidor oficial do Discord indicado no site.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Política de Privacidade
              </h3>
            </div>
            <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
              <p>
                A privacidade e discrição dos nossos clientes são pilares fundamentais da operação {SITE_CONFIG.brandName}.
              </p>

              <h4 className="text-base font-semibold text-slate-200">1. Coleta Mínima de Dados</h4>
              <p>
                Não coletamos nem armazenamos informações de cartão de crédito ou dados bancários em nossa landing page. Nenhum formulário de checkout é executado neste ambiente.
              </p>

              <h4 className="text-base font-semibold text-slate-200">2. Comunicações via Discord</h4>
              <p>
                O contato é realizado estritamente pelo Discord. Informações compartilhadas no canal privado de atendimento são tratadas com sigilo e confidencialidade.
              </p>

              <h4 className="text-base font-semibold text-slate-200">3. Cookies e Telemetria</h4>
              <p>
                Utilizamos apenas recursos técnicos estritamente necessários para o carregamento rápido e fluído da página. Não compartilhamos dados com terceiros para fins de marketing abusivo.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-white/[0.08] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-white/[0.08] hover:bg-white/[0.14] transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
