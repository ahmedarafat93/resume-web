import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, PenLine, Cpu, Eye, Car } from 'lucide-react'
import Hero from '../components/Hero'
import ScrollReveal from '../components/ScrollReveal'
import { allSkills } from '../data/skills'

const quickLinks = [
  { to: '/experience', label: 'Experience', description: 'ADAS Engineering at Ford', icon: Briefcase, color: '#3b82f6' },
  { to: '/education', label: 'Education', description: 'UMich, College of Idaho, Utrecht', icon: GraduationCap, color: '#8b5cf6' },
  { to: '/blog', label: 'Blog', description: 'Automotive, AI, and more', icon: PenLine, color: '#06b6d4' },
]

const highlights = [
  { icon: Car, label: 'ADAS Systems', value: '20+ features integrated' },
  { icon: Eye, label: 'Computer Vision', value: 'UMich MS (in progress)' },
  { icon: Cpu, label: 'Years in Auto', value: '5+ years at Ford' },
]

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Highlights */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.label} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 text-center group hover:border-accent-blue/30 transition-all duration-300">
                  <h.icon className="mx-auto mb-3 text-accent-cyan" size={28} />
                  <p className="text-2xl font-bold font-heading text-text-primary mb-1">{h.value}</p>
                  <p className="text-sm text-text-muted">{h.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links — sticky heading pinned while cards scroll past */}
      <section className="py-20 px-6 bg-dark-light/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-10 md:gap-16 items-start">
            {/* Sticky heading column */}
            <div className="md:sticky md:top-28">
              <ScrollReveal>
                <p className="text-accent-cyan text-xs font-medium tracking-[0.25em] uppercase mb-4">Overview</p>
                <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 leading-[1.1]">
                  <span className="gradient-text">Explore</span>
                  <br />
                  <span className="text-text-primary">the journey</span>
                </h2>
                <p className="text-text-muted max-w-sm">
                  Navigate through my professional journey, education, and thoughts.
                </p>
              </ScrollReveal>
            </div>

            {/* Cards column — scrolls past sticky heading */}
            <div className="flex flex-col gap-5">
              {quickLinks.map((link, i) => (
                <ScrollReveal key={link.to} delay={i * 0.08}>
                  <Link to={link.to} className="block group">
                    <motion.div
                      className="bg-dark-card/60 rounded-2xl border border-dark-border p-8 transition-all duration-300 hover:border-dark-border/80"
                      whileHover={{ y: -4, boxShadow: `0 0 40px ${link.color}15` }}
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                        style={{ background: `${link.color}15` }}
                      >
                        <link.icon size={24} style={{ color: link.color }} />
                      </div>
                      <h3 className="text-xl font-semibold font-heading text-text-primary mb-2 group-hover:text-accent-blue transition-colors">
                        {link.label}
                      </h3>
                      <p className="text-sm text-text-muted">{link.description}</p>
                    </motion.div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills ticker */}
      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-12">
              <span className="gradient-text">Tech Stack</span>
            </h2>
          </ScrollReveal>

          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark to-transparent z-10" />

            <motion.div
              className="flex gap-4 whitespace-nowrap"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              {[...allSkills, ...allSkills].map((skill, i) => (
                <span
                  key={`${skill}-${i}`}
                  className="px-5 py-2.5 rounded-full bg-dark-card border border-dark-border text-sm text-text-secondary shrink-0 hover:border-accent-blue/50 hover:text-accent-blue transition-colors"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
