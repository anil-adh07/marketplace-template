import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../ItemsCard";
import { useCart } from "../CartContext";
import shopitems from "../data/shopitems.json";
import Cart from "../Cart";

interface CartItems {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const ItemsDetailsPage = () => {
  const params = useParams();
  const { state, dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const SelectedItems = shopitems.find((item) => item.slug === params.slug);

  useEffect(() => {
    setQuantity(1);
  }, []);

  if (!SelectedItems) {
    return <div>Item Not found</div>;
  }
  const handleAddToCart = () => {
    const existingCartItemIndex = state.cartItems.findIndex(
      (item: CartItems) => item.name === SelectedItems.name
    );

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...state.cartItems];
      updatedCartItems[existingCartItemIndex].quantity += quantity;
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      dispatch({
        type: "UPDATE_TO_CART",
        payload: updatedCartItems[existingCartItemIndex],
      });
      setCartModalOpen(true);
    } else {
      const newItem: CartItems = {
        name: SelectedItems.name,
        price: SelectedItems.price,
        image: SelectedItems.image,
        quantity: quantity,
      };

      dispatch({
        type: "ADD_TO_CART",
        payload: newItem,
      });
      setCartModalOpen(true);
      console.log("hey");
    }
  };

  const randomItems = shopitems.sort(() => Math.random()).slice(0, 2);

  return (
    <>
      <div className="flex flex-col md:flex-row border-y border-x border-primaryA2">
        <div className="w-full">
          <img
            src={SelectedItems.image}
            className=" imageClass p-3 mt-5 md:p-8 object-cover mb-auto min-w-full"
            alt="image"
          ></img>
        </div>

        <div className="flex flex-col py-6 text-primaryA1 md:border-l border-primaryA2 w-full">
          <div className="mx-8 border-b border-primaryA2">
            <p className="text-gray-500 py-5">
              {SelectedItems.category.toUpperCase()}
            </p>
            <h1 className="font-modern text-3xl md:text-5xl pb-5 break-words">
              {SelectedItems.name}
            </h1>
            <p className="pb-5">Eau de Parfum ( ℮ 60 ml / 2 fl. oz. )</p>
            <p className="text-lg py-5 mb-10">
              $ {SelectedItems.price.toFixed(2)} USD
            </p>
          </div>
          <div className="m-3 md:m-8 flex flex-col border-primaryA2 w-full text-balance break-words">
            <p className="text-gray-400">DESCRIPTION</p>
            <p className="py-6 text-balance break-words pr-3 max-w-72 lg:max-w-xl">
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
            <p className="py-5 pr-4 text-balance text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit rehstiq
            </p>
          </div>
          <div className=" flex flex-col md:flex-row justify-between mx-5 md:mx-8 py-5 md:py-8 border-y  border-primaryA2 ">
            <form>
              <label className="pr-5" htmlFor="quantity">
                Quantity:
              </label>
              <input
                className=" p-1 md:p-4 border border-primaryA2 w-20 bg-transparent focus:outline-none focus:border focus:border-blue-500 text-center "
                type="number"
                name="quantity"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => {
                  const newQuantity =
                    e.target.value !== "" ? parseInt(e.target.value, 10) : "";
                  setQuantity(newQuantity as number);
                }}
              />
            </form>
            <button
              onClick={handleAddToCart}
              className=" my-2 md:my-0 py-2 px-4 lg:py-4 lg:px-8 border border-white text-base lg:text-xl text-center bg-primaryA1 text-white hover:bg-transparent hover:text-primaryA1 hover:border-primaryA2"
            >
              Add To Cart
            </button>

            {isCartModalOpen && (
              <Cart Close={() => setCartModalOpen(false)} isOpen={true} />
            )}
          </div>
          <p className=" px-8 pt-5 text-sm text-gray-500">
            ***Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore.
          </p>
        </div>
      </div>
      <div className="border-x border-b border-primaryA2">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col">
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
          {randomItems.map((items, index) => (
            <ItemCard
              key={index}
              slug={items.slug}
              category={items.category}
              name={items.name}
              image={items.image}
              price={items.price}
              classname={
                index === 0
                  ? "md:border-l md:pl-6 pl-3 pr-3"
                  : "pl-3 md:pr-6 pr-3"
              }
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default ItemsDetailsPage;
