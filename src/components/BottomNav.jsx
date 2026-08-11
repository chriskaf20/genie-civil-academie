import React from 'react';
import { BookOpen, Layers, Calculator, BookMarked } from 'lucide-react';

export default function BottomNav({ activeTab, onTabSelect }) {
  const tabs = [
    { id: 'cours', label: 'Cours', icon: BookOpen },
    { id: 'modules', label: '35 Modules', icon: Layers },
    { id: 'outils', label: 'Outils', icon: Calculator },
    { id: 'glossaire', label: 'Glossaire', icon: BookMarked },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 border-t border-slate-800/80 backdrop-blur-md px-2 py-1.5 flex justify-around items-center shadow-2xl">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabSelect(tab.id)}
            className={`flex flex-col items-center py-1 px-3 rounded-xl transition-all ${
              isActive
                ? 'text-sky-400 font-bold bg-sky-500/10 ring-1 ring-sky-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
            <span className="text-[10px] mt-1 font-medium">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
