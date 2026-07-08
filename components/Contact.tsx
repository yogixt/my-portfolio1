'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Mail, MapPin, Github, Linkedin, Instagram, Zap, Send, MessageCircle, CheckCircle } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/yogixt' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/bijoy-laxmi-biswas-cse07/' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/thelearner.yogi/' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      if (params.get('success') === 'true') {
        setShowSuccess(true)
        // Clean up URL
        window.history.replaceState({}, '', window.location.pathname)
        // Hide after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000)
      }
    }
  }, [])

  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Success Toast */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-center gap-3"
        >
          <CheckCircle className="w-6 h-6 text-green-500" />
          <div>
            <p className="text-green-500 font-mono font-semibold">Message Sent!</p>
            <p className="text-terminal-comment text-xs font-mono">I&apos;ll get back to you soon.</p>
          </div>
        </motion.div>
      )}

      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-green/60 font-mono text-sm mb-2">{'// section.contact'}</p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-terminal-text mb-4">
            <span className="text-neon-green">$</span> ./contact_me.sh
          </h2>
          <p className="text-terminal-comment font-mono text-sm max-w-2xl mx-auto">
            // Initiating connection protocol...
          </p>
          <div className="w-24 h-0.5 bg-neon-green mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Consultation Badge */}
            <div className="hacker-card p-6 mb-6 border-neon-green/50">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded bg-neon-green/20 border border-neon-green/50 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <p className="text-neon-green font-mono font-semibold">STATUS: ONLINE</p>
                  <p className="text-terminal-comment text-sm font-mono">
                    // Available for consultation
                  </p>
                </div>
              </div>
              <p className="text-terminal-text/80 text-sm font-mono">
                Open to discussing new projects, creative ideas, or opportunities.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <motion.a
                href="mailto:bijay.official8@gmail.com"
                className="flex items-center gap-4 p-4 hacker-card group"
                whileHover={{ x: 5 }}
              >
                <div className="w-10 h-10 rounded bg-neon-green/10 border border-neon-green/30 flex items-center justify-center group-hover:border-neon-green/60 transition-colors">
                  <Mail className="w-5 h-5 text-neon-green" />
                </div>
                <div>
                  <p className="text-terminal-comment text-xs font-mono">// email</p>
                  <p className="text-terminal-text group-hover:text-neon-green transition-colors font-mono text-sm">
                    Send me an email
                  </p>
                </div>
              </motion.a>

              <div className="flex items-center gap-4 p-4 hacker-card">
                <div className="w-10 h-10 rounded bg-neon-green/10 border border-neon-green/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-neon-green" />
                </div>
                <div>
                  <p className="text-terminal-comment text-xs font-mono">// location</p>
                  <p className="text-terminal-text font-mono text-sm">India</p>
                </div>
              </div>

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/919749033085?text=Hi%20thelearner.yogi!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 hacker-card border-green-500/50 bg-green-500/10 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-10 h-10 rounded bg-green-500/20 border border-green-500/50 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-green-500 font-mono font-semibold">Chat on WhatsApp</p>
                  <p className="text-terminal-comment text-xs font-mono">// Quick response guaranteed</p>
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-terminal-comment text-xs font-mono mb-4">// social_links[]</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded bg-matrix-dark border border-neon-green/30 flex items-center justify-center text-terminal-comment hover:text-neon-green hover:border-neon-green/60 transition-all hover:shadow-[0_0_10px_rgba(0,255,65,0.2)]"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.name}
                  >
                    <link.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="hacker-card p-6"
            >
              <input type="hidden" name="access_key" value="d10087b9-363e-4348-b641-cdb490cc48c7" />
              <input type="hidden" name="subject" value="New message from thelearner.yogi portfolio" />
              <input type="hidden" name="from_name" value="Portfolio Contact Form" />
              <input type="hidden" name="redirect" value="https://thelearner-yogi.vercel.app/?success=true" />

              <p className="text-terminal-comment text-xs font-mono mb-4">
                // send_message.form
              </p>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-neon-green/80 text-xs font-mono mb-2">
                    name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-matrix-black border border-matrix-border rounded text-terminal-text placeholder-terminal-comment/50 font-mono text-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-neon-green/80 text-xs font-mono mb-2">
                    email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-matrix-black border border-matrix-border rounded text-terminal-text placeholder-terminal-comment/50 font-mono text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-neon-green/80 text-xs font-mono mb-2">
                    message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-matrix-black border border-matrix-border rounded text-terminal-text placeholder-terminal-comment/50 font-mono text-sm resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full btn-matrix-filled flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={16} />
                  ./send_message.sh
                </motion.button>
              </div>
            </form>

            {/* Sanskrit closing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-6"
            >
              <p className="text-neon-green font-mono text-lg mb-1">
                शुभम् अस्तु
              </p>
              <p className="text-terminal-comment font-mono text-xs">
                // May there be auspiciousness
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
