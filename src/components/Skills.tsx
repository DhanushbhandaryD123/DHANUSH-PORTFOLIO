'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    icon: '🎨',
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Django', 'Flask', 'REST APIs'],
    icon: '⚙️',
  },
  {
    category: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase', 'Firebase'],
    icon: '💾',
  },
  {
    category: 'AI & ML',
    skills: ['OpenAI API', 'LangChain', 'TensorFlow', 'PyTorch', 'RAG'],
    icon: '🤖',
  },
  {
    category: 'DevOps',
    skills: ['AWS', 'Docker', 'Jenkins', 'CI/CD', 'Linux'],
    icon: '🚀',
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Figma', 'VS Code', 'Postman'],
    icon: '🛠️',
  },
]

export default function Skills() {
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
    <section id="skills" className="relative min-h-screen w-full py-24 px-4 bg-dark-secondary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-1/2 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-4">
            <span className="gradient-text">Skills</span> & Technologies
          </h2>
          <div className="w-16 h-1 bg-accent" />
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group glass-effect p-8 rounded-2xl cursor-pointer transition-all duration-300 hover:border-accent/50"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skillGroup.icon}
              </div>

              {/* Category Name */}
              <h3 className="text-2xl font-bold mb-6 font-display gradient-text">{skillGroup.category}</h3>

              {/* Skills List */}
              <div className="space-y-3">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-white/80 group-hover:text-white transition-colors">{skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-4 font-display">Always Learning</h3>
          <p className="text-white/80 leading-relaxed">
            I'm committed to staying updated with the latest technologies and best practices. 
            Recently completed certifications in Machine Learning, Deep Learning with TensorFlow, 
            and AWS DevOps. Passionate about exploring new frameworks and methodologies to build 
            better solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
