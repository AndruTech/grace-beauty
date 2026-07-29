"use client"

import { useEffect } from "react"

export function BookingCta() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="booking" className="bg-foreground py-24 text-background lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
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
        </div>

        {/* Calendly inline embed */}
        <div
          className="calendly-inline-widget mx-auto rounded-2xl overflow-hidden"
          data-url="https://calendly.com/grace_beauty?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=C8A882"
          style={{ minWidth: "320px", height: "700px" }}
        />

      </div>
    </section>
  )
}