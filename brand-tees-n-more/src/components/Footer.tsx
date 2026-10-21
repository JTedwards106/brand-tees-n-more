import Logo from "../assets/davine-website-logo.jpg";
export function Footer() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-margin-desktop pt-space-2xl pb-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
          <div className="flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm mb-space-xs">
              <img
                alt="Brand Tees n more"
                className="w-8 h-8 rounded-full object-cover"
                src={Logo}
              />
              <span className="font-title-lg text-title-lg text-on-surface">
                Brand Tees n more
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Bringing crisp authentic streetwear tees and premium oversized
              sportswear to Jamaica. Hand-selected cuts with zero checkout
              hassle.
            </p>
            <div className="mt-space-xs p-space-md rounded-lg bg-surface-container-lowest/80 border border-outline-variant/40">
              <span className="font-label-sm text-label-sm text-primary uppercase font-bold block">
                Kingston Pickup Hub
              </span>
              <span className="font-body-sm text-body-sm text-on-surface">
                Shop 4B, Constant Spring Road, Kingston 10
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-space-xs">
            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
              Brand Catalogue
            </h4>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li className="hover:text-primary transition-colors">
                <a data-path="shop-tees" href="#">
                  Nike Sportswear &amp; Club Tees
                </a>
              </li>
              <li className="hover:text-primary transition-colors">
                <a data-path="shop-tees" href="#">
                  Adidas Originals Trefoil Drops
                </a>
              </li>
              <li className="hover:text-primary transition-colors">
                <a data-path="shop-tees" href="#">
                  Puma Graphic Street Line
                </a>
              </li>
              <li className="hover:text-primary transition-colors">
                <a data-path="shop-tees" href="#">
                  Reebok classNameic Vector Collection
                </a>
              </li>
              <li className="hover:text-primary transition-colors">
                <a data-path="shop-tees" href="#">
                  Guess Triangle Logo Apparel
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-space-xs">
            <h4 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
              Contact &amp; Social
            </h4>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li className="flex items-center gap-space-xs">
                <span className="text-primary text-base">
                  <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                </span>
                <a
                  className="hover:text-primary transition-colors"
                  href="https://wa.me/18765558337"
                >
                  WhatsApp +1 (876) 555-8337
                </a>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="text-primary text-base">
                  <i className="fa-brands fa-instagram"></i>
                </span>
                <a className="hover:text-primary transition-colors" href="#">
                  @brandteesnmore (Instagram)
                </a>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="text-primary text-base">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span>Direct: +1 (876) 555-8337</span>
              </li>
              <li className="flex items-center gap-space-xs">
                <span className="text-primary text-base">
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <span>orders@brandteesnmore.jm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-inverse-surface py-space-sm px-margin-desktop text-center">
        <p className="font-label-sm text-label-sm text-inverse-on-surface tracking-wide">
          Strictly Request-to-Order • No online cards required • Payment and
          delivery confirmed directly with Dave via WhatsApp.
        </p>
      </div>
    </>
  );
}
