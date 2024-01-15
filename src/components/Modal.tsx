import { IoMdClose } from "react-icons/io";
import useOnclickOutside from "react-cool-onclickoutside";
import { Link } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Modal component
const Modal = ({ isOpen, onClose }: ModalProps) => {
  const ref = useOnclickOutside(() => {
    onClose();
  });

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-filter backdrop-blur-sm" />
      )}
      <div
        ref={ref}
        className={` flex flex-col justify-between fixed left-0 top-0 h-screen w-full sm:w-1/2 bg-primaryB3 transform transition-transform duration-500 overflow-hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full overflow-hidden"
        }`}
      >
        <div className="text-primaryA1 border-l border-primaryA2 ml-5 ">
          <button onClick={onClose} className="ml-5 p-4 flex flex-row">
            <div className="mr-3 text-2xl">
              <IoMdClose />
            </div>
            <div>CLOSE</div>
          </button>
        </div>
        <div className="container h-850 border border-primaryA2 ml-5">
          <ul className="text-3xl  md:text-6xl font-serif">
            <li className="border-b py-4 mx-8 md:py-9 md:mx-16 border-primaryA2 text-primaryA1 hover:text-opacity-85">
              <div className="transition-transform duration-300 hover:translate-x-2 sm:hover:translate-x-7">
                <Link onClick={onClose} to="/shop">
                  Shop
                </Link>
              </div>
            </li>
            <li className="border-b py-4 mx-8 md:py-9 md:mx-16 border-primaryA2 text-primaryA1 hover:text-opacity-85">
              <div className="transition-transform duration-300 hover:translate-x-2 sm:hover:translate-x-7">
                <Link onClick={onClose} to="/aboutus">
                  About
                </Link>
              </div>
            </li>
            <li className="border-b py-4 mx-8 md:py-9 md:mx-16 border-primaryA2 text-primaryA1 hover:text-opacity-85">
              <div className="transition-transform duration-300 hover:translate-x-2 sm:hover:translate-x-7">
                Journal
              </div>
            </li>
            <li className="border-b py-4 mx-8 md:py-9 md:mx-16 border-primaryA2 text-primaryA1 hover:text-opacity-85">
              <div className="transition-transform duration-300 hover:translate-x-2 sm:hover:translate-x-7">
                Contact
              </div>
            </li>
          </ul>
        </div>

        <div className="border-x border-primaryA2 ml-5">
          <div className=" ml-auto md:ml-5 flex items-center flex-row justify-between ">
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
