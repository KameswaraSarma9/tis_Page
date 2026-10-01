import Reveal from './Reveal'
import { rankings, personalities } from '../data/content'

export default function Rankings() {
  return (
    <section id="rankings" className="border-y border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-16 px-5 py-20 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Ranked among the best</h2>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {rankings.map((r, i) => (
              <li key={i}>
                <Reveal delay={i * 0.08} className="flex items-baseline gap-5 py-5">
                  <span className="w-16 font-display text-4xl font-extrabold">{r.rank}</span>
                  <div>
                    <p className="font-bold">{r.where}</p>
                    <p className="text-sm text-muted">
                      {r.title} by {r.by}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Influential personalities on campus</h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {personalities.map((p, i) => (
              <li key={p.name}>
                <Reveal delay={i * 0.08} className="py-5">
                  <p className="font-bold">{p.name}</p>
                  <p className="text-sm text-muted">{p.note}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
