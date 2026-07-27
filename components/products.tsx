'use client'

import { useState } from 'react'
import { Check, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

type Product = {
  src: string
  name: string
  description: string
  price: string
}

const PRODUCTS: Product[] = [
  {
    src: '/images/product-lip-balm.png',
    name: 'Nourish Lip Balm',
    description: 'Organic shea &amp; jojoba balm for a soft, naturally tinted finish.',
    price: '$24',
  },
  {
    src: '/images/product-face-cream.png',
    name: 'Radiance Face Cream',
    description: 'Lightweight hydrating cream with botanical extracts for a dewy glow.',
    price: '$58',
  },
  {
    src: '/images/product-hair-oil.png',
    name: 'Silk Hair Oil',
    description: 'Weightless argan blend to smooth, strengthen and add luminous shine.',
    price: '$42',
  },
]

export function Products() {
  const [added, setAdded] = useState<Record<string, boolean>>({})

  const handleAdd = (name: string) => {
    setAdded((prev) => ({ ...prev, [name]: true }))
    setTimeout(() => setAdded((prev) => ({ ...prev, [name]: false })), 1800)
  }

  return (
    <section id="shop" className="border-t border-border bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Organic Products
          </p>
          <h2 className="font-serif text-4xl font-light leading-tight tracking-tight text-foreground text-balance lg:text-5xl">
            Clean beauty, thoughtfully made.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <article key={product.name} className="group flex flex-col border border-border bg-background">
              <div className="relative aspect-square w-full overflow-hidden bg-secondary">
                <img
                  src={product.src || '/placeholder.svg'}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl text-foreground">{product.name}</h3>
                  <span className="font-serif text-xl text-foreground">{product.price}</span>
                </div>
                <p
                  className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
                <button
                  onClick={() => handleAdd(product.name)}
                  className={cn(
                    'mt-7 inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-xs font-medium uppercase tracking-[0.15em] transition-all',
                    added[product.name]
                      ? 'border-gold bg-gold text-gold-foreground'
                      : 'border-foreground bg-background text-foreground hover:bg-foreground hover:text-background',
                  )}
                >
                  {added[product.name] ? (
                    <>
                      <Check className="size-4" /> Added
                    </>
                  ) : (
                    <>
                      <Plus className="size-4" /> Add to Cart
                    </>
                  )}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
