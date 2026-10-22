import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroHeader } from "./components/HeroHeader";
import { TwoColGridLayout } from "./components/TwoColGridLayout";

function App() {
  return (
    <>
      <div className="bg-surface font-body-md text-on-surface antialiased">
        <Header />
      </div>
      <main className="w-full pt-[112px] xl:pt-20 bg-surface min-h-[calc(100vh-80px)]">
        <div className="flex flex-col w-full">
          <HeroHeader />
          <TwoColGridLayout />
        </div>
      </main>
      <footer className="w-full bg-[#FFF8E7] border-t border-primary-container/30">
        <Footer />
      </footer>
    </>
  );
}

export default App;
