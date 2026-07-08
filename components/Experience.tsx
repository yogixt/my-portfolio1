'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, GraduationCap, Zap, Building, BookOpen } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    title: 'AI Engineer',
    organization: 'UNOMOK',
    period: 'Jan 2026 - Present',
    location: 'Bengaluru, India',
    description:
      'Building AI-powered automation solutions using n8n workflows and vibe coding approaches. Developing intelligent agents and integrating LLMs into production systems.',
    skills: ['n8n', 'LangChain', 'OpenAI API', 'Vibe Coding', 'AI Agents'],
    current: true,
  },
  {
    type: 'work',
    title: 'Computer Vision Engineer',
    organization: 'UNOMOK',
    period: 'Jun 2025 - Dec 2025',
    location: 'Bengaluru, India',
    description:
      'Worked on QuickPlans, an AI-powered takeoff automation platform for construction. Designed CV pipelines for blueprint interpretation and automated quantity extraction. Led data annotation operations and developed deep learning models with PyTorch and TensorFlow.',
    skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'Computer Vision', 'Deep Learning'],
    current: false,
  },
  {
    type: 'intern',
    title: 'Odoo & Python Development Intern',
    organization: 'Sakshath Technologies',
    period: 'Jul 2024 - Sep 2024',
    location: 'Bengaluru, India',
    description:
      'Built modular backend systems using Python/Django. Designed scalable REST APIs with Django Rest Framework. Delivered full-stack feature modules with React, Redux, and Django.',
    skills: ['Python', 'Django', 'React', 'Redux', 'REST APIs'],
    current: false,
  },
  {
    type: 'training',
    title: 'Trainee - PG Diploma in Advanced Computing',
    organization: 'CDAC Patna',
    period: 'Sep 2022 - Mar 2023',
    location: 'Patna, Bihar',
    description:
      'Completed intensive training in Algorithms, Web Development, and Database Systems. Developed a full-stack Car Parking Management System. Achieved Grade A+ for excellent project execution.',
    skills: ['Algorithms', 'Web Dev', 'Database', 'Full Stack'],
    current: false,
  },
  {
    type: 'freelance',
    title: 'Freelance Developer',
    organization: 'Self-Employed',
    period: '2022 - Present',
    location: 'Remote',
    description:
      'Providing product consultation and development services. Specializing in full-stack development, AI integration, and technical architecture.',
    skills: ['React', 'Next.js', 'Django', 'AWS', 'Consulting'],
    current: true,
  },
  {
    type: 'education',
    title: 'M.Tech in Information Technology',
    organization: 'Tezpur University',
    period: '2020 - 2022',
    location: 'Tezpur, Assam',
    description:
      'Completed M.Tech with CGPA 8.5/10. Major project: Spectrum Sensing in CRN using Deep Learning - Built CNN-based model for Cognitive Radio Networks.',
    skills: ['Deep Learning', 'CNN', 'Research', 'ML'],
    current: false,
  },
  {
    type: 'education',
    title: 'B.Tech in Information Technology',
    organization: 'WBUT',
    period: '2016 - 2020',
    location: 'West Bengal',
    description:
      'Completed B.Tech with CGPA 7.8/10. Project: IoT-Based Smart Home Automation & Air Pollution Monitoring using Arduino and MQTT.',
    skills: ['IoT', 'Arduino', 'MQTT', 'Embedded'],
    current: false,
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return Briefcase
      case 'intern':
        return Building
      case 'training':
        return BookOpen
      case 'freelance':
        return Zap
      case 'education':
        return GraduationCap
      default:
        return Briefcase
    }
  }

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-green/60 font-mono text-sm mb-2">{'// section.experience'}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-terminal-text mb-4">
            <span className="text-neon-green">$</span> git log --oneline
          </h2>
          <p className="text-terminal-comment font-mono text-sm max-w-2xl mx-auto">
            // Career timeline and education
          </p>
          <div className="w-24 h-0.5 bg-neon-green mx-auto mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-neon-green/30" />

          {experiences.map((exp, index) => {
            const Icon = getIcon(exp.type)

            return (
              <motion.div
                key={`${exp.title}-${exp.organization}`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex items-start mb-8 pl-12 md:pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-6 top-2">
                  <div className="timeline-dot" />
                </div>

                {/* Content Card */}
                <div className="hacker-card p-6 w-full">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded bg-neon-green/20 border border-neon-green/50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-neon-green" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold text-terminal-text font-mono">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="text-xs px-2 py-0.5 bg-neon-green/20 text-neon-green border border-neon-green/30 rounded font-mono">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <p className="text-neon-green font-mono text-sm">{exp.organization}</p>
                      <p className="text-terminal-comment text-xs font-mono">{exp.location}</p>
                    </div>
                  </div>

                  {/* Period */}
                  <p className="text-terminal-comment text-xs font-mono mb-3">
                    // {exp.period}
                  </p>

                  {/* Description */}
                  <p className="text-terminal-text/80 text-sm leading-relaxed mb-4 font-mono">
                    {exp.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="tech-badge text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-20" />
    </section>
  )
}
