import { Link } from "react-router-dom";

const DonatedCard = ({ data }) => {
  const { id, title, price, category, image, cardBg, textColor, categoryBg } =
    data;
  return (
    <div
      style={{ backgroundColor: cardBg, color: textColor }}
      className="flex cursor-pointer gap-5 rounded-md shadow"
    >
      <img className="w-[35%] rounded-l-md" src={image} alt="" />
      <div className="m-3 flex flex-col gap-[4px]">
        <button
          className="p-2 w-fit rounded-md text-base mb-2"
          style={{ backgroundColor: categoryBg, color: textColor }}
        >
          {category}
        </button>
        <h3 className="text-[18px] text-black font-bold">{title}</h3>
        <h4 style={{color: textColor}} className="text-base font-bold">${price.toFixed(2)}</h4>
        <Link to={`/donate-details/${id}`}>
          <button
            className="p-2 rounded-md text-white text-base mb-2"
            style={{ backgroundColor: textColor }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonatedCard;
