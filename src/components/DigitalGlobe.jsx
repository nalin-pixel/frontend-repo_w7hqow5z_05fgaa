import React from 'react'
import Spline from '@splinetool/react-spline'

// Renders a glowing digital globe with golden geometric overlay
export default function DigitalGlobe() {
  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[85vh]">
      {/* 3D Scene - provide any scene URL if configured; container respects full area */}
      <Spline scene="https://prod.spline.design/7wVyZlI6g6My3-bb/scene.splinecode" style={{ width: '100%', height: '100%' }} />

      {/* Golden Islamic geometric pattern overlay */}
      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <PatternOverlay />
      </div>

      {/* Radial glow vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)]" />
    </div>
  )
}

function PatternOverlay() {
  // Create a repeating hex-star pattern using gradients and masks
  return (
    <svg className="w-full h-full opacity-50" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gold" x1="0" x2="1">
          <stop offset="0%" stopColor="#F5C84C" />
          <stop offset="50%" stopColor="#FFD56A" />
          <stop offset="100%" stopColor="#B88700" />
        </linearGradient>
        <pattern id="geo" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="url(#gold)" strokeWidth="0.6" opacity="0.9" />
          <circle cx="30" cy="30" r="6" fill="none" stroke="url(#gold)" strokeWidth="0.8" opacity="0.9" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#geo)" />
    </svg>
  )
}
