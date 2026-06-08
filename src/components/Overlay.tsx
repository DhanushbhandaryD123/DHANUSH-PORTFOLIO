'use client'

import { useEffect, useRef, useState, MutableRefObject } from 'react'
import { motion } from 'framer-motion'

interface OverlayProps {
  heroRef: MutableRefObject<HTMLDivElement | null>
}

export default function Overlay({ heroRef }: OverlayProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0) // 0-3

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return

      const heroRect = heroRef.current.getBoundingClientRect()
      const heroHeight = heroRef.current.offsetHeight
      
      // Calculate progress: 0 to 1 as hero scrolls out
      const newProgress = Math.max(0, Math.min(1, -heroRect.top / (heroHeight - window.innerHeight)))
      setProgress(newProgress)

      // Determine phase based on progress
      if (newProgress < 0.28) setPhase(0)
      else if (newProgress < 0.52) setPhase(1)
      else if (newProgress < 0.78) setPhase(2)
      else setPhase(3)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [heroRef])

  return (
    <div className="absolute top-0 left-0 w-full h-screen z-20 pointer-events-none overflow-hidden">
      {/* Phase 0: Ghost watermark (0.00-0.28) */}
      {phase === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: Math.max(0, 0.1 - progress * 0.36) }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-9xl md:text-[200px] font-bold text-white/20 leading-none font-display select-none">
            DHANUSH
          </div>
        </motion.div>
      )}

      {/* Phase 1: Name intro (0.28-0.52) */}
      {(phase === 0 || phase === 1) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: progress < 0.28 ? 0 : progress > 0.52 ? 0 : (progress - 0.28) / 0.24,
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <motion.p className="text-xl md:text-2xl text-accent font-medium mb-4">
            Full Stack Developer & AI Engineer
          </motion.p>
          <motion.h1 className="text-6xl md:text-8xl font-bold text-white mb-8 font-display leading-tight">
            Dhanush <br /> Bhandary
          </motion.h1>
          <motion.div className="flex gap-8 text-white/70 text-sm md:text-base">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-accent">5+</div>
              <div>Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-accent">3+</div>
              <div>Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-accent">10+</div>
              <div>Skills</div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Phase 2: Role statement (0.52-0.78) */}
      {(phase === 1 || phase === 2) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: progress < 0.52 ? 0 : progress > 0.78 ? 0 : (progress - 0.52) / 0.26,
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <motion.h2 className="text-5xl md:text-7xl font-bold text-white font-display leading-tight">
            Full Stack Developer <br />
            <span className="text-accent">& AI Engineer</span>
          </motion.h2>
          <motion.p className="text-lg md:text-xl text-white/60 mt-8 max-w-2xl">
            Specializing in React, Next.js, and AI-powered solutions
          </motion.p>
        </motion.div>
      )}

      {/* Phase 3: Main headline (0.78-1.00) */}
      {(phase === 2 || phase === 3) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: progress < 0.78 ? 0 : (progress - 0.78) / 0.22,
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <motion.h1 className="text-5xl md:text-7xl font-bold text-white font-display leading-tight mb-6">
            Building Modern Digital <br />
            <span className="text-accent">Experiences with AI & Design</span>
          </motion.h1>
          <motion.p className="text-white/60 text-lg mt-6">
            Scroll to explore my work →
          </motion.p>
        </motion.div>
      )}
    </div>
  )
}