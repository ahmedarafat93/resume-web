import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MapPin, Building2 } from 'lucide-react'
import type { ExperienceItem } from '../data/experience'

interface TimelineCardProps {
  item: ExperienceItem
  index: number
}

export default function TimelineCard({ item, index }: TimelineCardProps) {
  const [expanded, setExpanded] = useState(index === 0)
  const isLeft = index % 2 === 0

  return (
    <div className={`flex items-start gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:text-left`}>
      {/* Card */}
      <motion.div
        className="flex-1 w-full"
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="bg-dark-card/80 rounded-2xl border border-dark-border p-6 cursor-pointer hover:border-dark-border/80 transition-all duration-300 group"
          style={{ borderLeftColor: item.color, borderLeftWidth: '3px' }}
          onClick={() => setExpanded(!expanded)}
          whileHover={{ y: -2, boxShadow: `0 0 30px ${item.color}15` }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium tracking-wider uppercase mb-2" style={{ color: item.color }}>
                {item.period}
              </p>
              <h3 className="text-lg font-semibold text-text-primary font-heading mb-2">
                {item.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
                <span className="flex items-center gap-1">
                  <Building2 size={14} />
                  {item.company}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {item.location}
                </span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-text-muted mt-1 shrink-0"
            >
              <ChevronDown size={20} />
            </motion.div>
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-3 overflow-hidden"
              >
                {item.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                    {bullet}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center shrink-0">
        <motion.div
          className="w-4 h-4 rounded-full border-2 border-dark-card"
          style={{ backgroundColor: item.color }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring' }}
        />
      </div>

      {/* Spacer for the other side */}
      <div className="flex-1 hidden md:block" />
    </div>
  )
}
