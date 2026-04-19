import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import BlogCard from '../components/BlogCard'
import GradientBlob from '../components/GradientBlob'
import { blogPosts } from '../content/blog'

export default function Blog() {
  const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)))
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag ? blogPosts.filter((p) => p.tags.includes(activeTag)) : blogPosts

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-6">
      <GradientBlob className="-top-32 right-0 opacity-50" color1="rgba(6,182,212,0.15)" color2="rgba(236,72,153,0.1)" size={500} />

      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-4">Thoughts & Writing</p>
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-4">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-text-muted max-w-2xl text-lg mb-10">
            Writing about the automotive industry, autonomous vehicles, AI, and things that interest me beyond engineering.
          </p>
        </ScrollReveal>

        {/* Tag filter */}
        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-12">
            <button
              onClick={() => setActiveTag(null)}
              className={`text-xs px-4 py-2 rounded-full border transition-all ${
                activeTag === null
                  ? 'bg-accent-blue text-white border-accent-blue'
                  : 'border-dark-border text-text-muted hover:border-text-muted'
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`text-xs px-4 py-2 rounded-full border transition-all ${
                  activeTag === tag
                    ? 'bg-accent-blue text-white border-accent-blue'
                    : 'border-dark-border text-text-muted hover:border-text-muted'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-text-muted py-20">No posts found for this category.</p>
        )}
      </div>
    </div>
  )
}
