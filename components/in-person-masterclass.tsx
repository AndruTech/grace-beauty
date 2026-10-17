import React from 'react'
import Image from 'next/image'

export function InPersonMasterclass() {
   
  return (
    <section id="courses" className="py-16 md:py-24 bg-accent/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* COLUMNA 1: Imagen o Video de Impacto */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-border/50">
            {/* Si tienes una imagen en tu carpeta /public (ej: /masterclass.jpg) */}
            {/*<Image
              src="/masterclass-preview.jpg" // Reemplaza por la ruta de tu foto en public/
              alt="Personal Makeup Masterclass Melbourne"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            */}
            {/* Si prefieres usar un video MP4 en bucle en lugar de imagen, descomenta esto: */}
            
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/masterclass-intro.mp4" type="video/mp4" />
            </video>
        
          </div>

          {/* COLUMNA 2: Información y CTA */}
          <div className="flex flex-col items-start text-left">
            {/* Badge superior */}
            <span className="inline-block px-3.5 py-1 mb-4 text-xs font-semibold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
              In-Person Masterclass · Melbourne
            </span>

            {/* Título Principal */}
            <h2 className="font-serif text-3xl md:text-5xl font-light mb-4 leading-tight">
              Personal Makeup Masterclass
            </h2>

            {/* Descripción */}
            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              Master the art of self-application in an intimate, hands-on workshop tailored to your unique features. Learn professional skin prep, everyday radiance, and seamless evening glam.
            </p>

            {/* Detalles clave de la sesión */}
            <div className="w-full grid grid-cols-3 gap-4 mb-8 bg-background p-5 rounded-2xl border border-border shadow-sm">
              <div>
                <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold">Location</p>
                <p className="text-xs sm:text-sm font-medium mt-0.5">Melbourne, VIC</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold">Includes</p>
                <p className="text-xs sm:text-sm font-medium mt-0.5">Goodie Bag</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold">Seats</p>
                <p className="text-xs sm:text-sm font-medium mt-0.5">Limited Spots</p>
              </div>
            </div>

            {/* Botón de Reserva */}
            <a
              href="https://www.trybooking.com/DQWOT" // Aquí irá el link de TryBooking
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-primary text-primary-foreground text-base font-medium px-8 py-4 rounded-full shadow-md hover:opacity-95 transition-all transform hover:-translate-y-0.5 text-center"
            >
              Reserve Your Spot
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}