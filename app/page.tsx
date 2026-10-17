import { WhatsAppButton } from '@/components/whatsapp-button'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { InPersonMasterclass } from '@/components/in-person-masterclass'
import { Portfolio } from '@/components/portfolio'
import { Testimonials } from '@/components/testimonials'

import { SiteFooter } from '@/components/site-footer'

/* COMPONENTES DESACTIVADOS TEMPORALMENTE:
import { Services } from '@/components/services'
import { Products } from '@/components/products'
import { Newsletter } from '@/components/newsletter'
import { Courses } from '@/components/courses'
import { BookingCta } from '@/components/booking-cta'
*/


export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <InPersonMasterclass />
        {/* Enfoque principal: Curso Presencial */}
        {/* <Courses />*/}
        
        {/* Muestra de trabajos / Portafolio */}
        <Portfolio />
        
        {/* Testimonios para dar confianza */}
        <Testimonials />
       {/*  <BookingCta />*/}

        {/* === SECCIONES EN PAUSA (Futura V2) === */}
        {/* <Services /> */}
        {/* <Products /> */}
        {/* <Newsletter /> */}
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
}