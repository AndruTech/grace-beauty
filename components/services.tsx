

type Service = {
  title: string
  description: string
  price: string
  src: string 
}

const SERVICES: Service[] = [
  {
    
    title: 'Bridal Makeup',
    description: 'Full glam for your most important day.',
    price: '$250',
    src: '/images/bridal_makeup.JPEG',
  },
  {
    
    title: 'Artistic & Editorial Makeup',
    description: 'Creative looks for photoshoots, fashion and art.',
    price: '$180',
    src: '/images/editorial_makeup.jpg',
  },
  {
    
    title: 'Special Events',
    description: 'Look stunning for any occasion.',
    price: '$120',
    src: '/images/event_makeup.jpg',
  },
  {
    
    title: 'Bridal Hair',
    description: 'Elegant updos and styles for your wedding day.',
    price: '$200',
    src: '/images/bridal_hair2.jpg',
  },
  {
    title: 'Hair Styling',
    description: 'From sleek blowouts to textured waves.',
    price: '$90',
    src: '/images/2.jpeg',
  },
  {
    
    title: 'Makeup Masterclass',
    description: 'Learn professional techniques to elevate your everyday look.',
    price: '$150 per person',
    src: '/images/masterclass.jpg',
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
             
              <h3 className="mt-6 font-serif text-2xl text-foreground">{service.title}</h3>
              {service.src && (
                <img
                  src={service.src}
                  alt={service.title}
                  className="mt-4 w-full object-cover h-100 rounded-lg transition-transform duration-700 group-hover:scale-105"
                />
              )}
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
