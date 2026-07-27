'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

type Category = 'Makeup' | 'Hair' | 'Editorial'

type Work = {
  src: string
  alt: string
  category: Category
  label: string
}

const WORKS: Work[] = [
  { src: '/images/portfolio-bridal-makeup.png', alt: 'Soft glowing bridal makeup', category: 'Makeup', label: 'Bridal Glow' },
  { src: '/images/portfolio-hair-updo.png', alt: 'Romantic bridal hair updo', category: 'Hair', label: 'Romantic Updo' },
  { src: '/images/portfolio-editorial.png', alt: 'Editorial beauty portrait', category: 'Editorial', label: 'Cover Story' },
  { src: '/images/portfolio-artistic.png', alt: 'Artistic avant-garde makeup with gold accents', category: 'Makeup', label: 'Gold Leaf' },
  { src: '/images/portfolio-hair-styling.png', alt: 'Sleek modern hair styling', category: 'Hair', label: 'Sleek Finish' },
  { src: '/images/portfolio-glam.png', alt: 'Glamorous evening event makeup', category: 'Editorial', label: 'Evening Glam' },
]

const FILTERS = ['All', 'Makeup', 'Hair', 'Editorial'] as const

export function Portfolio() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>('All')

  const filtered =
    active === 'All' ? WORKS : WORKS.filter((w) => w.category === active)

  return (
    <section id="portfolio" className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Portfolio
            </p>
            <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-foreground text-balance lg:text-5xl">
              A gallery of grace.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  'rounded-full border px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors',
                  active === f
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground',
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((work, i) => (
            <figure
              key={work.src}
              className={cn(
                'group relative mb-5 block break-inside-avoid overflow-hidden',
                i % 3 === 1 ? 'aspect-[3/4]' : 'aspect-[4/5]',
              )}
            >
              <img
                src={work.src || '/placeholder.svg'}
                alt={work.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-foreground/70 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-serif text-lg text-background">{work.label}</span>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-background/80">
                  {work.category}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
