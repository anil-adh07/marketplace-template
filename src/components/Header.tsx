import { useState } from "react";
import Modal from "./Modal";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useCart } from "./CartContext";

// Header component
export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setCartOpen(false);
  };
  const cartCount = useCart().state.cartItems.length;

  return (
    <div className=" bg-primaryB3  fixed w-full inset-x-0 top-0">
      <div className=" md:border-x border-b border-primaryA2 md:mx-10">
        <div className="flex flex-row p-5 justify-between text-primaryA1">
          <button onClick={toggleModal} className="text-3xl">
            <IoIosMenu />
          </button>
          {/* Render the Modal component */}
          <Modal isOpen={isModalOpen} onClose={closeModal} />
          <button className="text-xl md:text-2xl font-modern ml-6 md:ml-12 ">
            <Link to="/">MyShop </Link>
          </button>
          <button className="uppercase" onClick={toggleCart}>
            Cart ( {cartCount} )
          </button>
          <Cart Close={closeCart} isOpen={isCartOpen} />
        </div>
      </div>
    </div>
  );
}
