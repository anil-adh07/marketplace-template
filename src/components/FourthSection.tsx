export default function FourthSection() {
  return (
    <div className="fourth-section border-x border-b border-primaryA2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="first-half flex flex-col">
          <div className="text-primaryA1 p-5 break-words">
            <h1 className="text-3xl md:text-5xl font-modern">
              Snap up our absolutes
            </h1>
            <p className="text-base md:text-lg py-4">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit nam
              hendre nisi sed solln itudin pellent nesque purus rhoncus.
            </p>
          </div>
          <div className="p-3 break-words">
            <button className="p-2 md:p-4 border border-primaryA2 text-base md:text-xl text-center hover:bg-primaryA1 hover:text-white hover:border-primaryB3">
              Shop Essentials
            </button>
          </div>
        </div>

        <div className="second-grid pt-6">
          <img
            className="border-l border-primaryA2 pl-3 pr-3 w-full"
            src="images/image5.jpeg"
            alt=""
          ></img>
          <div className="flex flex-col px-3 py-3 break-words">
            <div className="flex justify-between text-primaryA1 text-base md:text-lg">
              <p>Rose Magnetic Fragrance</p>
              <p>$65.00 USD</p>
            </div>
            <div className="py-2 text-gray-500">
              <p>OILS</p>
            </div>
          </div>
        </div>
        <div className="third-grid pt-6">
          <img
            className="pr-3 pl-3 w-full"
            src="images/image6.jpg"
            alt=""
          ></img>
          <div className="flex flex-col px-3 py-3 break-words">
            <div className="flex justify-between text-primaryA1 text-base md:text-lg">
              <p>Bombshell Candle Holder</p>
              <p>$80.00 USD</p>
            </div>
            <div className="py-2 text-gray-500">
              <p>ACCESSORIES</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
