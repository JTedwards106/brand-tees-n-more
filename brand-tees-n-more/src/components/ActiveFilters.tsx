export function ActiveFilters() {
  return (
    <div className="flex items-center justify-between p-space-sm px-space-md rounded-DEFAULT bg-surface-container-low shadow-sm">
      <div className="flex flex-wrap items-center gap-space-xs">
        <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase mr-space-xs">
          Active:
        </span>
        <span className="inline-flex items-center gap-space-xs pl-space-md pr-space-xs py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">
          Brand: Nike
          <button className="w-5 h-5 rounded-full hover:bg-surface-variant flex items-center justify-center text-on-surface-variant">
            <span className="text-sm">
              <i className="fa-solid fa-xmark"></i>
            </span>
          </button>
        </span>
        <span className="inline-flex items-center gap-space-xs pl-space-md pr-space-xs py-1 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm">
          Status: In Stock
          <button className="w-5 h-5 rounded-full hover:bg-surface-variant flex items-center justify-center text-on-surface-variant">
            <span className="text-sm">
              <i className="fa-solid fa-xmark"></i>
            </span>
          </button>
        </span>
      </div>
      <button className="font-label-sm text-label-sm text-primary font-bold hover:underline shrink-0">
        Reset filters
      </button>
    </div>
  );
}
