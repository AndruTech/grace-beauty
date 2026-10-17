'use client'

import React from 'react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Cierre haciendo clic fuera del modal */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Ventana Modal */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Encabezado del Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white">
          <h3 className="text-lg font-serif tracking-wide text-gray-900">
            GRÂCE — Masterclass Reservation
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Contenido: iframe con TryBooking */}
        <div className="flex-1 w-full overflow-hidden bg-gray-50">
          <iframe
            src="https://www.trybooking.com/au/event/1667399"
            title="GRÂCE Masterclass Booking"
            className="w-full h-[70vh] min-h-[500px] border-0"
          />
        </div>
      </div>
    </div>
  )
}