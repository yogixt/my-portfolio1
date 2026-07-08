'use client'

import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 border-t border-neon-green/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-terminal-comment text-xs font-mono"
          >
            {'// '} {currentYear} Bijoy Laxmi Biswas (thelearner.yogi) | All rights reserved
          </motion.p>

          {/* Built with */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 text-terminal-comment text-xs font-mono"
          >
            <span>{'<'}</span>
            <span>Built with</span>
            <Terminal size={12} className="text-neon-green" />
            <span className="text-neon-green">karma</span>
            <span>&&</span>
            <span className="text-neon-green">code</span>
            <span>{'/>'}</span>
          </motion.div>

          {/* Sanskrit closing */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-neon-green font-mono text-sm"
          >
            ॐ शान्तिः शान्तिः शान्तिः
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
