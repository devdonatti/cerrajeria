import React from "react";
import { WHATSAPP } from "../lib/constants";

const ServiceCard = ({ title, desc }) => (
  <div className="bg-gray-900/60 border border-gray-800 rounded-lg p-4 flex flex-col justify-between">
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-300 text-sm">{desc}</p>
    </div>
    <div className="mt-4 flex justify-center">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="inline-block px-3 py-2 text-sm font-medium rounded-md ring-1 ring-violet-500 hover:bg-violet-600 hover:text-white transition"
      >
        Solicitar ahora
      </a>
    </div>
  </div>
);

export default function Services() {
  const services = [
    {
      title: "Apertura de puertas",
      desc: "Apertura profesional y sin daños de todo tipo de puertas. Residencial y comercial.",
    },
    {
      title: "Cambio de cerraduras",
      desc: "Reemplazo de cerraduras y cerrojos con materiales de calidad.",
    },
    {
      title: "Apertura de automóviles",
      desc: "Apertura de vehículos sin daños y extracción de llaves.",
    },
    {
      title: "Cerrajero a domicilio 24h",
      desc: "Técnicos equipados para resolver cualquier tipo de urgencia.",
    },
    {
      title: "Urgencias 24 horas",
      desc: "Servicio rápido y seguro, todos los días del año.",
    },
  ];

  return (
    <section className="bg-black text-white border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold">Nuestros servicios</h2>
        <p className="text-gray-400 mt-2">
          Soluciones profesionales, herramientas adecuadas y técnicos
          especializados.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
