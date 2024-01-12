import { Link } from "react-router-dom";

interface ItemCardProps {
  name: string;
  price: string;
  category: string;
  image: string;
  classname?: string;
}
const ItemCard = ({
  name,
  price,
  category,
  image,
  classname,
}: ItemCardProps) => {
  return (
    <Link to="/itemsDetails">
      <div className="second-grid pt-6">
        <img
          className={`${classname} border-primaryA2 px-1 md:px-3 w-full`}
          src={image}
          alt="Image"
        ></img>
        <div className="flex flex-col px-3 py-3 break-words">
          <div className="flex justify-between text-primaryA1 text-base md:text-lg">
            <p>{name}</p>
            <p>{price}</p>
          </div>
          <div className="py-2 text-gray-500">
            <p>{category.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ItemCard;
