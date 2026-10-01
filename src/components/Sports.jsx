import Reveal from './Reveal'
import { sports } from '../data/content'

export default function Sports() {
  return (
    <section id="sports" className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="font-display text-3xl font-extrabold sm:text-5xl">Sports?</h2>
      <p className="mt-4 max-w-md text-lg text-muted">
        It’s not just a facility. At Tulas it’s the foundation! 16+ sports curated to bring joy and
        discipline to your life.
      </p>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {sports.map((name, i) => (
          <li key={name}>
            <Reveal delay={(i % 4) * 0.07}>
              <div
                data-cursor
                className="rounded-2xl border border-line bg-surface px-5 py-6 font-display text-lg font-bold transition-colors hover:border-accent hover:bg-accent hover:text-navy"
              >
                {name}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
