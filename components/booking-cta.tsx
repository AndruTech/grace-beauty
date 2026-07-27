export function BookingCta() {
  return (
    <section
      id="booking"
      className="bg-foreground py-24 text-background lg:py-32"
    >
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <p className="mb-6 flex items-center justify-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold">
          <span className="h-px w-10 bg-gold" />
          Book Now
          <span className="h-px w-10 bg-gold" />
        </p>
        <h2 className="font-serif text-4xl font-light leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
          Ready for your transformation?
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-background/70">
          Reserve your appointment with Tat and experience makeup and hair
          artistry crafted entirely around you.
        </p>
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-background px-10 py-4 text-xs font-medium uppercase tracking-[0.15em] text-foreground transition-opacity hover:opacity-90"
        >
          Book your appointment
        </a>
      </div>
    </section>
  )
}
