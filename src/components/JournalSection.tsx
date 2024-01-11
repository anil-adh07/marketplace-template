export default function JournalSection() {
  return (
    <div className="journal-section border border-primaryA2">
      <div className="flex justify-between flex-col  items-center text-primaryA1 break-words">
        <div className="pt-8 text-4xl md:text-6xl font-modern">
          <h1>Our Journal</h1>
        </div>
        <div className="py-4 text-lg  text-center">
          <p>
            Lorem posuere purus rhoncus pulvin aliquam ut dead faliquet vitaien
            volutpat null aliquet hendre nisi.
          </p>
        </div>
        <div className="py-6">
          <button className="p-4 border border-primaryA2 text-xl text-center hover:bg-primaryA1 hover:text-white hover:border-primaryB3">
            Visit Journal
          </button>
        </div>
        <div className="grid grid-cols-3 pt-10 p-4 break-words">
          <div className="p-4">
            <img src="images/image8.jpg" alt=""></img>
            <div className="flex flex-col pt-2">
              <p className="text-gray-500">OCT 6, 2023</p>
              <span className=" text-primaryA1 text-lg">
                So You've Bought Cosmetics... Now What?
              </span>
            </div>
          </div>
          <div className="p-4">
            <img src="images/image9.jpg" alt=""></img>
            <div className="flex flex-col pt-2">
              <p className="text-gray-500">OCT 1, 2023</p>
              <span className=" text-primaryA1 text-lg">
                Top 10 Fragrance for Holiday Gifts
              </span>
            </div>
          </div>
          <div className="p-4">
            <img src="images/image10.jpg" alt=""></img>
            <div className="flex flex-col pt-2">
              <p className="text-gray-500">OCT 9, 2023</p>
              <span className=" text-primaryA1 text-lg">
                Candle Fragrance Poll of the Day
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
