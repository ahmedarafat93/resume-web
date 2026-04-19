import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import GradientBlob from './GradientBlob'

const roles = [
  'ADAS Vision & Camera Engineer',
  'Computer Vision Researcher',
  'Autonomous Systems Builder',
  'Full-Stack Developer',
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Parallax depths — background moves slow, content moves faster
  const blobSlowY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const blobFastY = useTransform(scrollYProgress, [0, 1], ['0%', '70%'])
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 md:pt-0 md:pb-0">
      {/* Background blobs — parallax at varying speeds */}
      <motion.div style={{ y: blobSlowY }} className="absolute inset-0">
        <GradientBlob className="-top-32 -left-32" color1="rgba(59,130,246,0.2)" color2="rgba(139,92,246,0.15)" size={600} />
      </motion.div>
      <motion.div style={{ y: blobFastY }} className="absolute inset-0">
        <GradientBlob className="-bottom-48 -right-32" color1="rgba(6,182,212,0.15)" color2="rgba(236,72,153,0.1)" size={500} />
      </motion.div>
      <motion.div style={{ y: blobSlowY }} className="absolute inset-0">
        <GradientBlob className="top-1/3 right-1/4" color1="rgba(139,92,246,0.1)" color2="rgba(59,130,246,0.1)" size={300} />
      </motion.div>

      {/* Grid overlay */}
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 opacity-[0.03]"
        aria-hidden
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
        className="relative z-10 px-6 max-w-6xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] items-center gap-10 md:gap-16">
          {/* Text column */}
          <motion.div
            className="text-center md:text-left order-2 md:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="text-accent-cyan text-sm font-medium tracking-widest uppercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-[1.05]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="gradient-text">Ahmed</span>{' '}
              <span className="text-text-primary">Arafat</span>
            </motion.h1>

            {/* Animated roles */}
            <motion.div
              className="h-10 mb-8 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                animate={{ y: [0, -40, -80, -120, 0] }}
                transition={{ duration: 8, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' }}
              >
                {roles.map((role, i) => (
                  <div key={i} className="h-10 flex items-center justify-center md:justify-start">
                    <span className="text-xl md:text-2xl text-text-secondary font-light">{role}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.p
              className="text-text-muted max-w-xl mx-auto md:mx-0 text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              Passionate about breaking new ground within ADAS systems and software development for Automotive.
              Currently pursuing a Master's in AI & Computer Vision at the University of Michigan.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <a
                href="/experience"
                className="px-10 py-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-base hover:shadow-lg hover:shadow-accent-blue/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Experience
              </a>
              <a
                href="/blog"
                className="px-10 py-4 rounded-full border border-dark-border text-text-secondary font-semibold text-base hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300"
              >
                Read My Blog
              </a>
            </motion.div>
          </motion.div>

          {/* Photo column */}
          <motion.div
            className="order-1 md:order-2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Ambient glow */}
              <div
                aria-hidden
                className="absolute -inset-6 rounded-[2rem] blur-2xl opacity-60"
                style={{
                  background:
                    'conic-gradient(from 180deg at 50% 50%, rgba(59,130,246,0.35), rgba(139,92,246,0.25), rgba(6,182,212,0.3), rgba(59,130,246,0.35))',
                }}
              />
              {/* Gradient border frame */}
              <div className="relative p-[2px] rounded-[1.75rem] bg-gradient-to-br from-accent-blue via-accent-purple to-accent-cyan">
                <div className="relative overflow-hidden rounded-[1.65rem] bg-dark-card">
                  <motion.img
                    src="/ahmed.jpg"
                    alt="Ahmed Arafat"
                    className="block w-[260px] h-[340px] sm:w-[300px] sm:h-[390px] md:w-[340px] md:h-[440px] lg:w-[380px] lg:h-[490px] object-cover object-[center_20%]"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* Soft inner gradient wash to blend with dark theme */}
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none bg-gradient-to-t from-dark/40 via-transparent to-transparent"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator — fades out as you scroll */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-text-muted/30" size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
