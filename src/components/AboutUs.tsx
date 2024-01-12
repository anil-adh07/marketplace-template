const AboutUs = () => {
  return (
    <div className="fifth-section border-x border-primaryA2">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="first-grid py-6 px-3 md:px-6 md:pr-0 ">
          <img
            src="images/image7.jpeg"
            alt=""
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div className="second-grid  mb-4 md:my-6 mx-3 md:mr-6 md:mx-0 flex flex-col justify-between bg-primaryA1 break-words">
          <div className="text-white ">
            <h1 className="text-3xl md:text-5xl p-4 md:p-7 font-modern">
              A bold statement about your brand
            </h1>
            <p className="text-base md:text-lg p-4 md:p-7">
              Laura LeNoah lorem ipsum dolor sit amet, consectetur enter train
              adipiscing elit, sed do eiusmod veniam quis nostrud. Namn nisi sed
              sollicitudin pellentesque.
            </p>
          </div>
          <div className="p-4 md:p-7">
            <button className="p-2 md:p-4 border border-white text-base md:text-xl text-center text-white hover:bg-white hover:text-primaryA1 hover:border-primaryB3">
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
