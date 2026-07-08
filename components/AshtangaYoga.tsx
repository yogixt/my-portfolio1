'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

interface Limb {
  id: number
  name: string
  sanskrit: string
  symbol: string
  translation: string
  description: string
}

const limbs: Limb[] = [
  {
    id: 1,
    name: 'Yama',
    sanskrit: 'यम',
    symbol: '◇',
    translation: 'Ethical Standards / Restraints',
    description:
      'The five Yamas are moral imperatives: Ahimsa (non-violence), Satya (truthfulness), Asteya (non-stealing), Brahmacharya (right use of energy), and Aparigraha (non-possessiveness). They form the ethical foundation upon which all other practices rest.',
  },
  {
    id: 2,
    name: 'Niyama',
    sanskrit: 'नियम',
    symbol: '△',
    translation: 'Self-Discipline / Observances',
    description:
      'The five Niyamas are personal observances: Saucha (cleanliness), Santosha (contentment), Tapas (discipline), Svadhyaya (self-study), and Ishvara Pranidhana (surrender to a higher power). They cultivate inner strength and devotion.',
  },
  {
    id: 3,
    name: 'Asana',
    sanskrit: 'आसन',
    symbol: '☸',
    translation: 'Postures',
    description:
      'Asana refers to the physical postures practiced in yoga. Through disciplined practice, the body becomes a stable and comfortable seat for meditation. Patanjali defines asana as "sthira sukham asanam" — steady and comfortable posture.',
  },
  {
    id: 4,
    name: 'Pranayama',
    sanskrit: 'प्राणायाम',
    symbol: '≋',
    translation: 'Breath Control',
    description:
      'Pranayama is the regulation of the breath — the vital life force (prana). Through techniques like Ujjayi, Nadi Shodhana, and Kapalabhati, the practitioner gains mastery over the energy body and prepares the mind for deeper states.',
  },
  {
    id: 5,
    name: 'Pratyahara',
    sanskrit: 'प्रत्याहार',
    symbol: '◉',
    translation: 'Sense Withdrawal',
    description:
      'Pratyahara is the conscious withdrawal of the senses from external objects. Like a turtle drawing its limbs inward, the practitioner turns awareness inward, breaking the chain of reactivity to sensory stimuli.',
  },
  {
    id: 6,
    name: 'Dharana',
    sanskrit: 'धारणा',
    symbol: '⊕',
    translation: 'Concentration',
    description:
      'Dharana is single-pointed concentration — fixing the mind on one object, mantra, or point of focus. It is the gateway to meditation, training the scattered mind to hold steady attention without wavering.',
  },
  {
    id: 7,
    name: 'Dhyana',
    sanskrit: 'ध्यान',
    symbol: '❖',
    translation: 'Meditation',
    description:
      'Dhyana is the unbroken flow of awareness toward the object of concentration. Where Dharana is the effort, Dhyana is the effortless state that arises — an uninterrupted stream of consciousness.',
  },
  {
    id: 8,
    name: 'Samadhi',
    sanskrit: 'समाधि',
    symbol: 'ॐ',
    translation: 'Enlightenment / Union',
    description:
      'Samadhi is the ultimate goal — complete absorption where the meditator, the act of meditation, and the object of meditation merge into one. The self dissolves into universal consciousness. This is liberation (Moksha).',
  },
]

const SVG_SIZE = 540
const RADIUS = 220
const NODE_SIZE = 72
const CENTER = SVG_SIZE / 2

function getNodePosition(index: number) {
  const angle = (index * 360) / 8 - 90
  const rad = (angle * Math.PI) / 180
  return {
    x: CENTER + RADIUS * Math.cos(rad),
    y: CENTER + RADIUS * Math.sin(rad),
  }
}

// Energy particle config
const particles = [
  { radius: 160, duration: 8, size: 3, startAngle: 0 },
  { radius: 180, duration: 12, size: 2.5, startAngle: 60 },
  { radius: 200, duration: 10, size: 2, startAngle: 120 },
  { radius: 140, duration: 15, size: 3.5, startAngle: 180 },
  { radius: 190, duration: 18, size: 2, startAngle: 240 },
  { radius: 170, duration: 14, size: 3, startAngle: 300 },
]

