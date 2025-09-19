import React from "react";
import { PHONE, WHATSAPP } from "../lib/constants";

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

function formatPhone(raw) {
  if (!raw) return "";
  return raw
    .replace(/^\+?54?0?/, "+54 ")
    .replace(/(\d{2})(\d{4})(\d{4})$/, "$1 $2 $3");
}

export default function Header() {
  return (
    <header className="w-full bg-black text-white sticky top-0 z-30 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo con imagen */}
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="/llave2.png"
              alt="Logo Cerrajería"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="text-sm font-semibold">Cerrajería 24/7</div>
            <div className="text-xs text-gray-400">
              Atención inmediata • CABA
            </div>
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ring-1 ring-transparent hover:ring-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            <IconPhone className="w-4 h-4" />
            <span className="hidden sm:inline">{formatPhone(PHONE)}</span>
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-3 py-2 rounded-md text-sm font-semibold"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
