'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  ExternalLink,
  Github,
  Brain,
  Cpu,
  Home,
  Car,
  Folder,
  Sparkles,
  Mail,
  MessageSquare,
  Target,
  Flame,
  QrCode,
  BarChart3,
  Send,
  Mic,
  Volume2,
  LayoutDashboard,
} from 'lucide-react'

const projects = [
  {
    title: 'Mind Mirage',
    description:
      'Web platform for Advaita Sadhana Kutir, Rishikesh - a learning portal for Yoga, Vedanta, and Sanskrit with Google sign-in, course delivery, and sadhak profiles. Live in production.',
    icon: Sparkles,
    tech: ['Next.js', 'TypeScript', 'Auth.js', 'Turso', 'Tailwind'],
    highlight: 'Production',
    period: '2026 - Present',
    github: '#',
    demo: 'https://mindmirageindia.com',
  },
  {
    title: 'Reputation Agent',
    description:
      'Serverless email reputation warm-up platform. Runs ramped campaigns from real Gmail accounts over IMAP/SMTP, simulates organic engagement, and tracks reputation scores with a built-in task queue and health monitoring.',
    icon: Mail,
    tech: ['Python', 'Vercel', 'IMAP/SMTP', 'Jinja2', 'Automation'],
    highlight: 'Production',
    period: '2026',
    github: '#',
    demo: 'https://reputation-agent-beta.vercel.app',
  },
  {
    title: 'RR Connect Sahayak',
    description:
      'Deterministic, multi-language support chatbot for field electricians - fully pre-defined flows with a tap-only, accessibility-first UX for users with limited reading ability. Single Next.js app, no backend.',
    icon: MessageSquare,
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'i18n'],
    highlight: 'Product / UX',
    period: '2026',
    github: '#',
    demo: 'https://rr-connect-sahayak.vercel.app',
  },
  {
    title: 'TAPAS21 - Transformation Tracker',
    description:
      'Full-stack 21-day habit transformation app with a companion Telegram bot for AI coaching and reminders. Tracks weight, study, sleep, exercise, and diet with quick daily check-ins.',
    icon: Target,
    tech: ['Next.js 16', 'TypeScript', 'Telegram Bot', 'AI Coaching', 'Tailwind'],
    highlight: 'Full Stack',
    period: '2026',
    github: 'https://github.com/yogixt/tapas21',
    demo: 'https://tapas21.vercel.app',
  },
  {
    title: 'Warmly - Email Warm-up + AI',
    description:
      'Self-hosted email warm-up engine for a pool of mailboxes. Accounts email each other on a gradual ramp; incoming warm-up mail is auto-detected, rescued from spam, and auto-replied to with Claude-generated, human-sounding text on randomized delays.',
    icon: Flame,
    tech: ['Next.js', 'TypeScript', 'Claude API', 'IMAP/SMTP', 'Turso'],
    highlight: 'GenAI',
    period: '2026',
    github: '#',
    demo: 'https://pilars-warmup.vercel.app',
  },
  {
    title: 'FQAS - QR Automation System',
    description:
      'Production QR validation, redemption, ticketing, and reward-processing platform for an enterprise loyalty program. Single Next.js app deployed on Vercel with role-based manual reward workflows.',
    icon: QrCode,
    tech: ['Next.js', 'TypeScript', 'Turso', 'QR', 'Vercel'],
    highlight: 'Production',
    period: '2026',
    github: '#',
    demo: 'https://fqas.vercel.app',
  },
  {
    title: 'Social Engagement Tracker',
    description:
      'Unified, dark-themed dashboard for tracking daily Reddit and Quora engagement across a team. Sub-30-second activity logging with KPIs, team heatmaps, leaderboards, and analytics.',
    icon: BarChart3,
    tech: ['Next.js 16', 'TypeScript', 'Turso', 'Tailwind', 'Analytics'],
    highlight: 'Full Stack',
    period: '2026',
    github: '#',
    demo: 'https://social-tracker-unified.vercel.app',
  },
  {
    title: 'AI Cold Email Automation',
    description:
      'n8n workflow that automates personalized, human-like cold outreach - fetches and filters leads, generates consultative emails with Google Gemini, sends via Gmail, and syncs lead status back to Zoho CRM.',
    icon: Send,
    tech: ['n8n', 'Google Gemini', 'Zoho CRM', 'Gmail API', 'Automation'],
    highlight: 'Automation',
    period: '2025',
    github: '#',
    demo: '#',
  },
  {
    title: 'StarGate - Voice Assistant',
    description:
      'AI voice-support assistant providing spoken, conversational help for a brand’s customers, with speech input and natural voice responses. (Description pending review.)',
    icon: Mic,
    tech: ['Next.js', 'Voice AI', 'LLM', 'Speech', 'TTS'],
    highlight: 'Voice AI',
    period: '2025',
    github: '#',
    demo: 'https://stargate-seven.vercel.app',
  },
  {
    title: 'Voice Chatbot',
    description:
      'Conversational voice chatbot with speech input and spoken responses over an LLM backend. (Description pending review.)',
    icon: Volume2,
    tech: ['Next.js', 'Voice AI', 'Speech', 'LLM'],
    highlight: 'Voice AI',
    period: '2025',
    github: '#',
    demo: 'https://voice-chatbot-theta.vercel.app',
  },
  {
    title: 'Mind Mirage Admin',
    description:
      'Admin console for the Mind Mirage platform - manage courses, sadhak accounts, content, and donations for Advaita Sadhana Kutir, Rishikesh.',
    icon: LayoutDashboard,
    tech: ['Next.js', 'TypeScript', 'Auth.js', 'Turso', 'Tailwind'],
    highlight: 'Internal',
    period: '2026',
    github: '#',
    demo: 'https://mindmirage-admin.vercel.app',
  },
  {
    title: 'Spectrum Sensing in CRN',
    description:
      'M.Tech Major Project - Built a CNN-based spectrum sensing model for Cognitive Radio Networks to improve wireless communication efficiency using deep learning techniques.',
    icon: Brain,
    tech: ['Python', 'TensorFlow', 'CNN', 'Deep Learning', 'Signal Processing'],
    highlight: 'M.Tech Project',
    period: 'Feb 2022 - Jun 2022',
    github: 'https://github.com/yogixt',
    demo: '#',
  },
  {
    title: 'IoT Smart Home & Air Quality Monitor',
    description:
      'B.Tech Project - Built an IoT smart home system using Arduino and MQTT for remote control automation. Developed real-time air-quality monitoring with CO2/CO sensors and live dashboard alerts.',
    icon: Home,
    tech: ['Arduino', 'MQTT', 'IoT', 'Sensors', 'Dashboard'],
    highlight: 'B.Tech Project',
    period: '2019 - 2020',
    github: 'https://github.com/yogixt',
    demo: '#',
  },
  {
    title: 'Car Parking Management System',
    description:
      'CDAC Project - Full-stack Car Parking Management System with real-time slot tracking, user management, and booking features. Built during PG Diploma training.',
    icon: Car,
    tech: ['Python', 'Django', 'React', 'PostgreSQL', 'REST API'],
    highlight: 'CDAC Project',
    period: 'Sep 2022 - Mar 2023',
    github: 'https://github.com/yogixt',
    demo: '#',
  },
  {
    title: 'QuickPlans - CV Pipeline',
    description:
      'AI-powered takeoff automation platform for construction. Designing computer vision pipelines for blueprint interpretation and automated quantity extraction.',
    icon: Cpu,
    tech: ['PyTorch', 'OpenCV', 'LangChain', 'TensorFlow', 'Computer Vision'],
    highlight: 'UNOMOK',
    period: 'Jun 2025 - Present',
    github: '#',
    demo: '#',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-green/60 font-mono text-sm mb-2">{'// section.projects'}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-terminal-text mb-4">
            <span className="text-neon-green">$</span> ls -la ./projects/
          </h2>
          <p className="text-terminal-comment font-mono text-sm max-w-2xl mx-auto">
            // Academic and professional projects
          </p>
          <div className="w-24 h-0.5 bg-neon-green mx-auto mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="hacker-card h-full p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Folder className="w-6 h-6 text-neon-green" />
                    <div>
                      <h3 className="text-lg font-bold text-terminal-text font-mono group-hover:text-neon-green transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap mt-1">
                        <span className="text-xs px-2 py-0.5 bg-neon-green/20 text-neon-green border border-neon-green/30 rounded font-mono">
                          {project.highlight}
                        </span>
                        <span className="text-terminal-comment text-xs font-mono">
                          {project.period}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-terminal-comment hover:text-neon-green transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={18} />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-terminal-comment hover:text-neon-green transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`${project.title} Demo`}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-terminal-comment mb-6 leading-relaxed font-mono text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-20" />
    </section>
  )
}
