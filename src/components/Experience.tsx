'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'work' | 'internship'>('work')

  const workExperience = [
    {
      id: 1,
      title: 'Web Developer',
      company: 'Intouch Marketing Solutions',
      duration: 'April 2026 - Present',
      location: 'Udupi, Karnataka',
      type: 'Full-time',
      description: [
        'Building production-ready web applications using React and Next.js',
        'Developing responsive UI components with Tailwind CSS and Framer Motion',
        'Implementing backend solutions with Node.js and MongoDB',
        'Optimizing application performance and ensuring code quality',
        'Collaborating with design and product teams to deliver exceptional user experiences',
        'Maintaining and improving existing client websites',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'TypeScript'],
    },
  ]

  const internshipExperience = [
    {
      id: 1,
      title: 'AWS & DevOps Intern',
      company: 'MicroDegree Solutions',
      duration: 'November 2024 - January 2025',
      location: 'Mangalore, Karnataka',
      type: 'Internship',
      description: [
        'Deployed and monitored cloud applications on AWS EC2, S3, and CloudWatch, maintaining high availability and uptime',
        'Containerized applications using Docker, improving deployment consistency and scalability across development and production environments',
        'Designed and implemented CI/CD pipelines using Jenkins and GitHub Actions, automating build, test, and deployment processes',
        'Performed Linux server monitoring, performance optimization, and security hardening, following industry best practices',
        'Managed version control workflows with Git and GitHub for collaborative development',
        'Troubleshot and resolved deployment issues, ensuring smooth application releases',
      ],
      technologies: ['AWS', 'Docker', 'Jenkins', 'GitHub Actions', 'Linux', 'Git', 'EC2', 'S3', 'CloudWatch'],
    },
  ]

  const experiences = activeTab === 'work' ? workExperience : internshipExperience

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="experience"
      className="relative min-h-screen w-full py-20 px-4 bg-dark overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-40 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex gap-4 mb-12"
        >
          <button
            onClick={() => setActiveTab('work')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'work'
                ? 'bg-accent text-dark shadow-lg shadow-accent/50'
                : 'bg-accent/10 text-accent hover:bg-accent/20 border border-accent/30'
            }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setActiveTab('internship')}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'internship'
                ? 'bg-accent text-dark shadow-lg shadow-accent/50'
                : 'bg-accent/10 text-accent hover:bg-accent/20 border border-accent/30'
            }`}
          >
            Internship
          </button>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-slate-800/50 to-dark/50 backdrop-blur-md border border-accent/20 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/10"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-accent font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent rounded-lg text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Duration & Location */}
                <div className="flex flex-col md:flex-row gap-4 text-white/60 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-white/80 font-semibold mb-3 text-sm uppercase tracking-wide">
                  Responsibilities & Achievements
                </h4>
                <ul className="space-y-2">
                  {exp.description.map((desc, idx) => (
                    <li key={idx} className="flex gap-3 text-white/70">
                      <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-white/80 font-semibold mb-3 text-sm uppercase tracking-wide">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-accent/10 border border-accent/30 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Accent line */}
              <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full" style={{ width: '100%' }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-accent/20 grid md:grid-cols-3 gap-8"
        >
          
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text font-display mb-2">5+</div>
            <p className="text-white/70">Projects Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text font-display mb-2">15+</div>
            <p className="text-white/70">Technologies Mastered</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}