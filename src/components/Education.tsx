'use client'

import { motion } from 'framer-motion'

export default function Education() {
  const education = [
    {
      id: 1,
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Srinivas Institute of Technology',
      location: 'Valachil, Mangalore',
      cgpa: '8.2 / 10',
      duration: '2023 – 2025',
      status: 'Completed',
      icon: '🎓',
    },
    {
      id: 2,
      degree: 'Bachelor of Science (B.Sc.)',
      institution: 'Govt. First Grade College',
      location: 'Thenkanidiyoor, Udupi',
      cgpa: '6.84 / 10',
      duration: '2020 – 2023',
      status: 'Completed',
      icon: '📚',
    },
  ]

  const certifications = [
    {
      id: 1,
      name: 'Tata Group GenAI Powered Data Analytics',
      issuer: 'Tata Group',
      date: 'May 2025',
      credential: '2055aebd885c46f388c9a21530141e15',
      skills: ['Generative AI', 'Data Analytics', 'Python'],
    },
    {
      id: 2,
      name: 'Deep Learning with TensorFlow',
      issuer: 'Coursera / Google',
      date: 'September 2025',
      credential: '1e98f894f6b24291adfe0ce5b42e5ce5',
      skills: ['Deep Learning', 'TensorFlow', 'Neural Networks'],
    },
    {
      id: 3,
      name: 'Machine Learning with Python',
      issuer: 'Coursera / IBM',
      date: 'September 2025',
      credential: '2055aebd885c46f388c9a21530141e15',
      skills: ['Machine Learning', 'Python', 'Data Science'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="education"
      className="relative min-h-screen w-full py-20 px-4 bg-dark overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-40 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            Education &amp; <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-accent to-accent/50 rounded-full" />
        </motion.div>

        {/* Education Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display text-white mb-8"
          >
            🎓 Academic Qualifications
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-slate-800/50 to-dark/50 backdrop-blur-md border border-accent/20 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/10"
              >
                {/* Header with Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{edu.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-white font-display mb-2">
                        {edu.degree}
                      </h4>
                      <p className="text-lg text-accent font-semibold mb-1">{edu.institution}</p>
                      <p className="text-white/60 text-sm">{edu.location}</p>
                    </div>
                  </div>
                  <span className={`px-4 py-2 rounded-lg text-sm font-medium ${
                    edu.status === 'Completed'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {edu.status}
                  </span>
                </div>

                {/* Details Grid */}
                <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-accent/20">
                  <div>
                    <p className="text-white/60 text-sm uppercase tracking-wide mb-2">Duration</p>
                    <p className="text-white text-lg font-semibold">{edu.duration}</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm uppercase tracking-wide mb-2">CGPA</p>
                    <div className="flex items-center gap-3">
                      <p className="text-white text-lg font-semibold">{edu.cgpa}</p>
                      <div className="h-2 flex-1 bg-accent/20 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full"
                          style={{ width: `${(parseFloat(edu.cgpa) / 10) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accent line */}
                <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full" style={{ width: '100%' }} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certifications Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold font-display text-white mb-8"
          >
            ✨ Professional Certifications
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="group relative bg-gradient-to-br from-slate-800/50 to-dark/50 backdrop-blur-md border border-accent/20 rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-accent/10 flex flex-col h-full"
              >
                {/* Certificate Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center mb-4 group-hover:from-accent/30 group-hover:to-accent/10 transition-colors">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-white font-display mb-2 line-clamp-2">
                  {cert.name}
                </h4>

                <p className="text-accent font-semibold text-sm mb-3">{cert.issuer}</p>

                <p className="text-white/60 text-sm mb-4">
                  <svg className="inline w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {cert.date}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-auto mb-4">
                  {cert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-accent/10 border border-accent/30 text-accent rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Credential */}
                <div className="pt-4 border-t border-accent/20">
                  <p className="text-white/60 text-xs uppercase tracking-wide mb-1">Credential ID</p>
                  <p className="text-white/80 text-xs font-mono break-all">{cert.credential}</p>
                </div>

                {/* Accent line */}
                <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full" style={{ width: '100%' }} />
              </motion.div>
            ))}
          </motion.div>

          {/* Naukri Profile Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/10 to-dark/50 text-center"
          >
            <p className="text-white/70 mb-4">
              View all certifications and verified credentials on Naukri
            </p>
            <motion.a
              href="https://www.naukri.com/mnjuser/profile"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-dark font-semibold rounded-lg transition-colors"
            >
              <span>View Naukri Profile</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4m-4-6l6 6m0 0l-6 6m6-6H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-accent/20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text font-display mb-2">2</div>
            <p className="text-white/70">Degrees</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text font-display mb-2">3</div>
            <p className="text-white/70">Certifications</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold gradient-text font-display mb-2">8.2</div>
            <p className="text-white/70">Highest CGPA</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}