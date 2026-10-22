export function HeroHeader() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 pt-space-lg pb-space-md xl:px-margin-desktop xl:pt-space-xl xl:pb-space-lg flex flex-col gap-space-md">
      {/*Main Title Block*/}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
        <div className="max-w-2xl flex flex-col gap-space-xs">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary-fixed/50 text-on-primary-fixed-variant font-label-sm text-label-sm w-fit">
            <span className="text-sm">
              <i className="fa-solid fa-truck"></i>
            </span>
            <span>Linstead Pickup • More products coming soon</span>
          </div>
          <h1 className="font-display-lg text-headline-lg-mobile sm:text-display-lg text-on-surface">
            Shop Jamaican Streetwear Tees
          </h1>
          <p className="font-body-sm sm:font-body-lg text-body-sm sm:text-body-lg text-on-surface-variant leading-relaxed">
            Hand-picked authentic graphic tees from Nike, Adidas, Puma, Reebok
            &amp; Guess. Available for Kingston pickup and islandwide delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
