import ItemCard from "./ItemsCard";

export default function FourthSection() {
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
            <button className="p-2 md:p-4 border border-primaryA2 text-base md:text-xl text-center hover:bg-primaryA1 hover:text-white hover:border-primaryB3">
              Shop Essentials
            </button>
          </div>
        </div>
        <ItemCard
          name="Rose Magnetic Fragrance"
          price="$65.00 USD"
          category="OILS"
          image="images/image5.jpeg"
          classname="border-l"
        />
        <ItemCard
          name="Bombshell Candle Holder"
          price="$ 80.00 USD"
          category="ACCESSORIES"
          image="images/image6.jpg"
          classname="border-l"
        />
      </div>
    </div>
  );
}
