import Logo from "../assets/davine-website-logo.jpg";

export function NavLinks() {
  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-x-gutter-desktop gap-y-space-sm xl:flex-nowrap">
      <div className="flex items-center gap-space-sm sm:gap-space-md shrink-0">
        <img
          alt="Brand Tees n more Logo"
          className="w-10 h-10 sm:w-16 sm:h-16 rounded-full object-cover shadow-sm"
          src={Logo}
        />
        <div className="flex flex-col">
          <span className="font-title-lg text-base sm:text-title-lg text-on-surface leading-tight">
            Brand Tees n more
          </span>
          <span className="hidden sm:block font-label-sm text-label-sm text-primary font-bold uppercase">
            Good Fabric, Great Feeling
          </span>
        </div>
      </div>
      <div className="order-3 w-full xl:order-none xl:flex-1 xl:max-w-[560px] xl:mx-space-md">
        <div className="relative min-w-0 flex-1">
          <span className="absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            aria-label="Search products"
            className="w-full pl-11 pr-space-md py-space-sm bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-full shadow-sm outline-none focus:ring-2 focus:ring-primary transition-shadow"
            placeholder="Search brand, style, size..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-space-sm sm:gap-space-md shrink-0">
        <a
          className="hidden lg:inline-flex items-center gap-space-xs bg-[#25D366] text-white px-space-md py-space-sm rounded-full font-label-md text-label-md shadow-sm hover:opacity-95 transition-all"
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
          className="inline-flex items-center gap-space-xs bg-on-surface text-surface-container-lowest px-space-sm sm:px-space-md py-space-sm rounded-full font-label-md text-label-md hover:bg-on-surface/90 transition-all"
          type="button"
        >
          <span className="text-base">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <span className="hidden sm:inline">Cart</span>
          <span className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-space-xs py-0.5 rounded-full">
            2
          </span>
        </button>
      </div>
    </div>
  );
}
