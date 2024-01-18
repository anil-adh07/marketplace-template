import { Link } from "react-router-dom";
import ItemCard from "./ItemsCard";
import shopitems from "./data/shopitems.json";

export default function Introduction() {
  const randomItems = shopitems.sort(() => Math.random()).slice(0, 2);
  return (
    <div className="border-x border-b border-primaryA2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center text-center md:text-left md:items-start">
          <div className="text-primaryA1 p-5">
            <h1 className="text-3xl md:text-5xl font-modern break-words">
              Introducing a brand new collection
            </h1>
            <p className="text-base md:text-lg break-words">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit nam
              hendre nisi sed solln itudin pellent nesque purus rhoncus.
            </p>
          </div>
          <div className="p-5">
            <button className="p-2 md:p-4 text-primaryA1 border border-primaryA2 text-base md:text-xl text-center hover:bg-primaryA1 hover:text-white hover:border-primaryB3">
              <Link to="/shop">Shop New</Link>
            </button>
          </div>
        </div>
        {randomItems.map((item, index) => (
          <ItemCard
            key={item.slug}
            slug={item.slug}
            name={item.name}
            price={item.price}
            image={item.image}
            category={item.category}
            classname={
              index === 0
                ? "md:border-l pl-3 md:pl-6 pr-3"
                : "pl-3 pr-3 md:pr-6"
            }
          />
        ))}
      </div>
    </div>
  );
}
