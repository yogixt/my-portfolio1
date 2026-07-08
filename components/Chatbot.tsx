'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, User, Loader2, Bot } from 'lucide-react'

interface Message {
  role: 'user' | 'model'
  parts: [{ text: string }]
}

const suggestedQuestions = [
  "Who is Bijoy Laxmi Biswas?",
  "What are your skills?",
  "Tell me about your experience",
  "Are you available for freelance?",
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim() || isLoading) return

    const userMessage: Message = {
      role: 'user',
      parts: [{ text: messageText }],
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageText,
          history: messages,
        }),
      })

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      const botMessage: Message = {
        role: 'model',
        parts: [{ text: data.response }],
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      const errorMessage: Message = {
        role: 'model',
        parts: [{ text: 'Sorry, I encountered an error. Please try again. 🙏' }],
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <>
      {/* Chat Button with Om Symbol */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-neon-green text-matrix-black flex items-center justify-center shadow-[0_0_25px_rgba(0,255,65,0.6)] hover:shadow-[0_0_40px_rgba(0,255,65,0.8)] transition-all ${
          isOpen ? 'hidden' : ''
        }`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-3xl font-bold">ॐ</span>
      </motion.button>

      {/* Pulsing ring effect */}
      {!isOpen && (
        <motion.div
          className="fixed bottom-6 right-6 z-40 w-16 h-16 rounded-full border-2 border-neon-green"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-100px)] bg-matrix-black border border-neon-green/30 rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.2)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-matrix-dark border-b border-neon-green/30 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neon-green/20 border border-neon-green/50 flex items-center justify-center">
                  <span className="text-neon-green text-xl">ॐ</span>
                </div>
                <div>
                  <p className="text-neon-green font-mono text-sm font-semibold">
                    Ask Bijoy
                  </p>
                  <p className="text-terminal-comment text-xs font-mono">
                    AI Assistant
                  </p>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="text-terminal-comment hover:text-neon-green transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-neon-green/10 border border-neon-green/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-neon-green text-4xl">ॐ</span>
                  </div>
                  <p className="text-neon-green font-mono text-sm mb-1">
                    नमस्ते! 🙏
                  </p>
                  <p className="text-terminal-text font-mono text-base mb-2">
                    I&apos;m <span className="text-neon-green font-bold">Bijoy Laxmi Biswas</span>&apos;s AI
                  </p>
                  <p className="text-terminal-comment text-xs font-mono mb-4">
                    Ask me anything about thelearner.yogi
                  </p>
                  <div className="space-y-2">
                    {suggestedQuestions.map((question, index) => (
                      <motion.button
                        key={index}
                        onClick={() => sendMessage(question)}
                        className="block w-full text-left px-3 py-2 bg-matrix-dark border border-neon-green/20 rounded text-terminal-text text-xs font-mono hover:border-neon-green/50 hover:text-neon-green transition-all"
                        whileHover={{ x: 5 }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {'>'} {question}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.role === 'user'
                        ? 'bg-terminal-comment/20 border border-terminal-comment/30'
                        : 'bg-neon-green/20 border border-neon-green/50'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <User size={16} className="text-terminal-comment" />
                    ) : (
                      <Bot size={16} className="text-neon-green" />
                    )}
                  </div>
                  <div
                    className={`max-w-[75%] px-3 py-2 rounded-lg font-mono text-sm ${
                      message.role === 'user'
                        ? 'bg-terminal-comment/20 text-terminal-text'
                        : 'bg-neon-green/10 border border-neon-green/20 text-terminal-text'
                    }`}
                  >
                    {message.parts[0].text}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-neon-green/20 border border-neon-green/50 flex items-center justify-center">
                    <Bot size={16} className="text-neon-green" />
                  </div>
                  <div className="bg-neon-green/10 border border-neon-green/20 px-3 py-2 rounded-lg">
                    <Loader2 size={16} className="text-neon-green animate-spin" />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-neon-green/30 p-3"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-matrix-dark border border-neon-green/20 rounded px-3 py-2 text-terminal-text placeholder-terminal-comment/50 font-mono text-sm focus:outline-none focus:border-neon-green/50"
                  disabled={isLoading}
                />
                <motion.button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 bg-neon-green text-matrix-black rounded flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={18} />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
