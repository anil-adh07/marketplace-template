import { useLocation, useNavigate, Link } from "react-router-dom";

export default function FooterSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToshop = (category: string | null) => {
    if (location.pathname !== "/shop") {
      navigate(`shop/${category}`);
      setTimeout(() => {
        const shopSection = document.getElementById(
          "shop-section"
        ) as HTMLDivElement;
        shopSection.scrollIntoView({
          behavior: "smooth",
        });
      }, 500);
    } else {
      navigate(`shop/${category}`);
      setTimeout(() => {
        const shopSection = document.getElementById(
          "shop-section"
        ) as HTMLDivElement;
        shopSection.scrollIntoView({
          behavior: "smooth",
        });
      }, 500);
    }
  };
  return (
    <div className="footer-section flex flex-col md:flex-col border-x border-primaryA2 w-full">
      <div className="subscribe-section">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center py-8 md:py-28 px-4 md:px-9">
          <h1 className="text-2xl md:text-5xl text-primaryA1 font-modern text-center md:text-left">
            Sign up for releases and product updates
          </h1>
          <div>
            <div className="flex flex-col md:flex-row justify-between md:items-center py-3">
              <input
                type="text"
                placeholder="Enter email address"
                className=" text-sm md:h-16 bg-transparent w-full  focus:outline-none p-2 border-b  border-primaryA2 focus-within:border-blue-500"
              ></input>
              <button className="p-2 mt-4 md:ml-4 md:p-4 md:w-40  text-primaryA1 border border-primaryA2 text-lg md:text-base text-center hover:bg-primaryA1 hover:text-white hover:border-primaryB3">
                Subscribe
              </button>
            </div>
            <div className="p-2 text-gray-500">
              <p>
                By signing up you agree with our
                <span className="text-primaryA1"> Terms & Conditions </span>
                and <span className="text-primaryA1">Privacy Policy.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="description-section  mx-auto md:mx-8 text-center md:text-left ">
        <div className="grid md:grid-cols-1 lg:grid-cols-3 border-t border-primaryA2">
          <div className="first-grid py-8 md:py-10 text-primaryA1 ">
            <h1 className="text-2xl md:text-4xl py-4 font-modern">MyShop</h1>
            <p className="text-base md:text-lg pb-2 md:pb-4">
              35 Casberg-Scott Valley Rd. <br />
              Deer Park, WA, 99006 UK
            </p>
            <p className="text-base md:text-lg">Tel: (+22) 123 456 678</p>
            <p className="text-base md:text-lg">Email: hello@gmail.com</p>
          </div>
          <div className="second-grid col-span-2 text-center md:text-left flex flex-col text-primaryA1 md:flex-row my-8 md:border-l border-primaryA2">
            <div className="py-8 px-4 md:px-8">
              <p className="py-2 text-gray-500">MYSHOP</p>
              <div className="flex flex-col items-center md:items-start text-base md:text-lg">
                <button
                  onClick={() => navigate("/shop")}
                  className="py-1 md:py-2"
                >
                  Shop
                </button>
                <button
                  onClick={() => scrollToshop("Oils")}
                  className="py-1 md:py-2"
                >
                  Oils
                </button>
                <button
                  onClick={() => scrollToshop("Accessories")}
                  className="py-1 md:py-2"
                >
                  Accessories
                </button>
                <button
                  onClick={() => scrollToshop("Candles")}
                  className="py-1 md:py-2"
                >
                  Candles
                </button>
              </div>
            </div>
            <div className="py-8 px-4 md:px-8">
              <p className="py-2 text-gray-500">COMPANY</p>
              <ul className="text-base md:text-lg">
                <li className="py-1 md:py-2">
                  <Link to="/aboutus">About</Link>
                </li>
                <li className="py-1 md:py-2">Journal</li>
                <li className="py-1 md:py-2">Contact</li>
                <li className="py-1 md:py-2">Privacy</li>
                <li className="py-1 md:py-2">Terms of Use</li>
                <li className="py-1 md:py-2">Returns</li>
              </ul>
            </div>
            <div className="py-8 px-4 md:px-8">
              <p className="py-2 text-gray-500">TEMPLATE</p>
              <ul className="text-base md:text-lg">
                <li className="py-1 md:py-2">Style Guide</li>
                <li className="py-1 md:py-2">Support</li>
                <li className="py-1 md:py-2">Licenses</li>
                <li className="py-1 md:py-2">Changelog</li>
                <li className="py-1 md:py-2">More Templates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
