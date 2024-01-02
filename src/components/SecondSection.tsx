export default function SecondSection() {
  return (
    <div className="isecond-section border-x border-b border-primaryA2">
      <div className="grid grid-cols-3 ">
        <div className=" first-half flex flex-col ">
          <div className="text-primaryA1 p-5">
            <h1 className="text-5xl">Introducing a brand new collection</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit nam
              hendre nisi sed solln itudin pellent nesque purus rhoncus.
            </p>
          </div>
          <div className="p-5">
            <button className="p-4 border border-primaryA2 text-xl text-center hover:bg-primaryA1 hover:text-white hover:border-primaryB3">
              Shop New
            </button>
          </div>
        </div>

        <div className="second-grid  pt-6">
          <img
            className="border-l border-primaryA2 pl-6 pr-3"
            src="images/image2.jpeg"
            alt=""
          ></img>
          <div className="flex flex-col px-6 py-3">
            <div className="flex justify-between text-primaryA1 text-lg">
              <p>Rosemary Scented Candle</p>
              <p>$45.00 USD</p>
            </div>
            <div className="py-2 text-gray-500">
              <p>CANDLES</p>
            </div>
          </div>
        </div>
        <div className="third-grid pt-6">
          <img className="pr-6 pl-3" src="images/image3.jpg" alt=""></img>
          <div className="flex flex-col px-6 py-3">
            <div className="flex justify-between text-primaryA1 text-lg">
              <p>Imperial Scented Candle</p>
              <p>$105.00 USD</p>
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
