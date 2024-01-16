import { Link } from "react-router-dom";
export default function Herosection() {
  return (
    <div className="grid md:grid-cols-2 border-x border-b border-primaryA2">
      <div className="md:border-r md:border-primaryA2">
        <div className=" p-3 md:p-7">
          <img className="w-full" src="images/image1.jpg" alt="Image loading" />
        </div>
      </div>
      <div className="flex md:p-20 items-center flex-col justify-center">
        <div className="text-primaryA1">
          <h1 className="text-4xl md:text-7xl font-modern text-center break-words">
            A Fresh Start with Nature's Luxury
          </h1>
          <p className="text-sm md:text-lg p-4 md:p-12 text-center break-words">
            An elegant and clean e-commerce template for luxurious fragrance
            brands.
          </p>
        </div>

        <div className="flex p-4 md:p-7">
          <Link to="/shop">
            <button className="p-2 md:p-4 text-primaryA1 border border-primaryA2 text-sm md:text-xl text-center hover:bg-primaryA1 hover:text-white hover:border-primaryB3">
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
