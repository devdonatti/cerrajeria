import React from "react";
import { PHONE, WHATSAPP } from "../lib/constants";

function IconPhone(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.22 3.66a1 1 0 01-.27 1.06l-2.2 2.2a16 16 0 007.07 7.07l2.2-2.2a1 1 0 011.06-.27l3.66 1.22a1 1 0 01.68.95V19a2 2 0 01-2 2h-1c-9.39 0-17-7.61-17-17V5z"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Texto principal */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Cerrajería 24/7 — Atención inmediata en CABA
          </h1>
          <p className="mt-4 text-gray-300 max-w-xl">
            Abrimos puertas y solucionamos urgencias con técnicos
            especializados. Llegamos a tu domicilio en minutos — servicio
            profesional y seguro, todos los días del año.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 font-semibold"
            >
              Llamar ahora
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg ring-1 ring-violet-500 hover:bg-white/5"
            >
              Enviar por WhatsApp
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            Atención 24 horas — Zona: Recoleta, Palermo, Puerto Madero, Retiro,
            Barrio Norte, Almagro y alrededores.
          </p>
        </div>

        {/* Imagen con overlay */}
        <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-white/3 to-white/2 p-4 flex items-center justify-center">
          {/* Banner centrado con efecto titilante */}
          <a
            href="tel:1133954679"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       bg-violet-600 text-white px-5 py-3 rounded-full flex items-center gap-2 shadow-lg 
                       transition text-center animate-pulse"
          >
            <IconPhone className="w-6 h-6" />
            <span className="font-semibold text-lg">LLAMANOS 1133954679</span>
          </a>

          <img
            src="/trabajo8.jpg"
            alt="Cerrajero en acción"
            className="w-full h-64 object-cover rounded-md shadow-lg"
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/640x400?text=Cerrajero";
            }}
          />
        </div>
      </div>
    </section>
  );
}
