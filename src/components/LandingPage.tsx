import React from 'react';
import { SandboxMode } from '../types';
import { Layout, Building2, Layers, Sparkles, Clock, Compass, HelpCircle, Save } from 'lucide-react';

interface LandingPageProps {
  onSelectMode: (mode: SandboxMode, loadSaved: boolean) => void;
  savedCityCount: number;
  savedFloorCount: number;
  onClearSaved: (mode: SandboxMode) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onSelectMode,
  savedCityCount,
  savedFloorCount,
  onClearSaved,
}) => {
  return (
    <div
      id="landing-gateway-outer"
      className="w-full min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-6 relative overflow-hidden"
    >
      
      {/* Dynamic Ambient Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-15%] w-[50%] h-[50%] bg-indigo-900/15 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. Header Bar */}
      <header className="max-w-7xl w-full mx-auto flex items-center justify-between py-2 border-b border-wrap border-slate-900 z-10">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-blue-500 animate-pulse" />
          <span className="font-mono text-sm font-black tracking-widest text-slate-100 uppercase">
            ArshVault
          </span>
        </div>
        <div className="text-[10px] font-mono font-semibold bg-blue-950/80 border border-blue-900 text-blue-400 px-3 py-1.5 rounded-full uppercase tracking-wider">
          v2.5 Live Web Engine
        </div>
      </header>

      {/* 2. Main Center Hero Canvas */}
      <main className="max-w-4xl w-full mx-auto my-auto py-12 flex flex-col gap-12 z-10 text-center">
        {/* Typographical Headings */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Welcome to <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">ArshVault</span> <br />
            <span className="text-2xl md:text-3xl font-medium text-slate-300">
              3D Blueprint Sandbox Planner
            </span>
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Construct macro structures or micro interiors on an interactive 2D coordinate system. 
            Visualize your design instantly in a real-time, light-reactive 3D viewport.
          </p>
        </div>

        {/* Dynamic Sandbox Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto w-full">
          {/* Mode CARD A: City Planning Mode */}
          <div className="group rounded-2xl bg-slate-900 border border-slate-800/80 p-6 flex flex-col justify-between gap-6 transition-all hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/[0.04]">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <Building2 className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                City Planning Mode
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Design macro-scale industrial centers, residential blocks, train networks, bridges, 
                and street lighting. Best of all, activate Cyberpunk Night to watch tower neon lights glow.
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-800">
              {/* Draft Status Indicator */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">SAVED ELEMENTS:</span>
                {savedCityCount > 0 ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <Save className="w-3.5 h-3.5" />
                    {savedCityCount} UNITS DETECTED
                  </span>
                ) : (
                  <span className="text-slate-600">EMPTY DRAFT</span>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 font-mono">
                <button
                  onClick={() => onSelectMode('city', false)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs text-center transition-colors cursor-pointer block"
                >
                  START FRESH
                </button>
                {savedCityCount > 0 && (
                  <button
                    onClick={() => onSelectMode('city', true)}
                    className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-emerald-400 font-bold text-xs border border-slate-700 transition-colors cursor-pointer"
                    title="Load recent draft from localStorage"
                  >
                    LOAD RECENT
                  </button>
                )}
                {savedCityCount > 0 && (
                  <button
                    onClick={() => onClearSaved('city')}
                    className="px-2.5 py-2.5 rounded-xl bg-slate-950 hover:bg-rose-950 text-slate-600 hover:text-rose-400 text-xs transition-colors cursor-pointer"
                    title="Delete saved draft"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Mode CARD B: Floor Planning Mode */}
          <div className="group rounded-2xl bg-slate-900 border border-slate-800/80 p-6 flex flex-col justify-between gap-6 transition-all hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/[0.04]">
            <div className="space-y-3">
              <div className="p-3 w-fit rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                <Layout className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                Floor Planning Mode
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed font-mono">
                Draft micro interior floorplans. Segment walls, arches, glass-sliding panels, 
                and arrange sectional sofas, kitchen counters, bookshelf towers, and Monstera plants.
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-800">
              {/* Draft Status Indicator */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500">SAVED ELEMENTS:</span>
                {savedFloorCount > 0 ? (
                  <span className="text-indigo-400 font-bold flex items-center gap-1">
                    <Save className="w-3.5 h-3.5" />
                    {savedFloorCount} TILES DETECTED
                  </span>
                ) : (
                  <span className="text-slate-600">EMPTY DRAFT</span>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 font-mono">
                <button
                  onClick={() => onSelectMode('floor', false)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs text-center transition-all cursor-pointer"
                >
                  START FRESH
                </button>
                {savedFloorCount > 0 && (
                  <button
                    onClick={() => onSelectMode('floor', true)}
                    className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-indigo-400 font-bold text-xs border border-slate-700 transition-colors cursor-pointer"
                    title="Load recent draft from localStorage"
                  >
                    LOAD RECENT
                  </button>
                )}
                {savedFloorCount > 0 && (
                  <button
                    onClick={() => onClearSaved('floor')}
                    className="px-2.5 py-2.5 rounded-xl bg-slate-950 hover:bg-rose-950 text-slate-600 hover:text-rose-400 text-xs transition-colors cursor-pointer"
                    title="Delete saved draft"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bullet Specs highlight list */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left p-4 rounded-xl bg-slate-950 border border-slate-900 max-w-3xl mx-auto w-full font-mono text-[10.5px]">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <div className="flex flex-col">
              <span className="text-white font-bold uppercase">Dynamic Sky</span>
              <span className="text-slate-500">Midnight emission</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <div className="flex flex-col">
              <span className="text-white font-bold uppercase">Chaos Engine</span>
              <span className="text-slate-500">Generative layouts</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-cyan-400" />
            <div className="flex flex-col">
              <span className="text-white font-bold uppercase">Multi-Story</span>
              <span className="text-slate-500">Layers 0, 1, 2 support</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Save className="w-4 h-4 text-emerald-400" />
            <div className="flex flex-col">
              <span className="text-white font-bold uppercase">Auto-Secure</span>
              <span className="text-slate-500 font-mono">Browser LocalSync</span>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Footer branding copyright */}
      <footer className="text-center font-mono text-[10px] text-slate-600 uppercase py-2 tracking-widest z-10">
        ArshVault sandbox • Google AI Studio build • sandbox isolated
      </footer>
    </div>
  );
};
