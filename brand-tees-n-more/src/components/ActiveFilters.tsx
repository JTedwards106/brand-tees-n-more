type ActiveFiltersProps = {
  onOpenFilters: () => void;
};

export function ActiveFilters({ onOpenFilters }: ActiveFiltersProps) {
  return (
    <div className="flex flex-col gap-space-sm">
      <div className="grid grid-cols-2 lg:hidden -mx-4 border-y border-outline-variant bg-surface-container-lowest">
        <button
          className="flex h-12 items-center justify-center gap-space-sm border-r border-outline-variant font-label-lg text-label-lg text-primary"
          onClick={onOpenFilters}
          type="button"
        >
          <i className="fa-solid fa-filter" aria-hidden="true"></i>
          <span>Filter</span>
        </button>
        <div className="relative">
          <select
            aria-label="Sort products"
            className="h-12 w-full appearance-none bg-transparent px-space-md pr-10 text-center font-label-lg text-label-lg text-primary outline-none"
          >
            <option>Newest First</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Popular</option>
          </select>
          <span className="absolute right-space-md top-1/2 -translate-y-1/2 text-primary pointer-events-none">
            <i className="fa-solid fa-angle-down" aria-hidden="true"></i>
          </span>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-space-md">
        <div className="flex flex-1 min-w-0 items-center justify-between p-space-sm px-space-md rounded-DEFAULT bg-surface-container-low shadow-sm">
          <div className="flex flex-wrap items-center gap-space-xs">
            <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase mr-space-xs">
              Active:
            </span>
            <span className="inline-flex items-center gap-space-xs pl-space-md pr-space-xs py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">
              Brand: Nike
              <button
                aria-label="Remove Nike filter"
                className="w-5 h-5 rounded-full hover:bg-surface-variant flex items-center justify-center text-on-surface-variant"
                type="button"
              >
                <i className="fa-solid fa-xmark" aria-hidden="true"></i>
              </button>
            </span>
            <span className="inline-flex items-center gap-space-xs pl-space-md pr-space-xs py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">
              Status: In Stock
              <button
                aria-label="Remove in-stock filter"
                className="w-5 h-5 rounded-full hover:bg-surface-variant flex items-center justify-center text-on-surface-variant"
                type="button"
              >
                <i className="fa-solid fa-xmark" aria-hidden="true"></i>
              </button>
            </span>
          </div>
          <button
            className="font-label-sm text-label-sm text-primary font-bold hover:underline shrink-0"
            type="button"
          >
            Reset filters
          </button>
        </div>
        <div className="relative shrink-0">
          <select
            aria-label="Sort products"
            className="appearance-none bg-surface-container-lowest text-on-surface font-label-md text-label-md pl-space-md pr-10 py-space-sm rounded-full shadow-sm outline-none cursor-pointer hover:bg-surface-container-low transition-colors"
          >
            <option>Newest First</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Most Popular</option>
          </select>
          <span className="absolute right-space-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-lg">
            <i className="fa-solid fa-angle-down" aria-hidden="true"></i>
          </span>
        </div>
      </div>

      <div className="flex lg:hidden items-center gap-space-sm overflow-x-auto -mx-4 px-4 py-space-sm border-b border-outline-variant bg-surface-container-lowest">
        <span className="inline-flex shrink-0 items-center gap-space-xs rounded-md bg-surface-container-low px-space-md py-space-sm font-body-md text-body-md text-on-surface">
          <i className="fa-solid fa-xmark text-primary" aria-hidden="true"></i>
          Availability: In Stock
        </span>
        <button
          className="shrink-0 px-space-sm font-label-sm text-label-sm text-primary font-bold"
          type="button"
        >
          Reset all
        </button>
      </div>
    </div>
  );
}
