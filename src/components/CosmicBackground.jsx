import React from 'react'

// A deep cosmic sapphire gradient with twinkling stars
export default function CosmicBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Cosmic gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(10,25,61,0.9),#050b1a_70%)]"
      />

      {/* Nebula glows */}
      <div aria-hidden className="pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-40 bg-gradient-to-br from-sky-600/40 via-indigo-700/40 to-blue-900/60" />
        <div className="absolute -bottom-32 -right-24 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-emerald-600/30 via-cyan-500/30 to-indigo-800/60" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-30 bg-gradient-to-b from-blue-500/20 to-emerald-400/20" />
      </div>

      {/* Animated starfield */}
      <Starfield count={140} />
    </div>
  )
}

function Starfield({ count = 120 }) {
  const stars = Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * 2 + 0.5
    const left = Math.random() * 100
    const top = Math.random() * 100
    const delay = Math.random() * 8
    const duration = 4 + Math.random() * 6
    const color = Math.random() > 0.7 ? 'bg-emerald-300' : 'bg-blue-100'
    return (
      <span
        key={i}
        className={`absolute rounded-full ${color} shadow-[0_0_8px_rgba(255,255,255,0.6)]`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          top: `${top}%`,
          opacity: 0.9,
          animation: `twinkle ${duration}s ease-in-out ${delay}s infinite` as any,
        }}
      />
    )
  })

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      {stars}
      <style>{`
        @keyframes twinkle {
          0%, 100% { transform: scale(0.9); opacity: .5; }
          50% { transform: scale(1.3); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
