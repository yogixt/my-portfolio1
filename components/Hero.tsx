'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, ChevronDown } from 'lucide-react'
import Terminal from './Terminal'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/yogixt' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/bijoy-laxmi-biswas-cse07/' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/thelearner.yogi/' },
]

export default function Hero() {
  const [matrixChars, setMatrixChars] = useState<string[]>([])

  useEffect(() => {
    setMatrixChars(
      [...Array(30)].map(() => String.fromCharCode(0x30A0 + Math.random() * 96))
    )
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden matrix-bg scan-line pt-20"
    >
      {/* Matrix rain effect particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {matrixChars.map((char, i) => (
          <motion.div
            key={i}
            className="absolute text-neon-green/20 font-mono text-xs"
            initial={{
              x: (i / 30) * (typeof window !== 'undefined' ? window.innerWidth : 1000) + ((i * 37) % 100),
              y: -20,
            }}
            animate={{
              y: typeof window !== 'undefined' ? window.innerHeight + 20 : 900,
            }}
            transition={{
              duration: 5 + (i * 1.7) % 5,
              repeat: Infinity,
              delay: (i * 1.3) % 5,
              ease: 'linear',
            }}
          >
            {char}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-neon-green/60 font-mono mb-2"
            >
              {'>'} Hello, World!
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono mb-4"
            >
              <span className="text-terminal-text">thelearner</span>
              <span className="text-neon-green glow-text">.yogi</span>
            </motion.h1>

            {/* Real Name */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-terminal-text/70 font-mono text-sm mb-4"
            >
              {'// '}<span className="text-neon-green/80">Bijoy Laxmi Biswas</span>
            </motion.p>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-terminal-comment font-mono mb-2"
            >
              // AI Engineer | Freelancer
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-neon-green/80 font-mono mb-2"
            >
              <span className="text-terminal-comment">/*</span> कर्मण्येवाधिकारस्ते - Walking the path of Karma Yoga <span className="text-terminal-comment">*/</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-terminal-comment font-mono text-sm mb-8"
            >
              मण्डाधिकारी | Guided by Guruji | Ashtanga Yoga Practitioner
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                className="btn-matrix-filled"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ./view_work.sh
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('#contact')}
                className="btn-matrix"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ./contact_me.sh
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-neon-green/60 hover:text-neon-green border border-neon-green/30 hover:border-neon-green rounded transition-all hover:shadow-[0_0_10px_rgba(0,255,65,0.3)]"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <div className="relative">
            <Terminal />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-neon-green/60 hover:text-neon-green transition-colors"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  )
}
