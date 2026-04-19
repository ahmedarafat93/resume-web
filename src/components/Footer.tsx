import { Linkedin, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-light/50">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-text-muted text-sm">
          <MapPin size={14} />
          <span>Metro Detroit, MI</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/arafata"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-blue transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:ahmed.arafat93@icloud.com"
            className="text-text-muted hover:text-accent-cyan transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} Ahmed Arafat
        </p>
      </div>
    </footer>
  )
}
