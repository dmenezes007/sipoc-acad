
import React, { useState, useMemo } from 'react';
import * as LucideIcons from 'lucide-react';
import { SIPOC_DATA, CATEGORIES } from './data';
import { Category, SIPOCItem } from './types';
import Sidebar from './components/Sidebar';
import ProcessCard from './components/ProcessCard';
import DetailModal from './components/DetailModal';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(CATEGORIES[0].id);
  const [selectedItem, setSelectedItem] = useState<SIPOCItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    return SIPOC_DATA.filter(item => {
      const matchesCategory = item.category === activeCategory;
      const matchesSearch = item.subprocess.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.macroprocess.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Helper to render dynamic icon
  const ActiveCategoryIcon = useMemo(() => {
    const iconName = CATEGORIES.find(c => c.id === activeCategory)?.icon || 'HelpCircle';
    const Icon = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;
    return Icon;
  }, [activeCategory]);

  // Get current category color
  const activeCategoryColor = useMemo(() => {
    return CATEGORIES.find(c => c.id === activeCategory)?.color || 'from-blue-600 to-indigo-700';
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar - Fixed Left */}
      <Sidebar 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory} 
        categories={CATEGORIES}
      />

      {/* Main Content */}
      <main className="ml-16 md:ml-20 flex-1 p-6 md:p-12 lg:p-16 max-w-[1600px] mx-auto transition-all duration-300">
        
        {/* Header Section */}
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">
              SIPOC <span className="text-blue-600">ACAD</span>
            </h1>
            <p className="text-slate-500 text-lg font-medium max-w-xl">
              Gestão visual de processos da Academia de Propriedade Intelectual, Inovação e Desenvolvimento de Pessoas do INPI.
            </p>
          </div>

          <div className="relative group w-full md:w-80">
            <LucideIcons.Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
            <input 
              type="text" 
              placeholder="Pesquisar subprocesso..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-white shadow-sm"
            />
          </div>
        </header>

        {/* Categories Tab (Mobile/Visual aid) */}
        <div className="flex gap-2 overflow-x-auto pb-6 md:hidden mb-8 scrollbar-hide">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl whitespace-nowrap text-sm font-bold transition-all ${
                activeCategory === cat.id 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-slate-500 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="bento-grid animate-in fade-in slide-in-from-bottom duration-1000">
          {/* Main Category Overview Card */}
          <div className={`bento-item-large glass-card bg-gradient-to-br ${activeCategoryColor} p-10 rounded-[40px] text-white flex flex-col justify-center relative overflow-hidden group`}>
            <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
               <LucideIcons.Cpu className="w-64 h-64" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                   <ActiveCategoryIcon className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold tracking-wide uppercase opacity-90 line-clamp-1">{activeCategory}</h2>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-[1.1]">
                Catálogo de Processos
              </h3>
              
              <p className="text-white/80 text-lg max-w-lg mb-8 leading-relaxed">
                Explore a matriz SIPOC completa para garantir a excelência na gestão de processos da Academia do INPI.
              </p>

              <div className="flex items-center gap-4">
                <div className="px-5 py-3 bg-white/90 text-slate-900 rounded-2xl font-bold shadow-lg flex items-center gap-2 cursor-default">
                  <LucideIcons.LayoutGrid className="w-5 h-5" /> {filteredData.length} Processos
                </div>
                <div className="text-white/70 text-sm font-medium">
                  Matriz SIPOC atualizada 2026
                </div>
              </div>
            </div>
          </div>

          {/* Process Cards */}
          {filteredData.map((item, idx) => (
            <ProcessCard 
              key={item.id} 
              item={item} 
              onClick={setSelectedItem}
              className={idx === 0 ? "bento-item-medium" : ""}
            />
          ))}

          {/* Empty State */}
          {filteredData.length === 0 && (
            <div className="col-span-full py-20 text-center glass-card rounded-[40px] border-dashed border-2 border-slate-200">
              <div className="bg-slate-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <LucideIcons.FileSearch className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Nenhum processo encontrado</h3>
              <p className="text-slate-500">Tente ajustar sua busca ou mudar de categoria.</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <footer className="mt-24 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm font-medium">
           <div className="flex items-center gap-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
             Sistema de Gestão por Processos - Academia INPI
           </div>
           <div>
             Desenvolvido pela Engenharia de Front-end & UX © 2024
           </div>
        </footer>
      </main>

      {/* Details Modal */}
      <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
};

export default App;
