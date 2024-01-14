import { Link } from "react-router-dom";

interface ItemCardProps {
  name: string;
  price: number;
  category: string;
  image: string;
  slug: string;
  classname?: string;
}
const ItemCard = ({
  name,
  price,
  category,
  image,
  slug,
  classname,
}: ItemCardProps) => {
  return (
    <Link to={`/itemsDetails/${slug}`}>
      <div className="md:pt-6">
        <div className="">
          <img
            className={`${classname} border-primaryA2 w-full`}
            src={image}
            alt="Image"
          ></img>
        </div>

        <div className="flex flex-col px-3 py-3 break-words">
          <div className="flex justify-between text-primaryA1 text-base md:text-lg">
            <p>{name}</p>
            <p>$ {price.toFixed(2)} USD</p>
          </div>
          <p className="py-2 text-gray-500">{category.toUpperCase()}</p>
        </div>
      </div>
    </Link>
  );
};
export default ItemCard;
