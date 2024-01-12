import { useState } from "react";
import shopitems from "../data/shopitems.json";
import ItemCard from "../ItemsCard";
import ShopIntroCard from "./ShopIntroCard";

const categoryInfo: {
  [key: string]: { heading: string; image: string; description: string };
} = {
  All: {
    heading: "Shop All Our Fragrance",
    image: "images/shopall.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viver ornare, eros dolor interdum nulla.",
  },
  Accessories: {
    heading: "Get All the Accessories",
    image: "images/acccesorriesShop.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viver ornare, eros dolor interdum nulla.",
  },
  Oils: {
    heading: "Essential Oils",
    image: "images/oilsShop.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viver ornare, eros dolor interdum nulla.",
  },
  Candles: {
    heading: "Scented Candles",
    image: "images/candlesShop.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspend varius enim in eros elementum tristique. Duis cursus, mi quis viver ornare, eros dolor interdum nulla.",
  },
};

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredItems = selectedCategory
    ? shopitems.filter(
        (items) =>
          items.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : shopitems;

  const categoryInfoToShow = categoryInfo[selectedCategory || "All"];

  return (
    <>
      <div className="flex flex-col md:flex-row flex-1  ">
        <ShopIntroCard
          heading={categoryInfoToShow.heading}
          image={categoryInfoToShow.image}
          description={categoryInfoToShow.description}
        />
      </div>

      <div className="flex flex-row justify-center items-center text-sm md:text-base md:space-x-14 p-6 text-primaryA1 border-x border-b border-primaryA2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={` ml-1 px-2 md:px-4 md:py-1 rounded-lg ${
            selectedCategory === null ? "bg-primaryA3" : "bg-none"
          } `}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory("Accessories")}
          className={` ml-1 px-2 md:px-4 md:py-1 rounded-lg ${
            selectedCategory === "Accessories" ? "bg-primaryA3" : "bg-none"
          } `}
        >
          Accessories
        </button>
        <button
          onClick={() => setSelectedCategory("Oils")}
          className={` ml-1 px-2 md:px-4 md:py-1 rounded-lg ${
            selectedCategory === "Oils" ? "bg-primaryA3" : "bg-none"
          } `}
        >
          Oils
        </button>
        <button
          onClick={() => setSelectedCategory("Candles")}
          className={` ml-1 px-2 md:px-4 md:py-1 rounded-lg ${
            selectedCategory === "Candles" ? "bg-primaryA3" : "bg-none"
          } `}
        >
          Canldes
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 border-x border-b border-primaryA2 p-4">
        {filteredItems.map((items, index) => (
          <ItemCard
            key={index}
            name={items.name}
            price={items.price}
            category={items.category}
            image={items.image}
          />
        ))}
      </div>
    </>
  );
};
export default Shop;
