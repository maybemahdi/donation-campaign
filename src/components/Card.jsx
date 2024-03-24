import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const {
    id,
    title,
    category,
    image,
    cardBg,
    textColor,
    categoryBg,
  } = data;
  return (
    <Link to={`/donate-details/${id}`}>
      <div
        style={{ backgroundColor: cardBg, color: textColor }}
        className="flex flex-col cursor-pointer gap-5 rounded-md shadow"
      >
        <img src={image} alt="" />
        <div className="m-5">
          <button
            className="p-2 rounded-md text-base mb-2"
            style={{ backgroundColor: categoryBg }}
          >
            {category}
          </button>
          <h3 className="text-[18px] font-bold">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
