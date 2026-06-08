'use client'

import { useEffect, useRef, MutableRefObject } from 'react'

interface ScrollyCanvasProps {
  heroRef: MutableRefObject<HTMLDivElement | null>
  totalFrames?: number
}

export default function ScrollyCanvas({ heroRef, totalFrames = 150 }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const framesRef = useRef<HTMLImageElement[]>([])
  const currentFrameRef = useRef(0)

  // Preload all frames
  useEffect(() => {
    const frames: HTMLImageElement[] = []
    let loadedCount = 0
    let errorCount = 0

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image()
      const frameNum = String(i).padStart(3, '0')
      img.src = `/sequence/ezgif-split/frame_${frameNum}_delay-0.066s.png`
      
      img.onload = () => {
        loadedCount++
        if (loadedCount === totalFrames) {
          console.log(`✅ All ${totalFrames} frames preloaded successfully`)
        }
      }
      
      img.onerror = () => {
        errorCount++
        console.warn(`⚠️ Failed to load frame ${frameNum}`)
      }

      frames.push(img)
    }

    framesRef.current = frames
  }, [totalFrames])

  // Handle scroll sync
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !heroRef.current) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    const handleScroll = () => {
      if (!heroRef.current) return

      const heroRect = heroRef.current.getBoundingClientRect()
      const heroHeight = heroRef.current.offsetHeight
      
      // Calculate progress: 0 to 1 as hero scrolls out
      const progress = Math.max(0, Math.min(1, -heroRect.top / (heroHeight - window.innerHeight)))
      
      // Calculate which frame to show
      const frameIndex = Math.floor(progress * (totalFrames - 1))
      
      if (frameIndex !== currentFrameRef.current && framesRef.current[frameIndex]) {
        currentFrameRef.current = frameIndex
        const img = framesRef.current[frameIndex]
        
        // Only draw if image is loaded
        if (img.complete && img.naturalHeight !== 0) {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        }
      }
    }

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Draw initial frame
    handleScroll()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [heroRef, totalFrames])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  )
}