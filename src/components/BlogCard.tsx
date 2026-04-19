import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Clock } from 'lucide-react'
import type { BlogMeta } from '../content/blog'

interface BlogCardProps {
  post: BlogMeta
  index: number
}

export default function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/blog/${post.slug}`} className="block group">
        <div className="bg-dark-card/60 rounded-2xl border border-dark-border overflow-hidden hover:border-accent-blue/30 transition-all duration-300 h-full">
          {/* Color bar */}
          <div
            className="h-1.5"
            style={{
              background: `linear-gradient(90deg, ${post.color || '#3b82f6'}, ${post.color || '#3b82f6'}80, transparent)`,
            }}
          />

          <div className="p-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-dark-light border border-dark-border text-text-muted">
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-text-primary font-heading mb-3 group-hover:text-accent-blue transition-colors">
              {post.title}
            </h3>

            <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-text-muted">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
              <ArrowRight size={16} className="text-text-muted group-hover:text-accent-blue group-hover:translate-x-1 transition-all" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
