import ItemCard from "./ItemsCard";

export default function SecondSection() {
  return (
    <div className="isecond-section border-x border-b border-primaryA2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="first-half flex flex-col">
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
            <button className="p-2 md:p-4 border border-primaryA2 text-base md:text-xl text-center hover:bg-primaryA1 hover:text-white hover:border-primaryB3">
              Shop New
            </button>
          </div>
        </div>

        <ItemCard
          name="Rosemary Scented Candle"
          price="$ 45.00 USD"
          image="images/image2.jpeg"
          category="CANDLES"
          classname="border-l"
        />

        <ItemCard
          name="Imperial Scented Candle"
          image="images/image3.jpg"
          price="$ 105.00 USD"
          category="ACCESSORIES"
          classname="border-l"
        />
      </div>
    </div>
  );
}
