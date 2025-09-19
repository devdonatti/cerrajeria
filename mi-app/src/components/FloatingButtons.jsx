export default function FloatingButtons() {
  return (
    <>
      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/5491133954679" // <-- cambiá por el número real
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
      >
        {/* Ícono WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-7 h-7"
        >
          <path d="M20.52 3.48A11.89 11.89 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.17 1.6 5.98L0 24l6.2-1.6A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.9 0-3.77-.52-5.4-1.5l-.39-.23-3.68.95.98-3.58-.25-.37A9.94 9.94 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.1-7.9c-.28-.14-1.65-.82-1.9-.91-.25-.09-.43-.14-.61.14s-.7.91-.86 1.1c-.16.18-.32.2-.6.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.68-1.57-1.96-.16-.28-.02-.43.12-.57.12-.12.28-.32.43-.48.14-.16.18-.27.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.52-.45-.45-.61-.46h-.52c-.18 0-.48.07-.73.34-.25.27-.96.93-.96 2.26s.98 2.62 1.12 2.8c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.65.2 1.24.17 1.7.1.52-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.52-.32z" />
        </svg>
      </a>

      {/* Botón de Teléfono */}
      <a
        href="tel:+541133954679" // <-- cambiá por el número real
        className="fixed bottom-4 left-4 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
      >
        {/* Ícono Teléfono */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.22 3.66a1 1 0 01-.27 1.06l-2.2 2.2a16 16 0 007.07 7.07l2.2-2.2a1 1 0 011.06-.27l3.66 1.22a1 1 0 01.68.95V19a2 2 0 01-2 2h-1c-9.39 0-17-7.61-17-17V5z"
          />
        </svg>
      </a>
    </>
  );
}
