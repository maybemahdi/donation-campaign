import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    setQuery(input);
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[530px] gap-5">
        <h2 className="text-[#0B0B0B] text-center font-bold text-[28px] lg:text-[48px]">
          I Grow By Helping People In Need
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full lg:w-2/6 mx-auto">
          <label className="form-control w-full">
            <div className="label"></div>
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search Category"
              className="input input-bordered focus:outline-none w-full"
            />
          </label>
          <button
            onClick={handleSearch}
            className="btn rounded-l-none bg-red-500 w-full lg:w-fit -ml-2 mt-4 btn-secondary"
          >
            Search Here...
          </button>
        </div>
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data
          .filter((item) =>
            item.category.toLowerCase().includes(query.toLowerCase())
          )
          .map((data) => (
            <Card key={data.id} data={data} />
          ))}
      </div>
    </div>
  );
};

export default Home;
