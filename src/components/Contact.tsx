'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setLoading(false)

      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="relative min-h-screen w-full py-24 px-4 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-white/60">
            Have a project in mind? Let's create something amazing together!
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 bg-dark-secondary rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 bg-dark-secondary rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-3 bg-dark-secondary rounded-lg border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-accent hover:bg-accent-light text-dark font-bold rounded-lg transition duration-300 disabled:opacity-50 magnetic-btn"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 text-green-400 rounded-lg text-center"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Direct Contact */}
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-2xl font-bold font-display mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-accent text-2xl mt-1">📧</span>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Email</p>
                    <a href="mailto:dhanushbhandary14@gmail.com" className="text-white font-medium hover:text-accent">
                      dhanushbhandary14@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent text-2xl mt-1">📱</span>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Phone</p>
                    <a href="tel:+918431457057" className="text-white font-medium hover:text-accent">
                      +91 8431 457 057
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent text-2xl mt-1">📍</span>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Location</p>
                    <p className="text-white font-medium">Udupi, Karnataka, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-xl font-bold font-display mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/DhanushbhandaryD123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-accent/10 border border-accent/30 rounded-lg text-center hover:bg-accent/20 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/dhanush-bhandary-438784376"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-accent/10 border border-accent/30 rounded-lg text-center hover:bg-accent/20 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:dhanushbhandary14@gmail.com"
                  className="p-4 bg-accent/10 border border-accent/30 rounded-lg text-center hover:bg-accent/20 transition-colors"
                >
                  Email
                </a>
                <a
                  href="tel:+918431457057"
                  className="p-4 bg-accent/10 border border-accent/30 rounded-lg text-center hover:bg-accent/20 transition-colors"
                >
                  Call
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
