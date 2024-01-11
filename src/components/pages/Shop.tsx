import ItemCard from "../ItemsCard";

interface items {
  name: string;
  price: string;
  category: string;
  image: string;
}

const shopitems: items[] = [
  {
    name: "Cocarinne Candles",
    price: "$ 70.00 USD",
    category: "Candles",
    image: "images/candle1.jpg",
  },
  {
    name: "Fragrance Bottle",
    price: "$ 24.00 USD",
    category: "Accessories",
    image: "images/acce1.jpg",
  },
  {
    name: "Oil Eyedropper",
    price: "$ 40.00 USD",
    category: "Accessories",
    image: "images/acce2.jpg",
  },
  {
    name: "Apple Essential Oil",
    price: "$ 30.00 USD",
    category: "Oils",
    image: "images/oils1.jpg",
  },
  {
    name: "Wooden Oil Diffuser",
    price: "$ 65.00 USD",
    category: "Accessories",
    image: "images/acce3.jpg",
  },
  {
    name: "Ceramic Candle Case",
    price: "$ 85.00 USD",
    category: "Candles",
    image: "images/candle2.jpg",
  },
  {
    name: "Almond Butter Fragrance",
    price: "$ 35.00 USD",
    category: "Oils",
    image: "images/oils2.jpg",
  },
  {
    name: "English Body Oil",
    price: "$ 90.00 USD",
    category: "Oils",
    image: "images/oils3.jpeg",
  },
  {
    name: "Bombshell Candle Holder",
    price: "$ 80.00 USD",
    category: "Accessories",
    image: "images/acce4.jpg",
  },
  {
    name: "Rose Magnetic Fragrance",
    price: "$ 65.00 USD",
    category: "oils",
    image: "images/oils4.jpeg",
  },
  {
    name: "Imperial Secented Candle",
    price: "$ 105.00 USD",
    category: "Accessories",
    image: "images/acce5.jpg",
  },
  {
    name: "Rosemary Scented Candle",
    price: "$ 45.00 USD",
    category: "Candles",
    image: "images/candles3.jpeg",
  },
];
const Shop = () => {
  return (
    <div className=" mt-16 md:mt-20 bg-primaryB3">
      <div className="flex flex-col md:flex-row pl-10 pr-12 md:pr-10 flex-1  ">
        <div className="flex flex-col justify-between  text-primaryA1 flex-1 p-5 border-x border-b border-primaryA2">
          <h1 className="text-6xl font-normal font-modern p-3 break-words">
            Shop All Our Fragrance
          </h1>
          <p className="text-lg p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspend
            varius enim in eros elementum tristique. Duis cursus, mi quis viver
            ornare, eros dolor interdum nulla.
          </p>
        </div>

        <img
          className=" flex p-8 flex-1 md:w-28 w-full h-auto object-cover border-x md:border-l-0 border-b border-primaryA2 mr-2"
          src="images/shopall.jpeg"
          alt=""
        ></img>
      </div>
      <div className="ml-10 mr-12">
        <div className="flex flex-row justify-center items-center md:space-x-20 p-8 text-primaryA1 border-x border-b border-primaryA2">
          <button className="p-2 sm:p-4 md:p-0">All</button>
          <button className="p-2 sm:p-4 md:p-0">Accessories</button>
          <button className="p-2 sm:p-4 md:p-0">Oils</button>
          <button className="p-2 sm:p-4 md:p-0">Canldes</button>
        </div>
      </div>
      <div className="ml-10 mr-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 border-x border-primaryA2 p-4">
          {shopitems.map((items, index) => (
            <ItemCard
              key={index}
              name={items.name}
              price={items.price}
              category={items.category}
              image={items.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Shop;
