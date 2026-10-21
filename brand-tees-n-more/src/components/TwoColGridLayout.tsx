import { MainProductArea } from "./MainProductArea";
import { SideBar } from "./SideBar";

export function TwoColGridLayout() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-margin-desktop pb-space-2xl">
      <div className="flex items-start gap-gutter-desktop">
        {/*Sticky Filter Sidebar (280px)*/}
        <SideBar />
        {/*Main Product Area (Right)*/}
        <MainProductArea />
      </div>
    </section>
  );
}
