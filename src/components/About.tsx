'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const [counters, setCounters] = useState({
    projects: 0,
    technologies: 0,
    years: 0,
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          // Animate counters
          animateCounter('projects', 5)
          animateCounter('technologies', 10)
          animateCounter('years', 2)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [hasAnimated])

  const animateCounter = (key: 'projects' | 'technologies' | 'years', target: number) => {
    let current = 0
    const increment = target / 20 // Animate over 20 steps
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        current = target
        clearInterval(timer)
      }
      setCounters((prev) => ({
        ...prev,
        [key]: Math.floor(current),
      }))
    }, 50)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen w-full py-20 px-4 bg-dark overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl blur-3xl" />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-dark/50 backdrop-blur-md border border-accent/20 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex flex-col items-center justify-center gap-4">
                  <div className="text-7xl font-bold gradient-text font-display">D</div>
                  <p className="text-accent font-semibold text-lg">Dhanush Bhandary</p>
                  <p className="text-white/70 text-center text-sm">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Main Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-white/80 leading-relaxed"
            >
              I'm a passionate <span className="text-accent font-semibold">Full Stack Developer</span> with 
              expertise in <span className="text-accent font-semibold">React, Next.js, Node.js, and MongoDB</span>. 
              With a strong background in Machine Learning and Generative AI, I specialize in building 
              modern, scalable web applications that seamlessly blend beautiful design with powerful functionality.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-white/80 leading-relaxed"
            >
              My journey began with a curiosity for how technology works, and it has evolved into a 
              deep passion for creating digital experiences that make a real difference. Whether I'm 
              crafting responsive user interfaces, engineering robust backend systems, or exploring 
              cutting-edge AI solutions, I'm committed to delivering excellence in every project.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 my-8"
            >
              <div className="group p-6 rounded-2xl border border-accent/20 bg-accent/5 hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 cursor-default">
                <div className="text-4xl font-bold gradient-text font-display mb-2">
                  {counters.projects}+
                </div>
                <p className="text-white/70 text-sm font-medium">Projects</p>
              </div>

              <div className="group p-6 rounded-2xl border border-accent/20 bg-accent/5 hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 cursor-default">
                <div className="text-4xl font-bold gradient-text font-display mb-2">
                  {counters.technologies}+
                </div>
                <p className="text-white/70 text-sm font-medium">Technologies</p>
              </div>

              

              <div className="group p-6 rounded-2xl border border-accent/20 bg-accent/5 hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 cursor-default">
                <div className="text-4xl font-bold gradient-text font-display mb-2">100%</div>
                <p className="text-white/70 text-sm font-medium">Satisfaction</p>
              </div>
            </motion.div>

            {/* About Role */}
            <motion.p
              variants={itemVariants}
              className="text-white/70 leading-relaxed text-base"
            >
              Currently working as a <span className="text-accent font-semibold">Web Developer at Intouch Marketing Solutions</span>, 
              where I focus on building production-ready applications and delivering exceptional user experiences that drive real business value.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent text-dark font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View My Projects
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-accent/20"
        >
          <h3 className="text-2xl font-bold text-white mb-8 font-display">Tech Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              'React',
              'Next.js',
              'TypeScript',
              'Node.js',
              'MongoDB',
              'PostgreSQL',
              'Tailwind CSS',
              'GSAP',
              'Python',
              'TensorFlow',
            ].map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg border border-accent/20 bg-accent/5 hover:bg-accent/10 hover:border-accent/40 transition-all duration-300 text-center cursor-default"
              >
                <p className="text-white/80 font-medium text-sm">{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}