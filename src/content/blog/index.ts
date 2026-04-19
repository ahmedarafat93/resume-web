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

interface MdxModule {
  default: ComponentType
  frontmatter: {
    title: string
    excerpt: string
    date: string | Date
    readTime: string
    tags: string[]
    color: string
  }
}

const modules = import.meta.glob<MdxModule>('./*.mdx', { eager: true })

const formatDate = (d: string | Date): string => {
  const date = typeof d === 'string' ? new Date(d) : d
  if (isNaN(date.getTime())) return String(d)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export const blogComponents: Record<string, ComponentType> = {}
export const blogPosts: BlogMeta[] = []

for (const [path, mod] of Object.entries(modules)) {
  const slug = path.replace('./', '').replace('.mdx', '')
  blogComponents[slug] = mod.default
  const fm = mod.frontmatter
  if (fm) {
    blogPosts.push({
      slug,
      title: fm.title,
      excerpt: fm.excerpt,
      date: formatDate(fm.date),
      readTime: fm.readTime,
      tags: fm.tags ?? [],
      color: fm.color,
    })
  }
}

blogPosts.sort((a, b) => {
  const da = new Date(a.date).getTime()
  const db = new Date(b.date).getTime()
  return db - da
})
