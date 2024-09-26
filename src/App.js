import "./App.css";
import HeaderBlock from "./components/Header";
import { BannerBlock } from "./components/BannerBlock";
import FeaturesBlock from "./components/FeaturesBlock";
import HistoryBlock from "./components/HistoryBlock";
import ProductBlock from "./components/ProductBlock";
import DiscoverBlock from "./components/DiscoverBlock";
import MenuBlock from "./components/MenuBlock";
import TestimonialBlock from "./components/TestimonialBlock";
import ReservationBlock from "./components/ReservationBlock";
import NewsBlock from "./components/NewsBlock";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeaderBlock />
      <BannerBlock />
      <FeaturesBlock />
      <HistoryBlock />
      <ProductBlock />
      <DiscoverBlock />
      <MenuBlock />
      <TestimonialBlock />
      <ReservationBlock />
      <NewsBlock />
      <Footer />
    </div>
  );
}

export default App;
