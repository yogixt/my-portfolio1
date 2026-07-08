'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const technologies = [
  { name: 'Python', category: 'lang' },
  { name: 'SQL', category: 'lang' },
  { name: 'C', category: 'lang' },
  { name: 'Django', category: 'framework' },
  { name: 'FastAPI', category: 'framework' },
  { name: 'Flask', category: 'framework' },
  { name: 'React', category: 'framework' },
  { name: 'Redux', category: 'framework' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'n8n', category: 'ai' },
  { name: 'LangChain', category: 'ai' },
  { name: 'OpenAI API', category: 'ai' },
  { name: 'Vibe Coding', category: 'ai' },
  { name: 'HuggingFace', category: 'ai' },
  { name: 'PyTorch', category: 'ml' },
  { name: 'TensorFlow', category: 'ml' },
  { name: 'OpenCV', category: 'ml' },
  { name: 'NumPy', category: 'ml' },
  { name: 'Pandas', category: 'ml' },
  { name: 'Docker', category: 'devops' },
  { name: 'Linux', category: 'devops' },
  { name: 'Git/GitHub', category: 'tools' },
  { name: 'Postman', category: 'tools' },
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-green/60 font-mono text-sm mb-2">{'// section.skills'}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-terminal-text mb-4">
            <span className="text-neon-green">$</span> cat ./skills.json
          </h2>
          <p className="text-terminal-comment font-mono text-sm max-w-2xl mx-auto">
            // Technologies I use to build things
          </p>
          <div className="w-24 h-0.5 bg-neon-green mx-auto mt-4" />
        </motion.div>

        {/* Tech Grid - Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hacker-card p-6"
        >
          <div className="text-terminal-comment text-xs mb-4 font-mono">
            thelearner@matrix:~$ neofetch --skills
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group"
              >
                <div className="p-3 border border-matrix-border rounded hover:border-neon-green/50 transition-all hover:shadow-[0_0_10px_rgba(0,255,65,0.1)] bg-matrix-black/50">
                  <div className="flex items-center gap-2">
                    <span className="text-neon-green font-mono text-xs">{'>'}</span>
                    <span className="text-terminal-text font-mono text-sm group-hover:text-neon-green transition-colors">
                      {tech.name}
                    </span>
                  </div>
                  <span className="text-terminal-comment text-xs font-mono ml-4">
                    [{tech.category}]
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-matrix-border">
            <p className="text-terminal-comment text-xs font-mono">
              <span className="text-neon-green">total:</span> {technologies.length} packages installed
            </p>
          </div>
        </motion.div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-20" />
    </section>
  )
}
