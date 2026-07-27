import { Star } from 'lucide-react'

type Testimonial = {
  quote: string
  name: string
  service: string
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Tat made me feel like the most beautiful version of myself on my wedding day. Flawless, natural and lasted all night.',
    name: 'Isabella R.',
    service: 'Bridal Makeup & Hair',
  },
  {
    quote:
      'An absolute artist. The editorial look she created for our campaign was beyond anything we imagined.',
    name: 'Marcus L.',
    service: 'Editorial Shoot',
  },
  {
    quote:
      'Her online course completely transformed my technique. Clear, elegant and genuinely inspiring.',
    name: 'Sophie T.',
    service: 'Makeup Masterclass',
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-border bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Testimonials
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-foreground text-balance lg:text-5xl">
            Words from the chair.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col border border-border bg-background p-8 lg:p-10">
              <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-6 flex-1 font-serif text-xl font-light leading-snug text-foreground text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {t.service}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