export default function AshtangaYoga() {
  const [selectedLimb, setSelectedLimb] = useState<Limb | null>(null)
  const [hoveredLimb, setHoveredLimb] = useState<Limb | null>(null)
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  useEffect(() => {
    setMounted(true)
  }, [])

  const activeLimb = hoveredLimb || selectedLimb

  const handleNodeClick = (limb: Limb) => {
    setSelectedLimb((prev) => (prev?.id === limb.id ? null : limb))
  }

  return (
    <section id="ashtanga" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-green/60 font-mono text-sm mb-2">
            {'// section.ashtanga_yoga'}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-terminal-text mb-4">
            <span className="text-neon-green">$</span> cat ./ashtanga_yoga.sacred
          </h2>
          <p className="text-terminal-comment font-mono text-sm mb-4">
            // अष्टाङ्गयोग — The Eight Limbs of Yoga by Maharishi Patanjali
          </p>
          <div className="w-24 h-0.5 bg-neon-green mx-auto" />
        </motion.div>

        {/* Circular Mandala - responsive for all screens */}
        {mounted && <div className="flex flex-col items-center">
          <div
            className="relative w-full max-w-[540px] mx-auto"
            style={{ aspectRatio: '1 / 1' }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
              className="absolute inset-0"
            >
              {/* Outer decorative ring - rotates slowly */}
              <motion.circle
                cx={CENTER}
                cy={CENTER}
                r={RADIUS + 40}
                fill="none"
                stroke="rgba(0,255,65,0.15)"
                strokeWidth={1}
                strokeDasharray="8 6"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
              />

              {/* Inner decorative ring - counter-rotates */}
              <motion.circle
                cx={CENTER}
                cy={CENTER}
                r={RADIUS - 40}
                fill="none"
                stroke="rgba(0,255,65,0.1)"
                strokeWidth={1}
                strokeDasharray="4 8"
                animate={{ rotate: -360 }}
                transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
              />

              {/* Connecting lines from center to each node */}
              {limbs.map((_, i) => {
                const pos = getNodePosition(i)
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={CENTER}
                    y1={CENTER}
                    x2={pos.x}
                    y2={pos.y}
                    stroke="rgba(0,255,65,0.1)"
                    strokeWidth={1}
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  />
                )
              })}

              {/* Octagon connecting adjacent nodes */}
              <motion.polygon
                points={limbs
                  .map((_, i) => {
                    const pos = getNodePosition(i)
                    return `${pos.x},${pos.y}`
                  })
                  .join(' ')}
                fill="none"
                stroke="rgba(0,255,65,0.15)"
                strokeWidth={1}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.2 }}
              />

              {/* Energy particles */}
              {particles.map((p, i) => (
                <motion.circle
                  key={`particle-${i}`}
                  r={p.size}
                  fill="rgba(0,255,65,0.6)"
                  animate={{
                    cx: [
                      CENTER + p.radius * Math.cos(((p.startAngle) * Math.PI) / 180),
                      CENTER + p.radius * Math.cos(((p.startAngle + 120) * Math.PI) / 180),
                      CENTER + p.radius * Math.cos(((p.startAngle + 240) * Math.PI) / 180),
                      CENTER + p.radius * Math.cos(((p.startAngle + 360) * Math.PI) / 180),
                    ],
                    cy: [
                      CENTER + p.radius * Math.sin(((p.startAngle) * Math.PI) / 180),
                      CENTER + p.radius * Math.sin(((p.startAngle + 120) * Math.PI) / 180),
                      CENTER + p.radius * Math.sin(((p.startAngle + 240) * Math.PI) / 180),
                      CENTER + p.radius * Math.sin(((p.startAngle + 360) * Math.PI) / 180),
                    ],
                  }}
                  transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              ))}

              {/* Node circles rendered inside SVG for proper scaling */}
              {limbs.map((limb, i) => {
                const pos = getNodePosition(i)
                const isSelected = selectedLimb?.id === limb.id
                const isHovered = hoveredLimb?.id === limb.id
                const isActive = isSelected || isHovered

                return (
                  <g key={`svg-node-${limb.id}`}>
                    {/* Pulse ring */}
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
                      r={NODE_SIZE / 2}
                      fill="none"
                      stroke="rgba(0,255,65,0.3)"
                      strokeWidth={1}
                      animate={{
                        r: [NODE_SIZE / 2, NODE_SIZE / 2 * 1.3, NODE_SIZE / 2],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.375,
                        ease: 'easeInOut',
                      }}
                    />

                    {/* Glow effect */}
                    {isActive && (
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r={NODE_SIZE / 2}
                        fill="none"
                        stroke="rgba(0,255,65,0.4)"
                        strokeWidth={3}
                        filter="url(#glow)"
                      />
                    )}

                    {/* Node background */}
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
                      r={NODE_SIZE / 2}
                      fill={isSelected ? 'rgba(0,255,65,0.2)' : 'rgba(0,10,2,0.9)'}
                      stroke={isActive ? 'rgba(0,255,65,1)' : 'rgba(0,255,65,0.4)'}
                      strokeWidth={2}
                      initial={{ r: 0, opacity: 0 }}
                      animate={isInView ? { r: NODE_SIZE / 2, opacity: 1 } : {}}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                        delay: 0.3 + i * 0.1,
                      }}
                      className="cursor-pointer"
                      onClick={() => handleNodeClick(limb)}
                      onMouseEnter={() => setHoveredLimb(limb)}
                      onMouseLeave={() => setHoveredLimb(null)}
                    />

                    {/* Symbol text */}
                    <text
                      x={pos.x}
                      y={pos.y - 4}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="rgba(0,255,65,1)"
                      fontSize={18}
                      className="pointer-events-none"
                    >
                      {limb.symbol}
                    </text>

                    {/* Name text */}
                    <text
                      x={pos.x}
                      y={pos.y + 14}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="rgba(224,224,224,1)"
                      fontSize={10}
                      fontFamily="monospace"
                      className="pointer-events-none"
                    >
                      {limb.name}
                    </text>
                  </g>
                )
              })}

              {/* SVG filter for glow */}
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>

            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <AnimatePresence mode="wait">
                {activeLimb ? (
                  <motion.div
                    key={activeLimb.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="text-center"
                  >
                    <p className="text-neon-green text-xl md:text-3xl font-bold mb-1">
                      {activeLimb.sanskrit}
                    </p>
                    <p className="text-terminal-text font-mono text-xs md:text-sm">
                      {activeLimb.name}
                    </p>
                    <p className="text-terminal-comment font-mono text-[10px] md:text-xs mt-1">
                      {activeLimb.translation}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="om"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="text-center"
                  >
                    <p className="text-neon-green text-4xl md:text-5xl glow-text">ॐ</p>
                    <p className="text-terminal-comment font-mono text-[10px] md:text-xs mt-2">
                      अष्टाङ्गयोग
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Detail Card */}
          <AnimatePresence>
            {selectedLimb && (
              <motion.div
                key={selectedLimb.id}
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: 20, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="w-full max-w-2xl mt-8 overflow-hidden"
              >
                <div className="hacker-card p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4 mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-neon-green/10 border border-neon-green/50 flex items-center justify-center flex-shrink-0">
                      <span className="text-neon-green text-lg md:text-xl">
                        {selectedLimb.symbol}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-neon-green font-mono font-bold text-base md:text-lg">
                        {selectedLimb.name}{' '}
                        <span className="text-terminal-comment font-normal">
                          ({selectedLimb.sanskrit})
                        </span>
                      </h3>
                      <p className="text-terminal-comment font-mono text-xs md:text-sm">
                        // Limb {selectedLimb.id} of 8 —{' '}
                        {selectedLimb.translation}
                      </p>
                    </div>
                  </div>
                  <div className="bg-matrix-black border border-neon-green/20 rounded p-3 md:p-4">
                    <p className="text-terminal-comment text-xs mb-2 font-mono">
                      {'/**'}
                    </p>
                    <p className="text-terminal-text font-mono text-xs md:text-sm leading-relaxed pl-2">
                      {' * '}
                      {selectedLimb.description}
                    </p>
                    <p className="text-terminal-comment text-xs mt-2 font-mono">
                      {' */'}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>}
      </div>

      {/* Section Divider */}
      <div className="section-divider mt-20" />
    </section>
  )
}
