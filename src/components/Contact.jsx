import { contact } from '../data/content'

export default function Contact() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl">Contact us.</h2>
          <p className="mt-5 max-w-sm leading-relaxed text-white/75">
            Tulas International School was established in 2012 under the aegis of Rishabh
            Educational Trust to impart education through seamless opportunities.
          </p>
          <a
            href={contact.applyUrl}
            className="mt-8 inline-block rounded-full bg-accent px-7 py-3 font-bold text-navy"
          >
            Apply now
          </a>
        </div>

        <address className="space-y-4 not-italic text-white/90">
          <p>
            Admission helpline:{' '}
            <a className="font-bold underline decoration-accent" href={`tel:${contact.helpline}`}>
              {contact.helpline}
            </a>
          </p>
          <p>
            <a className="underline decoration-accent" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
          <p>{contact.address}</p>
          <p>
            Landline:{' '}
            {contact.landlines.map((n, i) => (
              <span key={n}>
                {i > 0 && ', '}
                <a href={`tel:${n}`} className="underline decoration-accent">
                  {n}
                </a>
              </span>
            ))}
          </p>
        </address>
      </div>
      <p className="border-t border-white/15 px-5 py-5 text-center text-sm text-white/60">
        Copyright © 2026 Tulas International School, Dehradun. All rights reserved.
      </p>
    </footer>
  )
}
