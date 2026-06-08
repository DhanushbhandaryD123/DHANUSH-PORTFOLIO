'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)

  const socialLinks = [
    {
      id: 'github',
      name: 'GitHub',
      url: 'https://github.com/DhanushbhandaryD123',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dhanush-bhandary-438784376',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z"/>
        </svg>
      ),
    },
    {
      id: 'email',
      name: 'Email',
      url: 'mailto:dhanushbhandary14@gmail.com',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
    },
  ]

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <footer className="relative w-full bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold gradient-text font-display mb-4">DHANUSH</h3>
            <p className="text-white/60 leading-relaxed text-sm">
              Building premium digital experiences with cutting-edge technologies and innovative design. Full Stack Developer & AI Engineer.
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Experience', href: '#experience' },
                { label: 'Projects', href: '#projects' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Connect</h4>
            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.id}
                  onHoverStart={() => setHoveredSocial(social.id)}
                  onHoverEnd={() => setHoveredSocial(null)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center hover:border-accent/60 transition-all duration-300"
                    title={social.name}
                  >
                    {/* Icon - Always visible */}
                    <motion.div
                      variants={iconVariants}
                      initial="visible"
                      className="text-accent group-hover:text-white transition-colors duration-300"
                    >
                      {social.icon}
                    </motion.div>

                    {/* Tooltip - Visible on hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={hoveredSocial === social.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-accent text-dark text-xs font-semibold rounded-lg whitespace-nowrap pointer-events-none"
                    >
                      {social.name}
                      {/* Tooltip arrow */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full border-4 border-transparent border-t-accent" />
                    </motion.div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/20 pt-8">
          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/60 text-xs md:text-sm"
          >
            <p>© {currentYear} Dhanush. All rights reserved.</p>
            <p className="text-center">Crafted with <span className="text-red-500">❤</span> and code</p>
            <div className="text-right">
              <p>
                Built with{' '}
                <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
                  Next.js
                </a>
                {' & '}
                <a href="https://www.framer.com/motion" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">
                  Framer Motion
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent/80 text-dark flex items-center justify-center font-bold hover:shadow-lg hover:shadow-accent/50 transition-shadow z-50"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 14l5-5 5 5z" />
        </svg>
      </motion.button>
    </footer>
  )
}