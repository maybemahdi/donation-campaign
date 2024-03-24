import { useLoaderData, useParams } from "react-router-dom";
import { savetoLocal } from "../utils/local";

const Details = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const selected = data.find((data) => data.id === +id);
  const handleDonate = (selectedData) => {
     savetoLocal(selectedData)
  }
  return (
    <div
      className="flex flex-col gap-5 mb-16 rounded-md"
    >
      <div className="relative">
        <img
          className="h-[300px] rounded-md w-full lg:h-[700px]"
          src={selected.image}
          alt=""
        />
        <div className="absolute bottom-0 p-8 w-full bg-black bg-opacity-30">
          <button onClick={() => handleDonate(selected)} className="p-3 text-white bg-red-500 rounded-md">Donate ${selected.price}</button>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-[18px] font-bold">{selected.title}</h3>
        <p>{selected.description}</p>
      </div>
    </div>
  );
};

export default Details;
