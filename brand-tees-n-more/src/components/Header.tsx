import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <>
      <div className="fixed top-0 w-full z-50 bg-[#FFF8E7]/95 backdrop-blur-md border-b border-primary-container/40 shadow-[0_4px_20px_rgba(134,83,0,0.06)]">
        <div className="h-20 max-w-[1200px] mx-auto px-margin-desktop flex items-center justify-between gap-gutter-desktop">
          <NavLinks />
        </div>
      </div>
    </>
  );
}
