import { useState } from "react";
import Modal from "./Modal";
import { IoIosMenu } from "react-icons/io";

// Header component
export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className=" bg-primaryB3  fixed w-full inset-x-0 top-0">
      <div className=" border-x border-b border-primaryA2 ml-10 mr-12">
        <div className="md:grid md:grid-cols-3  p-6 justify-stretch">
          <div className="cursor-pointer">
            <span onClick={toggleModal} className="text-2xl ">
              <IoIosMenu />
            </span>
            {/* Render the Modal component */}
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </div>
          <div className="cursor-pointer  text-xl md:text-2xl mx-auto font-modern">
            <span>MyShop</span>
          </div>
          <div className="cursor-pointer  ml-auto">
            <span className="uppercase  ">Cart ( 0 )</span>
          </div>
        </div>
      </div>
    </div>
  );
}
