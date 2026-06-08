'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Intouch Marketing Solutions',
      description: 'Professional corporate website for a full-service digital marketing agency. Features dynamic content management, service showcase, portfolio display, and client testimonials.',
      longDescription:
        'Built a comprehensive corporate website for Intouch Marketing Solutions, a full-service digital marketing agency. The site showcases their expertise in SEO, content marketing, social media management, and paid advertising. Features include a dynamic project portfolio, client testimonials section, service details, and integrated contact forms.',
      image: '/projects/intouch.jpg',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Node.js', 'Stripe'],
      link: 'https://intouch-marketing-solutions.vercel.app/',
      github: '#',
      status: 'Live',
      highlights: [
        'Responsive design for all devices',
        'SEO optimized structure',
        'Fast loading times (Lighthouse 90+)',
        'Integration with email & CRM systems',
        'Admin dashboard for content management',
        'Payment gateway integration',
      ],
      role: 'Full Stack Developer',
      year: '2026',
    },
    {
      id: 2,
      title: 'Sara Central',
      description: 'E-commerce platform for apparel and fashion accessories. Complete shopping experience with product catalog, cart system, and secure payment processing.',
      longDescription:
        'Developed a full-featured e-commerce platform for Sara Central, an online apparel and fashion accessories store. The platform includes a comprehensive product catalog with filters and search functionality, secure shopping cart, user authentication, order management, and multiple payment options.',
      image: '/projects/saracentral.jpg',
      technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Stripe', 'AWS'],
      link: 'https://saracentral.com',
      github: '#',
      status: 'Live',
      highlights: [
        'Product catalog with 500+ items',
        'Advanced search and filtering',
        'User account management',
        'Order tracking system',
        'Secure payment processing',
        'Inventory management system',
      ],
      role: 'Full Stack Developer',
      year: '2025',
    },
    {
      id: 3,
      title: 'AI Chatbot with LangChain & RAG',
      description: 'Intelligent conversational AI powered by LangChain and Retrieval-Augmented Generation. Integrates with OpenAI API for advanced natural language processing.',
      longDescription:
        'Created an advanced AI chatbot system using LangChain and Retrieval-Augmented Generation (RAG) technology. The chatbot leverages OpenAI API for natural language understanding and generation, with a custom knowledge base for context-aware responses. Perfect for customer support, documentation Q&A, and information retrieval.',
      image: '/projects/chatbot.jpg',
      technologies: ['Python', 'LangChain', 'OpenAI API', 'FastAPI', 'React', 'PostgreSQL'],
      link: 'https://github.com/DhanushbhandaryD123/AI-chatbot-django-react',
      github: 'https://github.com/DhanushbhandaryD123/AI-chatbot-django-react',
      status: 'GitHub',
      highlights: [
        'RAG-based knowledge retrieval',
        'Multi-turn conversations',
        'Context awareness',
        'Custom knowledge base',
        'REST API backend',
        'Modern React frontend',
      ],
      role: 'AI Engineer & Full Stack Developer',
      year: '2025',
    },
    {
      id: 4,
      title: 'SmartHire AI',
      description: 'AI-powered recruitment platform that streamlines hiring with automated candidate screening, skill assessment, and interview scheduling.',
      longDescription:
        'Developed SmartHire AI, an intelligent recruitment platform that uses machine learning to streamline the hiring process. Features include automated resume parsing, candidate skill matching, AI-powered interview scheduling, and predictive analytics for candidate success rates.',
      image: '/projects/smarthire.jpg',
      technologies: ['React', 'Next.js', 'Python', 'Machine Learning', 'FastAPI', 'MongoDB'],
      link: 'https://github.com/DhanushbhandaryD123/SmartHire-AI',
      github: 'https://github.com/DhanushbhandaryD123/SmartHire-AI',
      status: 'GitHub',
      highlights: [
        'Resume parsing & analysis',
        'Candidate skill matching',
        'Interview scheduling automation',
        'AI-powered candidate ranking',
        'Predictive success analytics',
        'Admin dashboard',
      ],
      role: 'Full Stack Developer & ML Engineer',
      year: '2025',
    },
    {
      id: 5,
      title: 'Hairstyle Classification CNN',
      description: 'Deep learning model using Convolutional Neural Networks to classify hairstyles with 85% accuracy. Built with TensorFlow and trained on diverse image dataset.',
      longDescription:
        'Developed a Convolutional Neural Network (CNN) model for automatic hairstyle classification. The model achieves 85% accuracy on test data and can classify 15+ different hairstyle categories. Implemented with TensorFlow, trained on a diverse dataset, and includes a web interface for real-time predictions.',
      image: '/projects/hairstyle.jpg',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'React', 'Flask'],
      link: 'https://github.com/DhanushbhandaryD123/Hairstyle-Classification',
      github: 'https://github.com/DhanushbhandaryD123/Hairstyle-Classification',
      status: 'GitHub',
      highlights: [
        '85% classification accuracy',
        '15+ hairstyle categories',
        'Real-time prediction API',
        'Web-based interface',
        'Trained on 10k+ images',
        'Fully documented code',
      ],
      role: 'ML Engineer',
      year: '2024',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full py-20 px-4 bg-dark overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-40 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
          <p className="text-white/60 text-lg mt-6 max-w-2xl">
            A collection of my best work across web development, AI, and machine learning
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-slate-800/50 to-dark/50 backdrop-blur-md border border-accent/20 rounded-2xl overflow-hidden hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/10"
            >
              {/* Project Content Grid */}
              <div className={`grid md:grid-cols-2 gap-8 p-8 items-center ${idx % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                {/* Left: Content */}
                <div className={`order-2 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'Live'
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-white/50 text-sm">{project.year}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-display mb-3">
                      {project.title}
                    </h3>
                    <p className="text-accent font-semibold mb-2">{project.role}</p>
                    <p className="text-white/70 leading-relaxed mb-6">{project.longDescription}</p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-white/80 font-semibold text-sm uppercase tracking-wide mb-3">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {project.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-white/80 font-semibold text-sm uppercase tracking-wide mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-accent/10 border border-accent/30 text-accent rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.link !== '#' && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-accent hover:bg-accent/90 text-dark font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
                      >
                        <span>Visit Project</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l6 6m0 0l-6 6m6-6H3" />
                        </svg>
                      </motion.a>
                    )}
                    {project.github !== '#' && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 border border-accent/50 text-accent hover:bg-accent/10 font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
                      >
                        <span>View Code</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Right: Visual */}
                <div className={`order-1 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 group-hover:border-accent/50 transition-colors">
                    {/* Placeholder with gradient */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-dark">
                      <div className="text-center">
                        <div className="text-5xl font-bold gradient-text font-display mb-2">
                          {project.title.split(' ')[0][0]}
                        </div>
                        <p className="text-white/50 text-sm">{project.title}</p>
                      </div>
                    </div>

                    {/* Accent corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/30" style={{ width: '100%' }} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-white/70 mb-6">Interested in collaborating or learning more about my work?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent text-dark font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get In Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}