import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import TimelineCard from '../components/TimelineCard'
import GradientBlob from '../components/GradientBlob'
import { experience } from '../data/experience'

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 80%', 'end 40%'],
  })
  const lineScale = useSpring(scrollYProgress, { stiffness: 100, damping: 24, restDelta: 0.001 })

  return (
    <div className="relative min-h-screen pt-24 pb-20 px-6">
      <GradientBlob className="-top-32 -right-48 opacity-50" color1="rgba(59,130,246,0.15)" color2="rgba(139,92,246,0.1)" size={500} />

      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-4">Career Timeline</p>
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-4">
            <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-text-muted max-w-2xl text-lg mb-16">
            From full-stack development to leading ADAS feature integration at Ford Motor Company — a journey driven by passion for automotive innovation.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical track (faint) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-dark-border/40" />
          {/* Vertical progress line — fills as you scroll through items */}
          <motion.div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-accent-blue via-accent-purple to-accent-cyan"
            style={{ scaleY: lineScale }}
            aria-hidden
          />

          <div className="space-y-12">
            {experience.map((item, i) => (
              <TimelineCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Activities */}
        <ScrollReveal className="mt-20">
          <h2 className="text-3xl font-bold font-heading mb-8">
            <span className="gradient-text">Activities & Awards</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Volunteer Coding Instructor', desc: 'Creating Mobile Apps in Metro Detroit Schools', period: 'Spring 2022' },
              { title: 'Davis Project for Peace Award', desc: 'Access to Water: A Matter of health, peace, and justice', period: 'Summer 2017' },
              { title: 'United World College Scholarship', desc: 'UWC Maastricht', period: '2010' },
              { title: 'Davis Scholar / Academic Merit Scholarship', desc: 'The College of Idaho', period: 'Fall 2013' },
            ].map((a, i) => (
              <div key={i} className="bg-dark-card/40 rounded-xl border border-dark-border p-5 hover:border-accent-cyan/20 transition-colors">
                <p className="text-xs text-accent-cyan mb-1">{a.period}</p>
                <h4 className="text-sm font-semibold text-text-primary mb-1">{a.title}</h4>
                <p className="text-xs text-text-muted">{a.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
