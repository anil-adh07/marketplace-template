interface ShopIntroCardProps {
  heading: string;
  description: string;
  image: string;
}
const ShopIntroCard = ({ heading, description, image }: ShopIntroCardProps) => {
  return (
    <>
      <div className="flex flex-col justify-between  text-primaryA1 flex-1 p-5 border-x border-b border-primaryA2">
        <h1 className="text-6xl font-normal font-modern p-3 break-words">
          {heading}
        </h1>
        <p className="text-lg p-3">{description}</p>
      </div>

      <img
        className=" flex p-8 flex-1 md:w-28 w-full h-auto object-cover border-x md:border-l-0 border-b border-primaryA2"
        src={image}
        alt="Image"
      ></img>
    </>
  );
};
export default ShopIntroCard;
