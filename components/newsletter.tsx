'use client'

import { useState, type FormEvent } from 'react'
import { Check } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <p className="mb-4 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold">
          Newsletter
        </p>
        <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-foreground text-balance lg:text-5xl">
          Get 10% off your first order.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
          Join the list for beauty rituals, new launches and members-only
          offers. No noise, just grace.
        </p>

        {submitted ? (
          <p className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground">
            <Check className="size-5 text-gold" /> Thank you — check your inbox for your code.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="h-12 flex-1 border border-border bg-background px-5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
            />
            <button
              type="submit"
              className="h-12 shrink-0 bg-foreground px-8 text-xs font-medium uppercase tracking-[0.15em] text-background transition-opacity hover:opacity-80"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
