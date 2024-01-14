import ItemCard from "./ItemsCard";
import shopitems from "./data/shopitems.json";

export default function ImageSection() {
  const randomItems = shopitems.sort(() => 0.5 - Math.random()).slice(0, 2);
  return (
    <div className="fourth-section border-x border-b border-primaryA2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="first-half flex flex-col">
          <div className="text-primaryA1 p-5 break-words">
            <h1 className="text-3xl md:text-5xl font-modern">
              Snap up our absolutes
            </h1>
            <p className="text-base md:text-lg py-4">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit nam
              hendre nisi sed solln itudin pellent nesque purus rhoncus.
            </p>
          </div>
          <div className="p-3 break-words">
            <button className="p-2 md:p-4  text-primaryA1 border border-primaryA2 text-base md:text-xl text-center hover:bg-primaryA1 hover:text-white hover:border-primaryB3">
              Shop Essentials
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
