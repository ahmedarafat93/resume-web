import type { ComponentType } from 'react'

export interface BlogMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  color: string
}

export const blogPosts: BlogMeta[] = [
  {
    slug: 'welcome',
    title: 'Welcome to My Corner of the Internet',
    excerpt: 'A bit about who I am, why I built this site, and what you can expect to find here — from automotive engineering deep-dives to personal reflections.',
    date: 'Mar 13, 2026',
    readTime: '4 min read',
    tags: ['Personal', 'Introduction'],
    color: '#3b82f6',
  },
  {
    slug: 'future-of-adas',
    title: 'The Future of ADAS: Where Are We Headed?',
    excerpt: 'After years of working on advanced driver assistance systems at Ford, here are my thoughts on the trajectory of ADAS technology and what the next decade looks like.',
    date: 'Mar 13, 2026',
    readTime: '6 min read',
    tags: ['Automotive', 'ADAS', 'Technology'],
    color: '#8b5cf6',
  },
]

// Lazy-load MDX components
const modules = import.meta.glob<{ default: ComponentType }>('./*.mdx', { eager: true })

export const blogComponents: Record<string, ComponentType> = {}

for (const [path, mod] of Object.entries(modules)) {
  const slug = path.replace('./', '').replace('.mdx', '')
  blogComponents[slug] = mod.default
}
