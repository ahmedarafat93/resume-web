import { motion } from 'framer-motion'
import { GraduationCap, BookOpen } from 'lucide-react'
import type { EducationItem } from '../data/education'

interface EducationCardProps {
  item: EducationItem
  index: number
}

export default function EducationCard({ item, index }: EducationCardProps) {
  return (
    <motion.div
      className="relative bg-dark-card/60 rounded-2xl border border-dark-border p-6 hover:border-dark-border/80 transition-all duration-300 group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, boxShadow: `0 0 40px ${item.color}10` }}
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />

      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
          style={{ background: `${item.color}15` }}
        >
          {item.flag}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold text-text-primary font-heading truncate">{item.school}</h3>
          </div>
          <p className="text-sm font-medium mb-1" style={{ color: item.color }}>{item.period}</p>
          <p className="text-sm text-text-secondary mb-3">{item.degree}</p>

          <div className="flex items-start gap-2 mb-3">
            <GraduationCap size={14} className="text-text-muted mt-0.5 shrink-0" />
            <p className="text-xs text-text-muted">{item.focus}</p>
          </div>

          <div className="flex items-start gap-2">
            <BookOpen size={14} className="text-text-muted mt-0.5 shrink-0" />
            <p className="text-xs text-text-muted leading-relaxed">{item.coursework}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
