import Counter from './Counter'
import Reveal from './Reveal'
import { stats } from '../data/content'

export default function Stats() {
  return (
    <section id="campus" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="max-w-2xl font-display text-3xl font-extrabold sm:text-4xl">
          At Tulas, we always ask, “What’s the secret to making school awesome?” There, we cracked it!
        </h2>
        <p className="mt-5 max-w-xl leading-relaxed text-white/75">
          It’s all about making learning feel like an adventure, where curiosity leads, creativity
          thrives, and every day brings something new to discover.
        </p>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <dt className="font-display text-5xl font-extrabold text-accent sm:text-6xl">
                <Counter to={s.to} suffix={s.suffix} />
              </dt>
              <dd className="mt-2 text-sm font-medium text-white/80">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
