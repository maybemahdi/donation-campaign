import { useEffect, useState } from "react";
import { getSaved } from "../utils/local";
import DonatedCard from "../components/DonatedCard";

const Donation = () => {
  const [donated, setDonated] = useState([]);
  useEffect(() => {
    const getSavedInLocal = getSaved();
    setDonated(getSavedInLocal);
  }, []);
  const [filter, setFilter] = useState(4);
  const handleAll = () => {
    setFilter(donated.length);
  };
  return (
    <div className="my-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {donated.slice(0, filter).map((item) => (
          <DonatedCard key={item.id} data={item} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        {donated.length > 4 && (
          <button
            onClick={handleAll}
            className={`bg-green-600 font-semibold text-black py-2 px-3 rounded-md ${
              filter === donated.length && "hidden"
            }`}
          >
            Show All
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
