import { motion } from 'framer-motion'

export default function ThemeToggle({ theme, onToggle }) {
  const dark = theme === 'dark'

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      onClick={onToggle}
      className={`flex h-8 w-14 items-center rounded-full border border-line bg-surface p-1 ${
        dark ? 'justify-end' : 'justify-start'
      }`}
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className="grid h-6 w-6 place-items-center rounded-full bg-accent text-sm text-navy"
      >
        {dark ? '☾' : '☀'}
      </motion.span>
    </button>
  )
}
