export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <p className="mb-6 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Melbourne, Australia
          </p>
          <h1 className="font-serif text-5xl font-light leading-[0.95] tracking-tight text-foreground text-balance sm:text-6xl lg:text-7xl">
            Where artistry meets grace.
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Professional makeup &amp; hair services in Melbourne. Organic beauty
            products. Online courses crafted to elevate your everyday ritual.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#booking"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-background transition-opacity hover:opacity-80"
            >
              Book a Service
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-foreground px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              View Portfolio
            </a>
          </div>

          <div className="mt-14 flex gap-10 border-t border-border pt-8">
            <div>
              <p className="font-serif text-3xl text-foreground">5+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Years Experience
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-foreground">500+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Brides Styled
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl text-foreground">100%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                Organic Range
              </p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <img
              src="/images/img_hero.jpeg"
              alt="Professional makeup artist portrait with soft glowing makeup"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden border border-border bg-background px-6 py-4 lg:block">
            <p className="font-serif text-sm italic text-foreground">
              &ldquo;Beauty, refined.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
