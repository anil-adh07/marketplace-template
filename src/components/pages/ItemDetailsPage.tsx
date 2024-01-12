import ItemCard from "../ItemsCard";
import shopitems from "../data/shopitems.json";

const ItemsDetailsPage = () => {
  const randomItems = shopitems.sort(() => 0.5 - Math.random()).slice(0, 2);
  return (
    <>
      <div className="flex flex-col md:flex-row border-y border-x border-primaryA2">
        <img
          src="images/acce1.jpg"
          className=" p-4 mt-5 md:p-8 object-cover max-h-max mb-auto flex-1"
          alt="image"
        ></img>
        <div className="flex flex-col  py-6 text-primaryA1 border-l border-primaryA2 ">
          <div className="mx-8 border-b border-primaryA2">
            <p className="text-gray-500 py-5"> CANDLES</p>
            <h1 className="font-modern text-5xl pb-5">Cocarine Candles</h1>
            <p className="pb-5">Eau de Parfum ( ℮ 60 ml / 2 fl. oz. )</p>
            <p className="text-lg py-5 mb-10"> $ 70.00 USD</p>
          </div>
          <div className=" m-8 border-b flex flex-col border-primaryA2">
            <p className="text-gray-400">DESCRIPTION</p>
            <p className="py-6 max-w-xl text-balance">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              placeat, distinctio dolorum nemo porro laudantium corporis illum
              harum quibusdam. Id explicabo temporibus doloribus aliquam hic.
            </p>
            <p className="text-gray-400">DETAILS</p>
            <div className="py-6 max-w-xl text-balance">
              <ul className="">
                <li>Good burnout</li>
                <li>Natural composition</li>
                <li>Craft recipes</li>
                <li>Vegan-friendly</li>
                <li>FDA-licensed</li>
              </ul>
            </div>
            <p className="text-gray-400">SHIPPING & RETURNS</p>
            <p className="py-6 text-balance text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit rehstiq
            </p>
          </div>
          <div className="justify-between mx-8 pb-5 border-b flex flex-row border-primaryA2 ">
            <form>
              <label className="pr-5" htmlFor="quantity">
                Quantity:
              </label>
              <input
                className="p-4 border border-primaryA2 w-20 bg-transparent focus:outline-none focus:border focus:border-blue-500"
                type="number"
              />
            </form>
            <button className="py-2 px-4 md:py-4 md:px-8 border border-white text-base md:text-xl text-center bg-primaryA1 text-white hover:bg-transparent hover:text-primaryA1 hover:border-primaryA2">
              Add To Cart
            </button>
          </div>
          <p className=" px-8 pt-5 text-sm text-gray-500">
            ***Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore.
          </p>
        </div>
      </div>
      <div className="fourth-section border-x border-b border-primaryA2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="first-half flex flex-col">
            <div className="text-primaryA1 p-5 break-words">
              <h1 className="text-3xl md:text-5xl font-modern md:max-w-56">
                You Might also like
              </h1>
              <p className="text-base md:text-lg py-4">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit nam
                hendre nisi sed solln itudin pellent nesque purus rhoncus.
              </p>
            </div>
            <div className="p-3 break-words">
              <button className="p-2 md:p-4  text-primaryA1 border border-primaryA2 text-base md:text-xl text-center hover:bg-primaryA1 hover:text-white hover:border-primaryB3">
                Shop All
              </button>
            </div>
          </div>
          {randomItems.map((items, index) => {
            return (
              <ItemCard
                key={index}
                category={items.category}
                name={items.name}
                image={items.image}
                price={items.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ItemsDetailsPage;
