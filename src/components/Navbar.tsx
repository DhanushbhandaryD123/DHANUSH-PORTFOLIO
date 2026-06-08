'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-dark/80 backdrop-blur-md border-b border-accent/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <Link href="/#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
                <span className="text-dark font-bold text-xl font-display">D</span>
              </div>
              <span className="hidden md:inline text-white font-display font-bold text-xl group-hover:text-accent transition-colors">
                DHANUSH
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:flex items-center gap-1"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 text-white/80 hover:text-accent font-medium rounded-lg transition-colors relative group"
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:inline-block px-6 py-2 bg-accent hover:bg-accent/90 text-dark font-bold rounded-full transition-colors shadow-lg hover:shadow-xl hover:shadow-accent/50"
            >
              Hire Me
            </motion.a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-accent hover:bg-accent/10 rounded-lg transition-colors"
            >
              <svg
                className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-dark/95 backdrop-blur-md border-t border-accent/20"
          >
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block px-4 py-2 text-white/80 hover:text-accent hover:bg-accent/10 font-medium rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleNavClick}
                className="block px-4 py-2 mt-4 bg-accent hover:bg-accent/90 text-dark font-bold rounded-lg transition-colors text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}