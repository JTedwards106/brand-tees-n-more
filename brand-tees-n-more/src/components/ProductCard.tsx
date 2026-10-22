export function ProductCard() {
  return (
    <article className="flex flex-col bg-surface-container-lowest rounded-lg p-space-md shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="relative w-full aspect-square rounded-DEFAULT overflow-hidden bg-surface-container-low mb-space-md">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt="Reebok classNameic Vector Logo Tee in chalk white heavy jersey cotton with vintage navy logo chest graphic"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ3j5-LzOJjgenRDSTU8c2FZFwLnveMx1PrR_3leNsnf-BVHUCFZvdYVK-09BQ1E-rqQaqCVyLqxseRGwP4EabEXcqTLEm47NUTE9y0XtHfa_J6VPyw5R5L6hrFhiF0N5AhZ4FfoLbus8tLQixl2FpGcSmE-2LIaxRGhbGGATu3AN_i1a3HA3BOqC7Eh-NL46udYNV4hIj5_qcdwTs-wZUxHMmUI_SGCRsRQqDlGFc5oe__jqET-2Now"
        />
        <div className="absolute top-space-sm left-space-sm">
          <span className="px-space-md py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur text-on-surface font-label-sm text-label-sm uppercase font-bold tracking-wider shadow-sm">
            Reebok
          </span>
        </div>
        <div className="absolute top-space-sm right-space-sm">
          <span className="px-space-sm py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-bold shadow-sm">
            In Stock
          </span>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex items-baseline justify-between gap-space-xs mb-1">
          <h3 className="font-title-lg text-title-lg text-on-surface group-hover:text-primary transition-colors">
            classNameic Vector Logo Tee
          </h3>
        </div>
        <span className="font-price-tag text-price-tag text-primary mb-space-md">
          $3,900 JMD
        </span>
        {/* Size selector */}
        <div className="flex items-center gap-space-xs mb-space-lg">
          <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase mr-1">
            Sizes:
          </span>
          <button className="w-8 h-8 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-variant transition-colors">
            M
          </button>
          <button className="w-8 h-8 rounded-full bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm shadow-sm">
            L
          </button>
        </div>
        <div className="mt-auto">
          <button className="w-full py-space-sm px-space-md rounded-full bg-inverse-surface text-inverse-on-surface font-label-md text-label-md font-semibold hover:bg-on-surface hover:text-surface-container-lowest transition-all flex items-center justify-center gap-space-xs add-request-trigger">
            <span className="text-lg">
              <i className="fa-solid fa-cart-plus"></i>
            </span>
            <span>Add to Request Bag</span>
          </button>
        </div>
      </div>
    </article>
  );
}
