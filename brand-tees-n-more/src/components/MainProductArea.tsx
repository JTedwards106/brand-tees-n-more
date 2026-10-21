import { ActiveFilters } from "./ActiveFilters";

export function MainProductArea() {
  return (
    <div className="flex-1 min-w-0 flex flex-col gap-space-lg">
      {/*Active Filters Chips Bar*/}
      <ActiveFilters />
      {/*3-Column Desktop Product Catalog Grid*/}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter-desktop">
        {/*Product Card 1: Nike*/}
        <article className="flex flex-col bg-surface-container-lowest rounded-lg p-space-md shadow-sm hover:shadow-xl transition-all duration-300 group">
          <div className="relative w-full aspect-square rounded-DEFAULT overflow-hidden bg-surface-container-low mb-space-md">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Nike Retro Club Essential Tee in black cotton with vintage typography print on front, editorial streetwear shoot, crisp lighting with natural shadows"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDS_5wFapyvYv4wjjyQeBGzZ6aqu7oT3Hzu7iv0xvJjq1d8Tjreegn2BFp0rMkgBOSgWTVn-Z_lnB78K8ok2P-O010Sczrjr28QszRYgWFuDKgViItOlVpcPitw1ZIN8IHvkT5yrv2mEp0xULG_dyy5_5fy7DcLiLVSjqX4uh64moGmbUnt719Uvm-P0dtn0iso6ay2M9-FBKESYSGyXtkHseez1qap7z7_wMysxz6dvgi1A_Z9CZD-fA"
            />
            <div className="absolute top-space-sm left-space-sm">
              <span className="px-space-md py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur text-on-surface font-label-sm text-label-sm uppercase font-bold tracking-wider shadow-sm">
                Nike
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
                Retro Club Essential Tee
              </h3>
            </div>
            <span className="font-price-tag text-price-tag text-primary mb-space-md">
              $5,200 JMD
            </span>
            {/*Size selector*/}
            <div className="flex items-center gap-space-xs mb-space-lg">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase mr-1">
                Sizes:
              </span>
              <button className="w-8 h-8 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-variant transition-colors">
                S
              </button>
              <button className="w-8 h-8 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-variant transition-colors">
                M
              </button>
              <button className="w-8 h-8 rounded-full bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm shadow-sm">
                L
              </button>
              <button className="w-8 h-8 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-variant transition-colors">
                XL
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
        {/*Product Card 2: Adidas*/}
        <article className="flex flex-col bg-surface-container-lowest rounded-lg p-space-md shadow-sm hover:shadow-xl transition-all duration-300 group">
          <div className="relative w-full aspect-square rounded-DEFAULT overflow-hidden bg-surface-container-low mb-space-md">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Adidas Trefoil Heavyweight Tee in forest green authentic heavyweight cotton streetwear mockup studio photography"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5E5-sg2QJy5DRLN5vPgBotB1Lp7S34yH7Pjbpz2nj4ZT1Xd-56DRkUj8tGwjvxF-rKji1Qqs9lOoFeny595QZBG1MUmS9EvtMOjpBUzVbWq2VaDyKwShkbwwxrKvt8CFLrqs3TLbqKdVQUXTB_5OVWARr4qzhJiCYGB4SVdqxe4ejWTjgyXDB52uG9AYGK-mRmWuJUCYqPNzUk2Cbetk-A1rhhhjeDgQAkSwtaaeG7r-mv7qB5FVW4g"
            />
            <div className="absolute top-space-sm left-space-sm">
              <span className="px-space-md py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur text-on-surface font-label-sm text-label-sm uppercase font-bold tracking-wider shadow-sm">
                Adidas
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
                Trefoil Heavyweight Tee
              </h3>
            </div>
            <span className="font-price-tag text-price-tag text-primary mb-space-md">
              $4,800 JMD
            </span>
            {/* Size selector */}
            <div className="flex items-center gap-space-xs mb-space-lg">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase mr-1">
                Sizes:
              </span>
              <button className="w-8 h-8 rounded-full bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm shadow-sm">
                M
              </button>
              <button className="w-8 h-8 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-variant transition-colors">
                L
              </button>
              <button className="w-8 h-8 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-variant transition-colors">
                XL
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
        {/* Product Card 3: Puma (Sold Out) */}
        <article className="flex flex-col bg-surface-container-lowest rounded-lg p-space-md shadow-sm opacity-60 transition-opacity">
          <div className="relative w-full aspect-square rounded-DEFAULT overflow-hidden bg-surface-container-low mb-space-md">
            <img
              className="w-full h-full object-cover grayscale"
              data-alt="Puma Speedcat Racing Tee in heather grey and red vintage track graphic apparel laying flat on neutral studio floor"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaajflMD2iKy4NI2kiqX7ZfZPWlPRfEXeAyAAX8IgIJz7LpgUxdrHmyag0cTvx9fiLQE1I2fxvC_aMUbJYucXBWOrcx0Eh9-uQArI9URRS6L3T2b9vYAZy5EvT_az5FRrJOEvweEACIxbK_5B0JiBLR0nMe46mZrlQ676YVgri3Ncrqd7CSfiay7_lUtthXpILt8PnKCwrrZEM-zkQZyckvP_KRLW5N2YUSGlCnH_m_JwyiGkpnkXbfw"
            />
            <div className="absolute top-space-sm left-space-sm">
              <span className="px-space-md py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur text-on-surface font-label-sm text-label-sm uppercase font-bold tracking-wider shadow-sm">
                Puma
              </span>
            </div>
            <div className="absolute top-space-sm right-space-sm">
              <span className="px-space-sm py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-sm text-label-sm font-bold shadow-sm">
                Sold Out
              </span>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex items-baseline justify-between gap-space-xs mb-1">
              <h3 className="font-title-lg text-title-lg text-on-surface-variant line-through">
                Speedcat Racing Tee
              </h3>
            </div>
            <span className="font-price-tag text-price-tag text-on-surface-variant mb-space-md">
              $4,200 JMD
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
              All sizes booked for current shipment drop.
            </p>
            <div className="mt-auto">
              <button
                className="w-full py-space-sm px-space-md rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md font-semibold cursor-not-allowed flex items-center justify-center gap-space-xs"
                disabled
              >
                <span className="material-symbols-outlined text-lg">block</span>
                <span>Sold Out</span>
              </button>
            </div>
          </div>
        </article>
        {/* Product Card 4: Reebok */}
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
        {/* Product Card 5: Guess */}
        <article className="flex flex-col bg-surface-container-lowest rounded-lg p-space-md shadow-sm hover:shadow-xl transition-all duration-300 group">
          <div className="relative w-full aspect-square rounded-DEFAULT overflow-hidden bg-surface-container-low mb-space-md">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Guess Original Triangle Icon Tee in vibrant gold yellow with iconic embroidered triangle patch streetwear styling"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyJrU8AdVdscBxgbNZSEVv-iabdNcDXJ4HKScQZoEQDUZltuTRNwphIJz5ndBulVP0uvOnF2RR836n-sDJBGrUwD1e02bnaUAIInKlAzjPyEVliASEQPlFsDJKBPPSzjMHxIgr6k-VY7z5UiVi79GfLMDx5bTAO6lmobO7OZqTiAkXvJ9Fdai-Z7mifKe81rs9uBXfuh1dpYDw3BtGCoEHJoghs7YepNITeY_9KMxXIH2c7mNBbLm8ZQ"
            />
            <div className="absolute top-space-sm left-space-sm">
              <span className="px-space-md py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur text-on-surface font-label-sm text-label-sm uppercase font-bold tracking-wider shadow-sm">
                Guess
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
                Original Triangle Icon Tee
              </h3>
            </div>
            <span className="font-price-tag text-price-tag text-primary mb-space-md">
              $5,800 JMD
            </span>
            {/* Size selector */}
            <div className="flex items-center gap-space-xs mb-space-lg">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase mr-1">
                Sizes:
              </span>
              <button className="w-8 h-8 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-variant transition-colors">
                L
              </button>
              <button className="w-8 h-8 rounded-full bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm shadow-sm">
                XL
              </button>
              <button className="w-8 h-8 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-variant transition-colors">
                XXL
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
        {/* Product Card 6: Adidas (Sold Out) */}
        <article className="flex flex-col bg-surface-container-lowest rounded-lg p-space-md shadow-sm opacity-60 transition-opacity">
          <div className="relative w-full aspect-square rounded-DEFAULT overflow-hidden bg-surface-container-low mb-space-md">
            <img
              className="w-full h-full object-cover grayscale"
              data-alt="Adidas Archival 3-Stripes Tee in navy blue and cream retro heritage football aesthetic folded on wooden deck"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC2lnE4_2j5NHjQAnhSZok8Avbq7oIY-rGfqyMx3CBQ7u4eNviKNsBmBOWEQdOXKFsFYsN_QuJ4g2YrU-0HAe6qH1BWPIsnfjJJoqKV2JUNWrynQB5oFWpp5zQuqYRT5EumLJI1AgBig2eG_jluI20h8TFtRvza5hvjpebMBWt7XQG0AzOy_p9nNTxAXXjt9IqCs4IA4ETsq01QV2qxD7BvHOnAJec95HbKxwrTy7tLY3DgrM_Vhbemg"
            />
            <div className="absolute top-space-sm left-space-sm">
              <span className="px-space-md py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur text-on-surface font-label-sm text-label-sm uppercase font-bold tracking-wider shadow-sm">
                Adidas
              </span>
            </div>
            <div className="absolute top-space-sm right-space-sm">
              <span className="px-space-sm py-1 rounded-full bg-surface-variant text-on-surface-variant font-label-sm text-label-sm font-bold shadow-sm">
                Sold Out
              </span>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex items-baseline justify-between gap-space-xs mb-1">
              <h3 className="font-title-lg text-title-lg text-on-surface-variant line-through">
                Archival 3-Stripes Tee
              </h3>
            </div>
            <span className="font-price-tag text-price-tag text-on-surface-variant mb-space-md">
              $4,900 JMD
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-lg">
              Restock incoming next Thursday with Dave.
            </p>
            <div className="mt-auto">
              <button
                className="w-full py-space-sm px-space-md rounded-full bg-surface-container text-on-surface-variant font-label-md text-label-md font-semibold cursor-not-allowed flex items-center justify-center gap-space-xs"
                disabled
              >
                <span className="text-lg">
                  <i className="fa-solid fa-ban"></i>
                </span>
                <span>Sold Out</span>
              </button>
            </div>
          </div>
        </article>
        {/* Product Card 7: Nike */}
        <article className="flex flex-col bg-surface-container-lowest rounded-lg p-space-md shadow-sm hover:shadow-xl transition-all duration-300 group">
          <div className="relative w-full aspect-square rounded-DEFAULT overflow-hidden bg-surface-container-low mb-space-md">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Nike Swoosh Heavyweight Pocket Tee in warm off-white sand color premium cotton streetwear layout"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZykpsUdI7CLayeD8Vg56ZLWVK5R_VdEwGPL_7-uGHM9N0wTAhN77niKyY_uTBK1CR8QWzjbqRlHXhNjfi8yVK_kc9a1-HZPhk8khrIvf6eoLNNZvQHY36nrgTZgCt3-Nhe8_Ud_KPpxjtIDAEgrfmkZP2gHR3HyGV4htN0pn0PNJ4TFPtysIyUd0nRS1KHct-sY3BeqIAG8crJVfZqLV0eX3bbFkZzMODYzjhGJL9LbhXhpuZzPhT9w"
            />
            <div className="absolute top-space-sm left-space-sm">
              <span className="px-space-md py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur text-on-surface font-label-sm text-label-sm uppercase font-bold tracking-wider shadow-sm">
                Nike
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
                Swoosh Heavyweight Pocket Tee
              </h3>
            </div>
            <span className="font-price-tag text-price-tag text-primary mb-space-md">
              $5,000 JMD
            </span>
            {/* Size selector */}
            <div className="flex items-center gap-space-xs mb-space-lg">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase mr-1">
                Sizes:
              </span>
              <button className="w-8 h-8 rounded-full bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm shadow-sm">
                M
              </button>
              <button className="w-8 h-8 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-variant transition-colors">
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
        {/* Product Card 8: Puma */}
        <article className="flex flex-col bg-surface-container-lowest rounded-lg p-space-md shadow-sm hover:shadow-xl transition-all duration-300 group">
          <div className="relative w-full aspect-square rounded-DEFAULT overflow-hidden bg-surface-container-low mb-space-md">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Puma Retro Contrast Track Tee in deep royal blue with white shoulder accents clean sunlit presentation"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-COby8TW16cEj_ZxJLYKNdeiXcHQp8y4vj4T2RvfxPxhMN8h3YZJuj7NYX8YgYbCyCUx7IFyUpq0aePi2gaBqkhMQfnbnCka_zWwJrm81_RXASnu_MskQhvlb2DcOvfqUzPtsWulNSmNV5kF-Cw_tlx7cMXI6kWXFPTbsOjuTPYNO4kyNYhaZ3HybEr5XBEaiU1gXh0Mm50fvpDSLN6hwK2vhrYxd1TUvjDv6MzgrvZJ1nl3jlNzJJA"
            />
            <div className="absolute top-space-sm left-space-sm">
              <span className="px-space-md py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur text-on-surface font-label-sm text-label-sm uppercase font-bold tracking-wider shadow-sm">
                Puma
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
                Retro Contrast Track Tee
              </h3>
            </div>
            <span className="font-price-tag text-price-tag text-primary mb-space-md">
              $4,400 JMD
            </span>
            {/* Size selector */}
            <div className="flex items-center gap-space-xs mb-space-lg">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase mr-1">
                Sizes:
              </span>
              <button className="w-8 h-8 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-variant transition-colors">
                S
              </button>
              <button className="w-8 h-8 rounded-full bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm shadow-sm">
                M
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
        {/* Product Card 9: Reebok */}
        <article className="flex flex-col bg-surface-container-lowest rounded-lg p-space-md shadow-sm hover:shadow-xl transition-all duration-300 group">
          <div className="relative w-full aspect-square rounded-DEFAULT overflow-hidden bg-surface-container-low mb-space-md">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-alt="Reebok Athletic Dept Vintage Tee in washed charcoal grey with retro athletic typography and faded distressed print"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDycSfU_8fTvHqkDuF612F9-VMhp7w-vZCjghX8SrNJ_zhcXCdGtl9pShMHT1gAf1D410QUgKUKsOUHWE2FdWZXSa3bLfBERXiitbjO-sJUZTd53hy32YIaRrHD8_gTXNOyvPT5NAx6Yuj82I9wp9romjcUyyZMo7kKfaRB7MIUMFw9B_wa2OHGEFOIjSohLM9gBRxi_pn_KFjGtMurBNC6qZgTwvmCAE5UIWKhAEydgpFu1m5fe4hL2g"
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
                Athletic Dept Vintage Tee
              </h3>
            </div>
            <span className="font-price-tag text-price-tag text-primary mb-space-md">
              $3,800 JMD
            </span>
            {/* Size selector */}
            <div className="flex items-center gap-space-xs mb-space-lg">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-bold uppercase mr-1">
                Sizes:
              </span>
              <button className="w-8 h-8 rounded-full bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm shadow-sm">
                L
              </button>
              <button className="w-8 h-8 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface hover:bg-surface-variant transition-colors">
                XL
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
      </div>
      {/* Catalog Pagination / Indicator */}
      <div className="mt-space-lg p-space-md rounded-DEFAULT bg-surface-container-low flex items-center justify-between shadow-sm">
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Showing <strong className="text-on-surface">9</strong> of
          <strong className="text-on-surface">18</strong> curated tees
        </p>
        <div className="flex items-center gap-space-xs">
          <button className="w-9 h-9 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-label-md text-label-md hover:bg-surface-variant transition-colors">
            1
          </button>
          <button className="w-9 h-9 rounded-full bg-surface-container-lowest text-on-surface-variant flex items-center justify-center font-label-md text-label-md hover:bg-surface-variant transition-colors">
            2
          </button>
          <button className="w-9 h-9 rounded-full bg-surface-container-lowest text-on-surface-variant flex items-center justify-center font-label-md text-label-md hover:bg-surface-variant transition-colors">
            <span className="text-sm">
              <i className="fa-solid fa-angle-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
