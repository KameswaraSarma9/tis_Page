import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { contact, sports } from '../data/content'

const headline = ['Welcome', 'to', 'Tulas', 'International', 'School']

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const word = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const sunY = useTransform(scrollY, [0, 600], [0, 120])

  // doubled so the -50% marquee loop is seamless
  const ticker = [...sports, ...sports]

  return (
    <section id="top" className="relative overflow-hidden">
      <motion.div
        aria-hidden
        style={{ y: reduce ? 0 : sunY }}
        className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-accent sm:h-[28rem] sm:w-[28rem]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24">
        <motion.h1
          variants={container}
          initial={reduce ? 'show' : 'hidden'}
          animate="show"
          className="font-display text-5xl font-extrabold leading-[1.02] sm:text-7xl lg:text-8xl"
        >
          {headline.map((w, i) => (
            <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-2 align-bottom">
              <motion.span variants={word} className="inline-block">
                {w}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          TIS is one of India’s top boarding and day schools in Dehradun, India. Our CBSE curriculum
          focuses on academic excellence, holistic development, and preparing students to be global
          leaders.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={contact.applyUrl} className="rounded-full bg-navy px-7 py-3 font-bold text-white">
            Apply now
          </a>
          <a href="#contact" className="rounded-full border-2 border-ink px-7 py-3 font-bold">
            Enquire now
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-line bg-surface py-4" aria-hidden>
        <div className="marquee-track flex w-max gap-10 font-display text-2xl font-extrabold">
          {ticker.map((s, i) => (
            <span key={i}>Let’s do it with Tulas: {s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
