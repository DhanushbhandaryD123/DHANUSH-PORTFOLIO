'use client'

import { motion } from 'framer-motion'

const services = [
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Building responsive, fast, and modern web applications using React, Next.js, and cutting-edge technologies.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive user interfaces that engage users and drive conversions.',
  },
  {
    icon: '🤖',
    title: 'AI Automation',
    description: 'Integrating AI solutions, chatbots, and automation tools to enhance your business operations.',
  },
  {
    icon: '📝',
    title: 'Prompt Engineering',
    description: 'Crafting effective prompts and workflows for LLMs to achieve optimal results.',
  },
  {
    icon: '⚡',
    title: 'Performance Optimization',
    description: 'Optimizing web applications for speed, accessibility, and SEO to maximize user experience.',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'Deploying and managing applications on AWS with CI/CD pipelines and Docker containerization.',
  },
]

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="services" className="relative min-h-screen w-full py-24 px-4 bg-dark-secondary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-4">
            Services & <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your business needs
          </p>
          <div className="w-16 h-1 bg-accent mx-auto mt-4" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group glass-effect p-8 rounded-2xl transition-all duration-300 hover:border-accent/50"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300 origin-left">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 font-display group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
                {service.description}
              </p>

              {/* Border effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/30 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/80 mb-6">
            Ready to transform your ideas into reality?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-light text-dark font-bold rounded-lg transition duration-300 magnetic-btn"
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
