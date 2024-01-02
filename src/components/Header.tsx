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
    <>
      <div className=" bg-primaryB3   ">
        <div className=" border-x border-primaryA2">
          <div className="grid grid-cols-3  p-5 justify-stretch">
            <div className="cursor-pointer">
              <span onClick={toggleModal} className="text-2xl ">
                <IoIosMenu />
              </span>
              {/* Render the Modal component */}
              <Modal isOpen={isModalOpen} onClose={closeModal} />
            </div>
            <div className="cursor-pointer text-2xl mr-auto ml-auto">
              <span>MyShop</span>
            </div>
            <div className="cursor-pointer ml-auto">
              <span className="uppercase  ">Cart ( 0 )</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
