
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SIPOCItem } from '../types';

interface DetailModalProps {
  item: SIPOCItem | null;
  onClose: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const Section = ({ title, icon: Icon, items }: { title: string, icon: any, items: string[] }) => (
    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-sm transition-all">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="w-5 h-5 text-blue-500" />
        <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wider">{title}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((it, idx) => (
          <span key={idx} className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs text-slate-600 font-medium">
            {it}
          </span>
        ))}
        {items.length === 0 && <span className="text-slate-400 italic text-xs">Nenhum registro</span>}
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-[32px] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="p-8 border-b border-slate-100 bg-slate-50/50 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold rounded-full uppercase">
                {item.category}
              </span>
              <span className="text-slate-400 text-sm">{item.macroprocess}</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight leading-none mb-4">{item.subprocess}</h2>
            <p className="text-slate-500 text-sm max-w-2xl font-medium italic border-l-4 border-blue-500 pl-4">
              "{item.needP3}"
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white rounded-full transition-colors shadow-sm"
          >
            <LucideIcons.X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        {/* Content - SIPOC Structure */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Section title="Fornecedores (S)" icon={LucideIcons.Truck} items={item.suppliers} />
            <Section title="Entradas (I)" icon={LucideIcons.ArrowRightCircle} items={item.inputs} />
            <Section title="Produtos (P)" icon={LucideIcons.Package} items={item.products} />
            <Section title="Saídas (O)" icon={LucideIcons.LogOut} items={item.outputs} />
            <Section title="Clientes (C)" icon={LucideIcons.Users2} items={item.customers} />
            {item.requirements && item.requirements.length > 0 && (
              <Section title="Requisitos Fornecedores" icon={LucideIcons.ClipboardList} items={item.requirements} />
            )}
            {item.customerRequirements && item.customerRequirements.length > 0 && (
              <Section title="Requisitos Clientes" icon={LucideIcons.ClipboardCheck} items={item.customerRequirements} />
            )}
            <Section title="KPIs / Indicadores" icon={LucideIcons.LineChart} items={item.kpis} />
            <Section title="Sistemas / Ferramentas" icon={LucideIcons.Monitor} items={item.tools} />
            {item.actors && item.actors.length > 0 && (
              <Section title="Atores do Fluxo" icon={LucideIcons.UserCheck} items={item.actors} />
            )}
            {item.owner && (
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <LucideIcons.Building2 className="w-5 h-5 text-blue-500" />
                  <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wider">Área Dona</h4>
                </div>
                <span className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs text-slate-600 font-medium">
                  {item.owner}
                </span>
              </div>
            )}
          </div>

          <div className="mt-8 p-6 rounded-3xl bg-blue-50 border border-blue-100">
            <div className="flex items-center gap-2 mb-4 text-blue-800">
              <LucideIcons.Scale className="w-5 h-5" />
              <h4 className="font-bold uppercase text-sm tracking-widest">Base Legal e Regulamentações</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.regulations.map((reg, i) => (
                <span key={i} className="text-sm text-blue-700 bg-white/50 px-4 py-2 rounded-xl border border-blue-200/50">
                  {reg}
                </span>
              ))}
              {item.regulations.length === 0 && (
                <span className="text-blue-600 italic text-sm">Nenhuma regulamentação especificada</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
