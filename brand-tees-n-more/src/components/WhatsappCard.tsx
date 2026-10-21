export function WhatsappCard() {
  return (
    <a
      className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex items-center gap-space-md group"
      href="https://wa.me/18765558337?text=Hi%20Dave,%20I%20have%20a%20question%20about%20sizing%20on%20Brand%20Tees"
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
        <span className="text-3xl">
          <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-label-sm text-label-sm text-primary uppercase font-bold">
          Need assistance?
        </span>
        <span className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors leading-tight">
          Chat with Davine
        </span>
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          Direct size &amp; fit checks
        </span>
      </div>
    </a>
  );
}
