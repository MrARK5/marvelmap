import React from 'react';
import { ActiveTab } from '../types/marvel';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="border-t border-[#1E2536] bg-[#0A0C10] mt-16 py-8 text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('catalog')}>
            <span className="bg-[#E62429] text-white font-extrabold text-xs px-1.5 py-0.5 rounded-sm">
              MARVEL
            </span>
            <span className="font-semibold text-slate-200 text-sm tracking-tight">
              MAP
            </span>
          </div>

          <div className="flex items-center gap-5 text-xs text-slate-400 font-medium">
            <button onClick={() => setActiveTab('catalog')} className="hover:text-white transition-colors">
              Catalog
            </button>
            <button onClick={() => setActiveTab('timeline')} className="hover:text-white transition-colors">
              Timeline
            </button>
            <button onClick={() => setActiveTab('watch-orders')} className="hover:text-white transition-colors">
              Watch Orders
            </button>
            <button onClick={() => setActiveTab('watchlist')} className="hover:text-white transition-colors">
              Watchlist
            </button>
            <button onClick={() => setActiveTab('dashboard')} className="hover:text-white transition-colors">
              Dashboard
            </button>
          </div>

        </div>

        <div className="border-t border-[#1E2536] pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-600">
          <div>
            MarvelMap &bull; Interactive Marvel Watchlist & Chronological Guide
          </div>
          <div>
            All Marvel characters and titles are &copy; Marvel Studios / The Walt Disney Company.
          </div>
        </div>

      </div>
    </footer>
  );
};
