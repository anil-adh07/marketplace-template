export default function FifthSection() {
  return (
    <div className="fifth-section border-x border-primaryA2">
      <div className="grid grid-cols-2">
        <div className="first-grid py-6 pl-6">
          <img src="images/image7.jpeg" alt=""></img>
        </div>
        <div className="second-grid my-6 mr-6 flex flex-col justify-between bg-primaryA1">
          <div className=" text-white">
            <h1 className="text-5xl p-7 font-serif">
              A bold statement about your brand
            </h1>
            <p className="p-7 text-lg">
              Laura LeNoah lorem ipsum dolor sit amet, consectetur enter train
              adipiscing elit, sed do eiusmod veniam quis nostrud. Namn nisi sed
              sollicitudin pellentesque.
            </p>
          </div>
          <div className="p-7 1">
            <button className="p-4 border border-white text-xl text-center text-white hover:bg-white hover:text-primaryA1 hover:border-primaryB3">
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
