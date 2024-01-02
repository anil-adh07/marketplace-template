export default function FirstSection() {
  return (
    <div className="grid grid-cols-2 border border-primaryA2 ">
      <div className=" border-r border-primaryA2">
        <div className="p-7">
          <img className=" " src="images/image1.jpg" alt=""></img>
        </div>
      </div>
      <div className=" flex border-primaryA2 p-20 items-center flex-col">
        <div className=" text-primaryA1">
          <h1 className="text-7xl font-modern text-center ">
            A Fresh Start with Nature's Luxury
          </h1>
          <p className="text-lg p-12 text-center">
            An elegant and clean e-commerce template for luxuriour fragrance
            brands.
          </p>
        </div>

        <div className="flex p-7">
          <button className=" p-4 border border-primaryA2 text-xl text-center hover:bg-primaryA1 hover:text-white hover:border-primaryB3">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
