export function NoticeBox() {
  return (
    <div className="p-space-md rounded-lg bg-primary-fixed/30 shadow-sm flex flex-col gap-space-xs">
      <div className="flex items-center gap-space-xs text-primary font-bold">
        <span className="text-lg">
          <i className="fa-solid fa-bolt"></i>
        </span>
        <span className="font-label-md text-label-md tracking-tight">
          Zero Checkout Barrier
        </span>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        Zero online card payment required! Add shirts to your request bag,
        submit your delivery preference, and Davine will WhatsApp you within 24
        hrs to verify sizes and payment.
      </p>
    </div>
  );
}
