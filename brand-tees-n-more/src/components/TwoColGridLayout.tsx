import { useState } from "react";
import { Filter } from "./Filter";
import { MainProductArea } from "./MainProductArea";
import { SideBar } from "./SideBar";

export function TwoColGridLayout() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 pb-space-xl xl:px-margin-desktop xl:pb-space-2xl">
      <div className="flex flex-col items-stretch gap-space-lg lg:flex-row lg:items-start lg:gap-gutter-desktop">
        {/*Sticky Filter Sidebar (280px)*/}
        <SideBar />
        {/*Main Product Area (Right)*/}
        <MainProductArea onOpenFilters={() => setMobileFiltersOpen(true)} />
      </div>
      <div
        aria-hidden={!mobileFiltersOpen}
        className={`fixed inset-0 z-[60] lg:hidden ${mobileFiltersOpen ? "block" : "hidden"}`}
      >
        <button
          aria-label="Close filters"
          className="absolute inset-0 bg-inverse-surface/60"
          onClick={() => setMobileFiltersOpen(false)}
          type="button"
        />
        <section
          aria-labelledby="mobile-filter-title"
          aria-modal="true"
          className="absolute inset-x-0 bottom-0 top-12 overflow-y-auto rounded-t-lg bg-surface-container-lowest p-space-md shadow-2xl"
          role="dialog"
        >
          <div className="mb-space-md flex items-center justify-between border-b border-outline-variant pb-space-md">
            <h2
              className="font-headline-sm text-headline-sm text-on-surface"
              id="mobile-filter-title"
            >
              Filter products
            </h2>
            <button
              aria-label="Close filters"
              className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface hover:bg-surface-container"
              onClick={() => setMobileFiltersOpen(false)}
              type="button"
            >
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>
          </div>
          <Filter />
        </section>
      </div>
    </section>
  );
}
