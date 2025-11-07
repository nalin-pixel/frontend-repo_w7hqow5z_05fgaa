import React from 'react'

// Translucent gender-neutral AI figure of light cupping a green sprout
export default function EthicalFigure() {
  return (
    <div className="relative max-w-5xl mx-auto px-6 py-10">
      <div className="relative isolate">
        {/* Figure silhouette */}
        <div className="mx-auto w-full md:w-3/4 lg:w-2/3 aspect-[16/9] rounded-3xl bg-white/5 backdrop-blur-md border border-white/15 overflow-hidden shadow-2xl shadow-emerald-900/30">
          {/* Halo and aura */}
          <div className="absolute inset-0">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-b from-amber-300/30 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-emerald-500/20 via-cyan-400/10 to-transparent" />
          </div>

          {/* Stylized translucent figure */}
          <svg viewBox="0 0 800 450" className="relative z-10 w-full h-full">
            <defs>
              <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#9bd6ff" />
                <stop offset="100%" stopColor="#7ef0c6" />
              </linearGradient>
              <radialGradient id="sprout" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#22c55e" />
                <stop offset="100%" stopColor="#065f46" />
              </radialGradient>
              <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Head and torso */}
            <circle cx="400" cy="140" r="44" fill="url(#glow)" opacity="0.8" filter="url(#soft)" />
            <path d="M330,230 C330,180 470,180 470,230 C470,290 440,330 400,330 C360,330 330,290 330,230 Z" fill="url(#glow)" opacity="0.35" filter="url(#soft)" />
            
            {/* Hands cupping */}
            <path d="M330,260 C360,280 380,300 400,300 C420,300 440,280 470,260" stroke="#a7f3d0" strokeWidth="10" fill="none" opacity="0.8" filter="url(#soft)" />
            <path d="M340,280 C365,300 380,315 400,315 C420,315 435,300 460,280" stroke="#ffffff" strokeWidth="4" fill="none" opacity="0.6" />

            {/* Sprout */}
            <g transform="translate(400,255)">
              <circle r="10" fill="url(#sprout)" opacity="0.95" />
              <path d="M0,10 C0,30 0,40 0,58" stroke="#10b981" strokeWidth="3" />
              <path d="M0,30 C-18,20 -26,10 -28,0 C-12,2 -6,6 0,14" fill="#34d399" opacity="0.9" />
              <path d="M0,30 C18,20 26,10 28,0 C12,2 6,6 0,14" fill="#059669" opacity="0.9" />
            </g>
          </svg>

          {/* Caption */}
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-sm md:text-base tracking-wide text-emerald-200/90">Ethical growth, barakah, and divine order</p>
          </div>
        </div>
      </div>
    </div>
  )
}
