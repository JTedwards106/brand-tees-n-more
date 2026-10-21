import Logo from "../assets/davine-website-logo.jpg";

export function NavLinks() {
  return (
    <>
      <div className="flex items-center gap-space-md shrink-0">
        <img
          alt="Brand Tees n more Logo"
          className="w-16 h-16 rounded-full object-cover shadow-sm"
          src={Logo}
        />
        <div className="flex flex-col">
          <span className="font-title-lg text-title-lg text-on-surface leading-tight tracking-tight">
            Brand Tees n more
          </span>
          <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">
            Good Fabric, Great Feeling
          </span>
        </div>
      </div>
      <nav
        className="hidden xl:flex items-center gap-space-sm shrink-0"
        data-active-classNamees="bg-primary-container text-on-primary-container font-semibold rounded-full px-space-2xl py-space-xs shadow-sm"
      >
        <a
          aria-current="page"
          className="transition-colors bg-primary-container text-on-primary-container font-semibold rounded-full px-space-md py-space-xs shadow-sm whitespace-nowrap"
          data-path="shirts"
          href="#"
        >
          Shirts
        </a>
        <a
          className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface px-space-md py-space-xs rounded-full transition-colors whitespace-nowrap"
          data-path="how-to-order"
          href="#"
        >
          How to Order
        </a>
        <a
          className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface px-space-md py-space-xs rounded-full transition-colors whitespace-nowrap"
          data-path="more-info"
          href="#"
        >
          More Info
        </a>
      </nav>
      <div className="flex items-center gap-space-md shrink-0">
        <a
          className="hidden sm:inline-flex items-center gap-space-xs bg-[#25D366] text-white px-space-md py-space-sm rounded-full font-label-md text-label-md shadow-sm hover:opacity-95 transition-all"
          href="https://wa.me/18765558337"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-lg leading-none">
            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>{" "}
          </span>
          <span>Chat on WhatsApp +1 876 555-8337</span>
        </a>

        <button
          className="inline-flex items-center gap-space-xs bg-on-surface text-surface-container-lowest px-space-md py-space-sm rounded-full font-label-md text-label-md hover:bg-on-surface/90 transition-all"
          type="button"
        >
          <span className="text-base">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <span>Cart</span>
          <span className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-space-xs py-0.5 rounded-full">
            2
          </span>
        </button>
      </div>
    </>
  );
}
