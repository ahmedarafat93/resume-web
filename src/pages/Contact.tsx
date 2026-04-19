import { motion } from 'framer-motion'
import { Mail, Linkedin, MapPin, ExternalLink } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import GradientBlob from '../components/GradientBlob'

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ahmed.arafat93@icloud.com',
    href: 'mailto:ahmed.arafat93@icloud.com',
    color: '#06b6d4',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/arafata',
    href: 'https://linkedin.com/in/arafata',
    color: '#3b82f6',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Metro Detroit, MI',
    href: undefined,
    color: '#8b5cf6',
  },
]

export default function Contact() {
  return (
    <div className="relative min-h-screen pt-24 pb-20 px-6">
      <GradientBlob className="-top-32 left-1/4 opacity-50" color1="rgba(6,182,212,0.15)" color2="rgba(139,92,246,0.1)" size={500} />

      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-4">Get In Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-4">
            <span className="gradient-text">Contact</span>
          </h1>
          <p className="text-text-muted max-w-xl text-lg mb-16">
            Interested in ADAS, computer vision, or autonomous systems? Let's connect.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {contactLinks.map((link, i) => (
            <ScrollReveal key={link.label} delay={i * 0.1}>
              <motion.div
                className="bg-dark-card/60 rounded-2xl border border-dark-border p-6 flex items-center gap-5 group"
                whileHover={link.href ? { y: -2, boxShadow: `0 0 30px ${link.color}15` } : undefined}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `${link.color}15` }}
                >
                  <link.icon size={24} style={{ color: link.color }} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-1">{link.label}</p>
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-lg text-text-primary font-medium hover:text-accent-cyan transition-colors flex items-center gap-2"
                    >
                      {link.value}
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <p className="text-lg text-text-primary font-medium">{link.value}</p>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
