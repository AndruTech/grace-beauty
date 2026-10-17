import { InstagramIcon, TikTokIcon, YouTubeIcon, WhatsAppIcon } from '@/components/brand-icons'

/*const COLUMNS = [
  {
    heading: 'Services',
    links: ['Bridal Makeup', 'Artistic Makeup', 'Special Events', 'Bridal Hair', 'Hair Styling'],
  },
  {
    heading: 'Shop',
    links: ['Lip Balm', 'Face Cream', 'Hair Oil', 'Accessories', 'Gift Cards'],
  },
  {
    heading: 'Learn',
    links: ['Online Courses', 'Masterclasses', 'YouTube', 'Tutorials', 'Journal'],
  },
]*/

const SOCIALS = [
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/maakeupbytat?igsh=MWhwcGttZ3U2amtteQ==' },
  { icon: TikTokIcon, label: 'TikTok', href: 'https://tiktok.com' },
  { icon: YouTubeIcon, label: 'YouTube', href: 'https://youtube.com' },
  { icon: WhatsAppIcon, label: 'WhatsApp', href: 'https://wa.me/' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/*{COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">
                {col.heading}
              </h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}*/}

          <div>
            <h3 className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-gold">
              Connect
            </h3>
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center border border-border text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-2xl font-medium tracking-tight text-foreground">
              GRÂCE<br></br>
              <span className="ml-2 text-xs font-light uppercase tracking-[0.2em] text-muted-foreground">
                Makeup & Hair
              </span>
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Melbourne, Australia &middot; ABN available upon request
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} GRÂCE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
