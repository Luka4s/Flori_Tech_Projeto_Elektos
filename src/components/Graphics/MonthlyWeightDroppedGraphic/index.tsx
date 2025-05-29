import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

export function MonthlyWeightDroppedGraphic() {
  const [discartedMonth, setDiscartedMonth] =
    useState<{ month: string; discarted: number }[]>();

  function calculateMonthlyWeightDropped() {
    const getMonthList: { month: string; discarted: number }[] = [];

    for (let i = 3; i <= 12; i++) {
      getMonthList.push({
        month: new Date(0, i - 1).toLocaleString("default", { month: "short" }),
        discarted: Math.min(100, Math.floor(Math.random() * 100)),
      });
    }

    setDiscartedMonth(getMonthList);
  }

  useEffect(() => {
    calculateMonthlyWeightDropped();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-[20rem] bg-gray-100 p-4">
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={300}
          data={discartedMonth}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey={"discarted"} />
          <Tooltip
            formatter={(value, name) => {
              if (name === "discarted") return [`${value} Kg`, "descartado"];
              return value;
            }}
          />

          <Bar
            dataKey="discarted"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="orange" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
