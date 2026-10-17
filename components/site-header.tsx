'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'


type MegaColumn = {
  heading: string
  links: string[]
}

type NavItem = {
  label: string
  href: string
  columns?: MegaColumn[]
}

const NAV_ITEMS: NavItem[] = [
  /*{
    label: 'Services',
    href: '#services',
    columns: [
      { heading: 'Makeup', links: ['Bridal Makeup', 'Artistic Makeup', 'Special Events'] },
      { heading: 'Hair', links: ['Bridal Hair', 'Hair Styling'] },
    ],
  },*/
  { label: 'Portfolio', href: '#portfolio' },
  /*{
    label: 'Shop',
    href: '#shop',
    columns: [
      { heading: 'Organic Products', links: ['Lip Balm', 'Face Cream', 'Hair Oil'] },
      { heading: 'Professional Accessories', links: ['Brush Sets', 'Tools', 'Gift Cards'] },
    ],
  },*/
  { label: 'Masterclass', href: '#courses' },
]

export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [lang, setLang] = useState<'EN' | 'ES'>('EN')

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-medium tracking-tight text-foreground">
            GRÂCE
          </span>
          <span className="text-[0.65rem] font-light uppercase tracking-[0.35em] text-muted-foreground">
            Makeup & Hair
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-9 lg:flex"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(item.columns ? item.label : null)}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 py-2 text-xs font-medium uppercase tracking-[0.15em] text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
                {item.columns && (
                  <ChevronDown
                    className={cn(
                      'size-3.5 transition-transform',
                      openMenu === item.label && 'rotate-180',
                    )}
                  />
                )}
              </a>

              {item.columns && openMenu === item.label && (
                <div className="absolute left-1/2 top-full w-[26rem] -translate-x-1/2 pt-4">
                  <div className="grid grid-cols-2 gap-8 border border-border bg-background p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]">
                    {item.columns.map((col) => (
                      <div key={col.heading}>
                        <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold">
                          {col.heading}
                        </p>
                        <ul className="space-y-3">
                          {col.links.map((link) => (
                            <li key={link}>
                              <a
                                href={item.href}
                                className="font-serif text-lg leading-tight text-foreground/80 transition-colors hover:text-foreground"
                              >
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <div className="hidden items-center border border-border text-[0.7rem] font-medium tracking-widest lg:flex">
            {(['EN', 'ES'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  'px-3 py-1.5 transition-colors',
                  lang === l
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground',
                )}
                aria-pressed={lang === l}
              >
                {l}
              </button>
            ))}
          </div>

          <a
  href="https://www.trybooking.com/au/event/1667399"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full shadow-sm hover:opacity-95 transition-all"
>
            Reserve Your Spot
          </a>

          <button
            className="lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-6 py-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-border/60 py-3">
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block font-serif text-2xl text-foreground"
                >
                  {item.label}
                </a>
                {item.columns && (
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                    {item.columns.flatMap((c) => c.links).map((link) => (
                      <span key={link} className="text-sm text-muted-foreground">
                        {link}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex items-center justify-between pt-5">
              <div className="flex items-center border border-border text-xs font-medium tracking-widest">
                {(['EN', 'ES'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={cn(
                      'px-3 py-1.5',
                      lang === l ? 'bg-foreground text-background' : 'text-muted-foreground',
                    )}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-foreground px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-background"
              >
                Reserve Your Spot
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
