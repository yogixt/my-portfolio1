'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Code, GitBranch, Zap } from 'lucide-react'

const stats = [
  { icon: Calendar, label: 'Years Active', value: '2+' },
  { icon: Code, label: 'Projects Deployed', value: '15+' },
  { icon: GitBranch, label: 'Git Commits', value: '500+' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-green/60 font-mono text-sm mb-2">{'// section.about'}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-terminal-text mb-4">
            <span className="text-neon-green">$</span> cat ./about.md
          </h2>
          <div className="w-24 h-0.5 bg-neon-green mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hacker-card p-6">
              <p className="text-terminal-text leading-relaxed mb-4 font-mono text-sm">
                <span className="text-neon-green">{'>'}</span> I am an{' '}
                <span className="text-neon-green">AI Engineer</span> who bridges
                ancient wisdom with cutting-edge technology.
              </p>
              <p className="text-terminal-text leading-relaxed mb-4 font-mono text-sm">
                <span className="text-neon-green">{'>'}</span> <span className="text-neon-green">मण्डाधिकारी (Mandaadhikari)</span> - walking under the guidance of my <span className="text-neon-green">Guruji</span>.
                Walking the path of <span className="text-neon-green">Karma Yoga</span> as guided by my Guru.
              </p>
              <p className="text-terminal-text leading-relaxed mb-4 font-mono text-sm">
                <span className="text-neon-green">{'>'}</span> <span className="text-neon-green">Ashtanga Yoga Practitioner</span> -
                believing that disciplined practice in life and code leads to excellence.
              </p>
              <p className="text-terminal-text leading-relaxed mb-6 font-mono text-sm">
                <span className="text-neon-green">{'>'}</span> Every line of code is an offering -
                working without attachment to results, as the Gita teaches.
              </p>

              {/* Code block quote */}
              <div className="bg-matrix-black border border-neon-green/30 rounded p-4">
                <p className="text-terminal-comment text-xs mb-2">// karma_yoga.config</p>
                <p className="text-neon-green font-mono text-sm">
                  const mantra = &quot;योगः कर्मसु कौशलम्&quot;;
                </p>
                <p className="text-terminal-comment text-xs mt-1">
                  // &quot;Yoga is excellence in action&quot; - Bhagavad Gita 2.50
                </p>
                <p className="text-neon-green font-mono text-sm mt-3">
                  const path = &quot;कर्मण्येवाधिकारस्ते मा फलेषु कदाचन&quot;;
                </p>
                <p className="text-terminal-comment text-xs mt-1">
                  // &quot;You have the right to work, but never to its fruits&quot; - BG 2.47
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats & Badge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="hacker-card p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-neon-green mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold text-neon-green font-mono mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-terminal-comment font-mono">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Consultation Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="hacker-card p-6 border-neon-green/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-neon-green/20 border border-neon-green/50 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <p className="text-neon-green font-mono font-semibold">
                    Surrender to Guru!
                  </p>
                  <p className="text-terminal-comment text-sm font-mono">
                    // गुरुर्ब्रह्मा गुरुर्विष्णुः
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-20" />
    </section>
  )
}
