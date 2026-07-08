'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const commands = [
  { prompt: '$ whoami', output: 'thelearner.yogi | मण्डाधिकारी | Ashtanga Yoga Practitioner' },
  { prompt: '$ cat /etc/profession', output: 'AI Engineer @ UNOMOK' },
  { prompt: '$ echo $GURU', output: '🙏 Under the guidance of Guruji...' },
  { prompt: '$ cat ~/.dharma', output: 'योगः कर्मसु कौशलम् | Walking the path of Karma Yoga' },
  { prompt: '$ ls -la ~/skills/', output: 'Python  n8n  LangChain  OpenAI  PyTorch  TensorFlow  React' },
  { prompt: '$ systemctl status sadhana', output: '● karma-yoga.service - ACTIVE (running)\n   Available for Freelance & Consultation' },
]

export default function Terminal() {
  const [displayedCommands, setDisplayedCommands] = useState<typeof commands>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [currentText, setCurrentText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [loginDate, setLoginDate] = useState('')

  useEffect(() => {
    setLoginDate(new Date().toLocaleDateString())
  }, [])

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  // Typing effect
  useEffect(() => {
    if (currentIndex >= commands.length) {
      setIsTyping(false)
      return
    }

    const currentCommand = commands[currentIndex]
    const fullText = currentCommand.prompt

    if (currentText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1))
      }, 50 + Math.random() * 30)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedCommands((prev) => [...prev, currentCommand])
        setCurrentText('')
        setCurrentIndex((prev) => prev + 1)
      }, 400)
      return () => clearTimeout(timeout)
    }
  }, [currentText, currentIndex])

  // Restart animation after completion
  useEffect(() => {
    if (!isTyping && currentIndex >= commands.length) {
      const timeout = setTimeout(() => {
        setDisplayedCommands([])
        setCurrentIndex(0)
        setCurrentText('')
        setIsTyping(true)
      }, 6000)
      return () => clearTimeout(timeout)
    }
  }, [isTyping, currentIndex])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="rounded-lg overflow-hidden border border-neon-green/30 shadow-[0_0_30px_rgba(0,255,65,0.1)]">
        {/* Terminal Header */}
        <div className="bg-matrix-gray px-4 py-2 flex items-center justify-between border-b border-neon-green/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-neon-green/60 text-xs font-mono">thelearner@matrix:~</span>
          <div className="w-16" />
        </div>

        {/* Terminal Body */}
        <div className="bg-matrix-black/95 p-4 font-mono text-sm min-h-[300px] max-h-[400px] overflow-y-auto">
          {/* Welcome message */}
          <div className="text-neon-green/40 mb-4 text-xs">
            Last login: {loginDate} on ttys000
          </div>

          {/* Previously typed commands */}
          {displayedCommands.map((cmd, index) => (
            <div key={index} className="mb-3">
              <div className="text-neon-green">{cmd.prompt}</div>
              <div className="text-terminal-text/80 pl-0 mt-1 whitespace-pre-wrap">{cmd.output}</div>
            </div>
          ))}

          {/* Currently typing */}
          {isTyping && currentIndex < commands.length && (
            <div className="mb-3">
              <span className="text-neon-green">
                {currentText}
                <span
                  className={`inline-block w-2 h-4 bg-neon-green ml-0.5 align-middle ${
                    showCursor ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </span>
            </div>
          )}

          {/* Blinking cursor when idle */}
          {!isTyping && (
            <div className="text-neon-green">
              ${' '}
              <span
                className={`inline-block w-2 h-4 bg-neon-green align-middle ${
                  showCursor ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
