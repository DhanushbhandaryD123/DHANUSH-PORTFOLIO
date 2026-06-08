'use client'

import { useRef } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Contact from '@/components/Contact'

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Hero heroRef={heroRef} />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </>
  )
}