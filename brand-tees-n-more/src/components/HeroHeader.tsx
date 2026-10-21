export function HeroHeader() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-margin-desktop pt-space-xl pb-space-lg flex flex-col gap-space-md">
      {/*Main Title Block*/}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
        <div className="max-w-2xl flex flex-col gap-space-xs">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary-fixed/50 text-on-primary-fixed-variant font-label-sm text-label-sm w-fit">
            <span className="text-sm">
              <i className="fa-solid fa-truck"></i>
            </span>
            <span>Linstead Pickup • More products coming soon</span>
          </div>
          <h1 className="font-display-lg text-display-lg text-on-surface tracking-tight">
            Shop Jamaican Streetwear Tees
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Hand-picked authentic graphic tees from Nike, Adidas, Puma, Reebok
            &amp; Guess. Available for Kingston pickup and islandwide delivery.
          </p>
        </div>
        {/*Live Search & Sort Bar*/}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md shrink-0">
          <div className="relative min-w-[280px]">
            <span className="absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              className="w-full pl-11 pr-space-md py-space-sm bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-full shadow-sm outline-none focus:ring-2 focus:ring-primary transition-shadow"
              placeholder="Search brand, style, size..."
              type="text"
            />
          </div>
          <div className="relative shrink-0">
            <select className="appearance-none bg-surface-container-lowest text-on-surface font-label-md text-label-md pl-space-md pr-10 py-space-sm rounded-full shadow-sm outline-none cursor-pointer hover:bg-surface-container-low transition-colors">
              <option>Newest First</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Most Popular</option>
            </select>
            <span className="absolute right-space-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-lg">
              <i className="fa-solid fa-angle-down"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
