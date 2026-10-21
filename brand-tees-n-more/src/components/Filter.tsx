export function Filter() {
  return (
    <div className="p-space-lg bg-surface-container-lowest rounded-lg shadow-sm flex flex-col gap-space-lg">
      <div className="flex items-center justify-between pb-space-xs">
        <h2 className="font-headline-sm text-headline-sm text-on-surface">
          Filters
        </h2>
        <button className="font-label-sm text-label-sm text-primary uppercase font-bold hover:underline">
          Reset All
        </button>
      </div>
      {/*Brand Filters*/}
      <div className="flex flex-col gap-space-sm">
        <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-bold">
          Brand Tag
        </span>
        <div className="flex flex-col gap-space-xs">
          <label className="flex items-center justify-between p-space-xs rounded-md hover:bg-surface-container cursor-pointer transition-colors group">
            <span className="flex items-center gap-space-xs font-body-md text-body-md text-on-surface group-hover:text-primary">
              <input
                className="w-4 h-4 rounded text-primary accent-primary cursor-pointer"
                type="checkbox"
              />
              <span>All Brands</span>
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              18
            </span>
          </label>
          <label className="flex items-center justify-between p-space-xs rounded-md hover:bg-surface-container cursor-pointer transition-colors group">
            <span className="flex items-center gap-space-xs font-body-md text-body-md text-on-surface group-hover:text-primary">
              <input
                defaultChecked
                className="w-4 h-4 rounded text-primary accent-primary cursor-pointer"
                type="checkbox"
              />
              <span className="font-semibold text-primary">Nike</span>
            </span>
            <span className="font-label-sm text-label-sm text-primary font-bold">
              4
            </span>
          </label>
          <label className="flex items-center justify-between p-space-xs rounded-md hover:bg-surface-container cursor-pointer transition-colors group">
            <span className="flex items-center gap-space-xs font-body-md text-body-md text-on-surface group-hover:text-primary">
              <input
                className="w-4 h-4 rounded text-primary accent-primary cursor-pointer"
                type="checkbox"
              />
              <span>Adidas</span>
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              5
            </span>
          </label>
          <label className="flex items-center justify-between p-space-xs rounded-md hover:bg-surface-container cursor-pointer transition-colors group">
            <span className="flex items-center gap-space-xs font-body-md text-body-md text-on-surface group-hover:text-primary">
              <input
                className="w-4 h-4 rounded text-primary accent-primary cursor-pointer"
                type="checkbox"
              />
              <span>Puma</span>
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              4
            </span>
          </label>
          <label className="flex items-center justify-between p-space-xs rounded-md hover:bg-surface-container cursor-pointer transition-colors group">
            <span className="flex items-center gap-space-xs font-body-md text-body-md text-on-surface group-hover:text-primary">
              <input
                className="w-4 h-4 rounded text-primary accent-primary cursor-pointer"
                type="checkbox"
              />
              <span>Reebok</span>
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              3
            </span>
          </label>
          <label className="flex items-center justify-between p-space-xs rounded-md hover:bg-surface-container cursor-pointer transition-colors group">
            <span className="flex items-center gap-space-xs font-body-md text-body-md text-on-surface group-hover:text-primary">
              <input
                className="w-4 h-4 rounded text-primary accent-primary cursor-pointer"
                type="checkbox"
              />
              <span>Guess</span>
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              2
            </span>
          </label>
        </div>
      </div>
      {/*Size Filters*/}
      <div className="flex flex-col gap-space-sm pt-space-xs">
        <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-bold">
          Standard Size
        </span>
        <div className="grid grid-cols-5 gap-space-xs">
          <button className="h-10 rounded-DEFAULT bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors">
            S
          </button>
          <button className="h-10 rounded-DEFAULT bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors">
            M
          </button>
          <button className="h-10 rounded-DEFAULT bg-inverse-surface text-inverse-on-surface font-label-md text-label-md shadow-sm">
            L
          </button>
          <button className="h-10 rounded-DEFAULT bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors">
            XL
          </button>
          <button className="h-10 rounded-DEFAULT bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors">
            2XL
          </button>
        </div>
      </div>
      {/*Availability Filter*/}
      <div className="flex flex-col gap-space-sm pt-space-xs">
        <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-bold">
          Inventory Status
        </span>
        <div className="flex flex-col gap-space-xs">
          <label className="flex items-center justify-between p-space-xs rounded-md hover:bg-surface-container cursor-pointer transition-colors group">
            <span className="flex items-center gap-space-xs font-body-md text-body-md text-on-surface">
              <input
                defaultChecked
                className="w-4 h-4 rounded text-primary accent-primary cursor-pointer"
                type="checkbox"
              />
              <span>In Stock Ready</span>
            </span>
            <span className="font-label-sm text-label-sm text-primary font-bold">
              14
            </span>
          </label>
          <label className="flex items-center justify-between p-space-xs rounded-md hover:bg-surface-container cursor-pointer transition-colors group">
            <span className="flex items-center gap-space-xs font-body-md text-body-md text-on-surface-variant">
              <input
                className="w-4 h-4 rounded text-primary accent-primary cursor-pointer"
                type="checkbox"
              />
              <span>Sold Out Vault</span>
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              4
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
