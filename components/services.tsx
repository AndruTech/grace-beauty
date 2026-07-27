import { Sparkles, Palette, Star, Flower2, Scissors, GraduationCap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  price: string
}

const SERVICES: Service[] = [
  {
    icon: Sparkles,
    title: 'Bridal Makeup',
    description: 'Full glam for your most important day.',
    price: '$250',
  },
  {
    icon: Palette,
    title: 'Artistic & Editorial Makeup',
    description: 'Creative looks for photoshoots, fashion and art.',
    price: '$180',
  },
  {
    icon: Star,
    title: 'Special Events',
    description: 'Look stunning for any occasion.',
    price: '$120',
  },
  {
    icon: Flower2,
    title: 'Bridal Hair',
    description: 'Elegant updos and styles for your wedding day.',
    price: '$200',
  },
  {
    icon: Scissors,
    title: 'Hair Styling',
    description: 'From sleek blowouts to textured waves.',
    price: '$90',
  },
  {
    icon: GraduationCap,
    title: 'Makeup Masterclass',
    description: 'Learn professional techniques to elevate your everyday look.',
    price: '$150 per person',
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Services
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-foreground text-balance lg:text-5xl">
            Artistry for every occasion.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col bg-background p-8 transition-colors hover:bg-secondary lg:p-10"
            >
              <service.icon className="size-6 text-gold" strokeWidth={1.25} />
              <h3 className="mt-6 font-serif text-2xl text-foreground">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                <span className="text-sm text-muted-foreground">
                  From{' '}
                  <span className="font-serif text-lg text-foreground">{service.price}</span>
                </span>
                <a
                  href="#booking"
                  className="text-xs font-medium uppercase tracking-[0.15em] text-foreground underline-offset-4 transition-all group-hover:underline"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
