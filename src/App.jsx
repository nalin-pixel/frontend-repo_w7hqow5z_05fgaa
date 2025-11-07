import React from 'react'
import CosmicBackground from './components/CosmicBackground'
import DigitalGlobe from './components/DigitalGlobe'
import AIConnections from './components/AIConnections'
import EthicalFigure from './components/EthicalFigure'

export default function App() {
  return (
    <div className="min-h-screen relative text-white font-[Inter]">
      {/* Background cosmos */}
      <CosmicBackground />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col">
        {/* Header */}
        <header className="w-full px-6 pt-8 md:pt-10 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
            <span className="text-emerald-300">Anna</span>
            <span className="text-white/90"> Corps</span>
          </h1>
          <span className="text-xs md:text-sm text-white/70">Global Halal AI Empire</span>
        </header>

        {/* Hero Globe with Patterns */}
        <section className="mt-4 md:mt-2">
          <DigitalGlobe />
        </section>

        {/* AI Agent Nodes */}
        <section className="mt-2 md:-mt-2">
          <AIConnections />
        </section>

        {/* Ethical Figure with Sprout */}
        <section className="mt-2 md:mt-4">
          <EthicalFigure />
        </section>

        {/* Footer */}
        <footer className="px-6 pb-10 text-center text-white/60 text-xs">
          Sapphire blue, gold, white, and emerald green — crafted for barakah and balance
        </footer>
      </div>

      {/* Subtle top gradient overlay to add cinematic depth without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#07122c]/60 via-transparent to-transparent" />
    </div>
  )
}
