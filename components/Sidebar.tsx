
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Category } from '../types';

interface SidebarProps {
  activeCategory: Category;
  onSelectCategory: (category: Category) => void;
  categories: { id: Category; label: string; icon: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory, categories }) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-16 md:w-20 bg-white border-r border-slate-200 flex flex-col items-center py-8 gap-8 z-50">
      <div className="bg-blue-600 p-2 rounded-xl mb-4">
        <LucideIcons.Shield className="text-white w-6 h-6 md:w-8 md:h-8" />
      </div>
      
      <nav className="flex flex-col gap-6">
        {categories.map((cat) => {
          const IconComponent = (LucideIcons as any)[cat.icon] || LucideIcons.HelpCircle;
          const isActive = activeCategory === cat.id;
          
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`group relative p-3 rounded-2xl transition-all duration-300 ${
                isActive 
                  ? 'bg-blue-50 text-blue-600 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
              }`}
              title={cat.label}
            >
              <IconComponent className={`w-6 h-6 transition-transform ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
              <span className={`absolute left-full ml-4 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[60]`}>
                {cat.label}
              </span>
              {isActive && (
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-blue-600 rounded-r-full" />
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto">
        <button className="p-3 text-slate-400 hover:text-slate-600 transition-colors">
          <LucideIcons.Settings className="w-6 h-6" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
