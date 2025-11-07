import React from 'react'
import { Coins, HandHeart, Megaphone, MessageSquare } from 'lucide-react'

// Crescent-shaped AI nodes with crystalline data streams
export default function AIConnections() {
  const nodes = [
    { label: 'Finance', Icon: Coins, color: 'from-amber-300 to-yellow-500' },
    { label: 'Donation', Icon: HandHeart, color: 'from-emerald-300 to-green-500' },
    { label: 'Complaint', Icon: MessageSquare, color: 'from-sky-300 to-cyan-500' },
    { label: 'Marketing', Icon: Megaphone, color: 'from-indigo-300 to-blue-500' },
  ]

  return (
    <div className="relative max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {nodes.map(({ label, Icon, color }, i) => (
          <div key={label} className="relative group">
            {/* Crescent node */}
            <div className="relative h-32 flex items-center justify-center">
              <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${color} opacity-70 blur-2xl`} aria-hidden />
              <div className="relative w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl shadow-blue-900/30">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-xl" aria-hidden />
                <div className="absolute inset-0 rounded-full" style={{ boxShadow: 'inset -18px 0 28px rgba(255,215,130,0.20)' }} />
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-transparent border-2 border-yellow-300/70" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2">
                  <Icon className="text-white" size={22} />
                  <span className="text-xs font-medium tracking-wide text-white/90">{label}</span>
                </div>
              </div>
            </div>
            {/* Crystalline links */}
            {i < nodes.length - 1 && (
              <div className="hidden md:block absolute top-1/2 right-0 w-1/2 translate-x-1/2 -translate-y-1/2" aria-hidden>
                <div className="h-[2px] bg-gradient-to-r from-cyan-200/40 via-white/70 to-emerald-300/40 animate-pulse" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
