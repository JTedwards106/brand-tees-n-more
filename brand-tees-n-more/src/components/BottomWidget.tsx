export function BottomWidget() {
  return (
    <div className="fixed bottom-6 right-8 z-40">
      <div
        className="flex items-center gap-space-md p-space-sm pl-space-md pr-space-lg rounded-full bg-inverse-surface text-inverse-on-surface shadow-2xl hover:bg-on-surface cursor-pointer transition-all transform hover:-translate-y-1"
        id="floating-bag-pill"
      >
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary-container text-on-primary-container">
          <span className="text-xl">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-tertiary text-on-tertiary rounded-full font-label-sm text-[10px] flex items-center justify-center font-bold">
            2
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-label-lg text-label-lg font-bold leading-tight">
            2 tees in Request Bag
          </span>
          <span className="font-body-sm text-body-sm text-surface-container-high">
            $10,000 JMD total
          </span>
        </div>
        <div className="ml-space-xs pl-space-xs flex items-center text-primary-container font-label-md text-label-md font-bold">
          <span>Review Bag</span>
          <span className="material-symbols-outlined text-base ml-1">
            arrow_forward
          </span>
        </div>
      </div>
    </div>
  );
}
