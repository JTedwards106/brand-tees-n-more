import { Filter } from "./Filter";
import { NoticeBox } from "./NoticeBox";
import { WhatsappCard } from "./WhatsappCard";

export function SideBar() {
  return (
    <aside className="w-[280px] shrink-0 sticky top-28 flex flex-col gap-space-lg">
      {/*Filter Card Container*/}
      <Filter />
      {/*Zero Online Payment Notice Box*/}
      <NoticeBox />
      {/*WhatsApp Direct Chat Widget*/}
      <WhatsappCard />
    </aside>
  );
}
