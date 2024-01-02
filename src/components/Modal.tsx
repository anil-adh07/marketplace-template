import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Modal component
const Modal = ({ isOpen, onClose }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"></div>
      )}
      <div
        className={`fixed left-0 top-0 h-screen w-full sm:w-1/2 bg-primaryB3 transform transition-transform duration-500  overflow-hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full overflow-hidden"
        }`}
      >
        <div className=" text-primaryA1 border-l border-primaryA2 ml-5 ">
          <button onClick={onClose} className=" ml-5 p-4   flex flex-row ">
            <div className=" mr-3 text-2xl">
              <IoMdClose />
            </div>
            <div> CLOSE</div>
          </button>
        </div>
        <div className="container h-850  border border-primaryA2 ml-5 ">
          <ul className="text-3xl sm:text-6xl font-serif ">
            <div className=" text-primaryA1 hover:text-opacity-85 ">
              <li className=" border-b py-9 mx-10 border-primaryA2 ">
                <div className="transition-transform duration-300 hover:translate-x-7 ">
                  Shop
                </div>
              </li>
            </div>

            <div className="text-primaryA1 hover:text-opacity-85 ">
              <li className="border-b py-9 mx-10  border-primaryA2">
                <div className="transition-transform duration-300 hover:translate-x-7 ">
                  About
                </div>
              </li>
            </div>
            <div className="text-primaryA1 hover:text-opacity-85 ">
              <li className="border-b py-9 mx-10 border-primaryA2">
                <div className="transition-transform duration-300 hover:translate-x-7 ">
                  Journal
                </div>
              </li>
            </div>

            <div className="text-primaryA1 hover:text-opacity-85 ">
              <li className="border-b py-9 mx-10 border-primaryA2">
                <div className="transition-transform duration-300 hover:translate-x-7 ">
                  Contact
                </div>
              </li>
            </div>
          </ul>
        </div>

        <div className="border-x border-primaryA2 ml-5">
          <div className=" ml-5 flex flex-col items-center sm:flex-row sm:justify-between space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left p-5">
              &copy; Copyright Company
            </div>
            <div className="text-center sm:text-right p-5">Designed by ABC</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
