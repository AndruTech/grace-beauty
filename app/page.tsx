import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { Products } from '@/components/products'
import { Courses } from '@/components/courses'
import { Testimonials } from '@/components/testimonials'
import { BookingCta } from '@/components/booking-cta'
import { Newsletter } from '@/components/newsletter'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Products />
        <Courses />
        <Testimonials />
        <BookingCta />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  )
}
