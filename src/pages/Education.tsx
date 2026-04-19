import ScrollReveal from '../components/ScrollReveal'
import EducationCard from '../components/EducationCard'
import GradientBlob from '../components/GradientBlob'
import { education } from '../data/education'

export default function Education() {
  return (
    <div className="relative min-h-screen pt-24 pb-20 px-6">
      <GradientBlob className="-top-32 -left-48 opacity-50" color1="rgba(139,92,246,0.15)" color2="rgba(6,182,212,0.1)" size={500} />

      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-accent-purple text-sm font-medium tracking-widest uppercase mb-4">Academic Journey</p>
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-4">
            <span className="gradient-text">Education</span>
          </h1>
          <p className="text-text-muted max-w-2xl text-lg mb-16">
            A global academic journey spanning four countries — from the Netherlands to Idaho, and now at the University of Michigan.
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {education.map((item, i) => (
            <EducationCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
