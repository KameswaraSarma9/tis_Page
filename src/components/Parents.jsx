import { reviews } from '../data/content'

export default function Parents() {
  return (
    <section id="parents" className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <h2 className="font-display text-3xl font-extrabold sm:text-5xl">From the parents</h2>
      </div>

      {/* plain CSS scroll-snap: no JS needed for a swipeable row */}
      <ul className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))]">
        {reviews.map((r) => (
          <li
            key={r.name}
            data-cursor
            className="min-w-[82%] snap-start rounded-3xl border border-line bg-surface p-7 sm:min-w-[380px]"
          >
            <blockquote className="leading-relaxed">“{r.text}”</blockquote>
            <p className="mt-6 font-bold">{r.name}</p>
            <p className="text-sm text-muted">{r.role}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
