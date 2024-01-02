export default function FooterSection() {
  return (
    <div className="footer-section flex flex-col border-x border-primaryA2">
      <div className="subscribe-section">
        <div className="grid grid-cols-2 items-center py-28 px-9">
          <div className="text-4xl  text-primaryA1">
            <h1>
              Sign up for releases
              <hr /> and product updates
            </h1>
          </div>
          <div>
            <div className=" flex flex-row justify-between border-b focus-within:border-b border-primaryA2 focus-within:border-blue-500 py-3 ">
              <input
                type="text"
                placeholder="Enter email address"
                maxLength={256}
                className="h-16 bg-transparent w-full focus:outline-none p-2 text-lg"
              ></input>
              <button className=" p-4 border border-primaryA2 text-lg text-center hover:bg-primaryA1 hover:text-white hover:border-primaryB3">
                Subscribe
              </button>
            </div>
            <div className="p-2">
              <p className=" text-gray-500">
                By signing up you agree with our{" "}
                <span className="text-primaryA1">Terms & Conditions </span>
                and <span className=" text-primaryA1">Privacy Policy.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="descriptiopn-section mx-8">
        <div className="grid grid-cols-3 border-t border-primaryA2">
          <div className="first-grid py-10 text-primaryA1">
            <h1 className="text-4xl py-8">MySHop</h1>
            <p className="text-lg pb-4">
              35 Casberg-Scott Valley Rd. <hr />
              Deer Park, WA, 99006 UK
            </p>
            <p className="text-lg">Tel: (+22) 123 456 678</p>
            <p className="text-lg">Email: hello@gmail.com</p>
          </div>
          <div className="second-grid  col-span-2 flex flex-row  my-8 border-l border-primaryA2">
            <div className="py-8 px-16">
              <h1 className="py-5 text-gray-500">MYSHOP</h1>
              <ul className="text-lg">
                <li className="py-2">Shop</li>
                <li className="py-2">Oils</li>
                <li className="py-2">Accessories</li>
                <li className="py-2">Candles</li>
              </ul>
            </div>
            <div className="py-8 px-16">
              <h1 className="py-5 text-gray-500">COMPANY</h1>
              <ul className="text-lg">
                <li className="py-2">About</li>
                <li className="py-2">Journal</li>
                <li className="py-2">Contact</li>
                <li className="py-2">Privacy</li>
                <li className="py-2">Terms of Use</li>
                <li className="py-2">Returns</li>
              </ul>
            </div>
            <div className="py-8 px-16">
              <h1 className="py-5 text-gray-500">TEMPLATE</h1>
              <ul className="text-lg">
                <li className="py-2">Style Guide</li>
                <li className="py-2">Support</li>
                <li className="py-2">Licenses</li>
                <li className="py-2">Changelog</li>
                <li className="py-2">More Templates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
