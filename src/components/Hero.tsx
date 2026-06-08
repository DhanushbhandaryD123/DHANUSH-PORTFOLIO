'use client'

import { MutableRefObject } from 'react'
import ScrollyCanvas from './ScrollyCanvas'
import Overlay from './Overlay'

interface HeroProps {
  heroRef: MutableRefObject<HTMLDivElement | null>
}

export default function Hero({ heroRef }: HeroProps) {
  return (
    <>
      {/* Hero Container - 500vh for scroll effect */}
      <section
        id="home"
        ref={heroRef}
        className="relative w-full bg-dark"
        style={{ height: '500vh' }}
      >
        {/* Sticky Canvas Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-dark">
          <ScrollyCanvas heroRef={heroRef} totalFrames={150} />
          <Overlay heroRef={heroRef} />
        </div>
      </section>
    </>
  )
}