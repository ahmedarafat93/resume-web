import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { blogPosts, blogComponents } from '../content/blog'
import GradientBlob from '../components/GradientBlob'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const meta = blogPosts.find((p) => p.slug === slug)
  const Component = slug ? blogComponents[slug] : undefined

  if (!meta || !Component) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-heading mb-4 gradient-text">Post Not Found</h1>
          <Link to="/blog" className="text-accent-cyan hover:underline">Back to blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-6">
      <GradientBlob className="-top-32 -right-32 opacity-40" color1={`${meta.color}30`} color2="rgba(139,92,246,0.1)" size={400} />

      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-accent-cyan transition-colors mb-8">
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {meta.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-dark-card border border-dark-border text-text-muted">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text leading-tight">
          {meta.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-text-muted mb-10">
          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {meta.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {meta.readTime}
          </span>
        </div>

        <div className="h-px bg-gradient-to-r from-accent-blue via-accent-purple to-transparent mb-10" />

        {/* MDX Content */}
        <article className="prose-custom">
          <Component />
        </article>
      </motion.div>
    </div>
  )
}
