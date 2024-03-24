import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getSaved } from "../utils/local";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const Statistics = () => {
  const mainData = useLoaderData();
  const [donatedData, setDonatedData] = useState([]);
  useEffect(() => {
    const data = getSaved();
    setDonatedData(data);
  }, []);
  const data = [
    { name: "Your Donation", value: donatedData.length },
    { name: "Available Donation", value: mainData.length - donatedData.length },
  ];
  const COLORS = ["#00C49F", "#FF444A"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        className="text-center font-bold"
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="w-[70%] h-[400px] mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-col lg:flex-row justify-center mt-5 gap-8 items-center text-xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 font-bold">
          Your Donation:
          <hr className="bg-[#00C49F] w-20 rounded-sm h-5" />{" "}
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 font-bold">
          Available for Donation:
          <hr className="bg-[#FF444A] w-20 rounded-sm h-5" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Statistics;
