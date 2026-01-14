
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { SIPOCItem } from '../types';

interface ProcessCardProps {
  item: SIPOCItem;
  className?: string;
  onClick: (item: SIPOCItem) => void;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ item, className = '', onClick }) => {
  return (
    <div 
      onClick={() => onClick(item)}
      className={`glass-card p-6 rounded-3xl cursor-pointer hover:shadow-xl transition-all duration-500 border border-slate-100 group flex flex-col justify-between overflow-hidden relative ${className}`}
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <LucideIcons.Activity className="w-24 h-24" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
            {item.category}
          </span>
          <span className="text-slate-400 text-xs">• {item.subprocess.length > 20 ? item.subprocess.substring(0, 20) + '...' : item.subprocess}</span>
        </div>
        
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
          {item.subprocess}
        </h3>
        <p className="text-sm text-slate-500 line-clamp-3 mb-4">
          {item.needP3}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100/50 relative z-10">
        <div className="flex -space-x-2">
          {item.actors && item.actors.slice(0, 3).map((actor, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[8px] font-bold text-slate-600 uppercase">
              {actor.substring(0, 2)}
            </div>
          ))}
          {item.actors && item.actors.length > 3 && (
            <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-400">
              +{item.actors.length - 3}
            </div>
          )}
          {(!item.actors || item.actors.length === 0) && (
            <div className="text-slate-400 text-xs italic">Processos {item.type}</div>
          )}
        </div>
        
        <div className="flex items-center text-blue-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
          Ver Detalhes <LucideIcons.ChevronRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
