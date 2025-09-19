import React, { useState, useEffect, useRef } from "react";

// Array de imágenes
const images = [
  "/trabajo1.jpg",
  "/trabajo2.jpg",
  "/trabajo3.jpg",
  "/trabajo5.jpg",
  "/trabajo6.jpg",
  "/trabajo7.jpg",
  "/trabajo8.jpg",
  "/trabajo9.jpg",
  "/trabajo10.jpg",
  "/trabajo11.jpg",
  "/trabajo12.jpg",
  "/trabajo13.jpeg",
  "/trabajo14.jpg",
  "/trabajo15.jpg",
  "/trabajo16.jpg",
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const totalSlides = images.length;
  const duplicatedImages = [...images, ...images]; // duplicamos el array

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setIsTransitioning(true);
  };

  // Reset invisible cuando llegamos al final de la primera tanda
  useEffect(() => {
    if (currentIndex === totalSlides) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // quitamos transición
        setCurrentIndex(0); // volvemos al inicio
      }, 500); // debe coincidir con duration-500
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, totalSlides]);

  return (
    <div className="relative w-full overflow-hidden bg-black/10 py-4">
      {/* Carrusel */}
      <div
        className={`flex ${
          isTransitioning ? "transition-transform duration-500" : ""
        }`}
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
      >
        {duplicatedImages.map((img, idx) => (
          <div key={idx} className="w-1/4 flex-shrink-0 px-1">
            <img
              src={img}
              alt={`Trabajo ${idx + 1}`}
              className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>

      {/* Botones */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
      >
        ›
      </button>
    </div>
  );
}
