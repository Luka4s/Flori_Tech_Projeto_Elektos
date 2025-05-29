import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
} from "recharts";
import { useEffect, useState } from "react";

export function InteractionsForMonthGraphic() {
  const [monthList, setMonthList] = useState([
    {
      month: "",
      interactions: 0,
    },
  ]);

  function getMonthList() {
    const getMonthList = [];
    for (let i = 3; i <= 12; i++) {
      getMonthList.push({
        month: new Date(0, i - 1).toLocaleString("default", { month: "short" }),
        interactions: Math.floor(Math.random() * 1000),
      });
    }
    setMonthList(getMonthList);
  }

  useEffect(() => {
    getMonthList();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-[20rem] bg-gray-100 p-4">
      <ResponsiveContainer width="100%" height="100%" className={""}>
        <LineChart width={300} height={100} data={monthList}>
          <CartesianGrid strokeDasharray={"3 3"} />
          <YAxis dataKey={"interactions"} />
          <XAxis dataKey={"month"} />
          <Tooltip
            formatter={(value, name) => {
              if (name === "interactions") return [value, "Interações"];
              return [value, name];
            }}
          />
          <Line
            type="monotone"
            dataKey="interactions"
            stroke="#ed8d64"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
