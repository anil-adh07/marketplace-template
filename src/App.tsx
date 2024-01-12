import Home from "./components/Home";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/pages/Shop";
import FooterSection from "./components/FooterSection";
import LastSection from "./components/LastSection";
import ItemsDetailsPage from "./components/pages/ItemDetailsPage";

export default function App() {
  return (
    <>
      <div className="bg-primaryB3">
        <div className="md:mx-10 mx-4">
          <Header />
          <div className="mt-16 md:mt-20"></div>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Shop />} path="/shop" />
            <Route element={<ItemsDetailsPage />} path="/itemsDetails" />
          </Routes>
          <FooterSection />
          <LastSection />
        </div>
      </div>
    </>
  );
}
