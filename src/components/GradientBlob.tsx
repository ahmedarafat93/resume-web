import { motion } from 'framer-motion'

interface GradientBlobProps {
  className?: string
  color1?: string
  color2?: string
  size?: number
}

export default function GradientBlob({
  className = '',
  color1 = 'rgba(59, 130, 246, 0.3)',
  color2 = 'rgba(139, 92, 246, 0.3)',
  size = 400,
}: GradientBlobProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color1}, ${color2}, transparent 70%)`,
      }}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}
