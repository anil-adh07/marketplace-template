import { IoMdClose } from "react-icons/io";
import { useCart } from "./CartContext";
import useOnclickOutside from "react-cool-onclickoutside";

interface CartProps {
  isOpen: boolean;
  Close: () => void;
}
const Cart = ({ isOpen, Close }: CartProps) => {
  const clickOutside = useOnclickOutside(() => {
    Close();
  });
  const { state, dispatch } = useCart();
  const removeItem = (itemName: string) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        name: itemName,
        price: 0,
        image: "",
        quantity: 0,
      },
    });
  };

  const calculateSubtotal = () => {
    return state.cartItems.reduce((total, item) => {
      const itemTotal = (item.price * item.quantity).toString();
      return total + parseInt(itemTotal, 10);
    }, 0);
  };
  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-80" />}
      <div
        ref={clickOutside}
        className={` fixed right-0 inset-y-0 w-full sm:w-1/3 bg-white transform duration-500 transition-transform ${
          isOpen ? "translate-x-0 overflow-y-scroll" : "translate-x-full "
        }`}
      >
        <div className="flex flex-row justify-between p-5 border-b border-primaryA3">
          <h1 className="text-3xl font-modern"> Your Cart</h1>
          <button className="text-3xl" onClick={Close}>
            <IoMdClose />
          </button>
        </div>
        {useCart().state.cartItems.length === 0 ? (
          <p className="text-center flex justify-center items-center h-screen text-lg ">
            No items found.
          </p>
        ) : (
          <div className="flex flex-col h-screen  justify-between">
            <div className="">
              {state.cartItems.map((item, index) => (
                <div
                  key={index}
                  className=" flex flex-row  items-center justify-between pl-4 pr-6 py-4 md:p-4 text-sm md:text-base "
                >
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <img
                        className=" w-12 h-12 object-cover"
                        src={item.image}
                      ></img>
                      <p className="flex flex-col px-3 ">
                        <span>{item.name}</span>
                        <span>$ {item.price.toFixed(2)} USD</span>
                      </p>
                    </div>
                    <button
                      className="text-left ml-12 md:ml-16 w-16 mt-2 hover:text-primaryB1"
                      onClick={() => removeItem(item.name)}
                    >
                      Remove
                    </button>
                  </div>

                  <p className=" flex justify-center px-4 md:px-8 border border-primaryA2 items-center h-11">
                    {item.quantity}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col border-t border-primaryB3">
              <div className="flex flex-row px-10 py-2 justify-between text-lg">
                <p>Subtotal </p>
                <p>
                  <strong>$ {calculateSubtotal().toFixed(2)} USD</strong>
                </p>
              </div>

              <button className=" py-4 ml-8 mr-10 my-5 text-white bg-primaryA1 hover:text-primaryA1 border border-primaryA2 hover:bg-white text-lg">
                Continue to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Cart;
