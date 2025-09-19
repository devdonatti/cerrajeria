import React from "react";
import { PHONE, WHATSAPP, ADDRESS } from "../lib/constants";

function IconPhone(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.12.9.45 1.76.98 2.5a2 2 0 0 1-.45 2.54L10 10.5c1.5 3 4.2 5.7 7.2 7.2l1.04-.94a2 2 0 0 1 2.54-.45c.74.53 1.6.86 2.5.98A2 2 0 0 1 22 16.92z"
      />
    </svg>
  );
}

export default function ContactFooter() {
  return (
    <footer className="bg-black text-white border-t border-gray-900 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-10 text-center md:text-left">
        {/* Columna 1 */}
        <div>
          <div className="text-xl font-bold">Cerrajería 24/7</div>
          <div className="mt-2 text-gray-400">{ADDRESS}</div>
          <div className="mt-2 flex items-center justify-center md:justify-start gap-3">
            <IconPhone className="w-5 h-5" />
            <a href={`tel:${PHONE}`} className="font-medium">
              {PHONE}
            </a>
          </div>
          <div className="mt-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-violet-600 hover:bg-violet-700 font-semibold transition"
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Columna 2 */}
        <div className="flex-1">
          <h3 className="font-semibold">Horario</h3>
          <div className="text-gray-400">
            Abierto las 24 horas — Atención Inmediata
          </div>

          <h3 className="mt-6 font-semibold text-violet-400">
            Zonas de cobertura
          </h3>
          <div className="mt-1 text-gray-200 font-medium leading-relaxed">
            Recoleta, Palermo, Puerto Madero, Retiro, Barrio Norte, Almagro y
            alrededores
          </div>
        </div>

        {/* Columna 3 */}
        <div className="w-full md:w-40">
          <h3 className="font-semibold">¿Necesitás ayuda?</h3>
          <p className="text-gray-400 text-sm mt-2">
            Llámanos o envíanos un WhatsApp y te enviamos un técnico.
          </p>
        </div>
      </div>

      {/* Copy */}
      <div className="border-t border-gray-800 text-sm text-gray-500 py-4 text-center">
        <div>
          &copy; {new Date().getFullYear()} Cerrajería 24/7 — Todos los derechos
          reservados
        </div>
        <div className="text-xs text-gray-600 mt-1">
          Desarrollado por{" "}
          <a
            href="https://www.mdev.com.ar"
            target="_blank"
            rel="noreferrer noopener"
            className="underline hover:text-white transition"
          >
            MDev
          </a>
        </div>
      </div>
    </footer>
  );
}
