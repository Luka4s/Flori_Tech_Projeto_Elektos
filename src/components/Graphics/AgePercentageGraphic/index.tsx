/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  type LegendType,
} from "recharts";
import { users } from "../../../mock/users";
import { useEffect, useState } from "react";
import type { DataKey } from "recharts/types/util/types";

type User = {
  age: number;
};

type LegendObjectType = {
  value: any;
  id?: string;
  type?: LegendType;
  color?: string;
  payload?: {
    strokeDasharray: string | number;
    value?: any;
    percent?: number;
  };
  dataKey?: DataKey<any>;
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AA66CC"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${percent !== 0 ? `${(percent * 100).toFixed(0)}%` : ""}`}
    </text>
  );
};

export function AgePercentageGraphic() {
  const [chartData, setChartData] = useState<{ name: string; value: number }[]>(
    []
  );

  function calcularPercentualFaixaEtaria(users: User[]) {
    const total = users.length;

    const faixas: { [key: string]: number } = {
      "18-24": 0,
      "25-34": 0,
      "35-44": 0,
      "45-54": 0,
      "55+": 0,
    };

    for (const user of users) {
      const { age } = user;
      console.log(age);
      if (age >= 18 && age <= 24) faixas["18-24"]++;
      else if (age >= 25 && age <= 34) faixas["25-34"]++;
      else if (age >= 35 && age <= 44) faixas["35-44"]++;
      else if (age >= 45 && age <= 54) faixas["45-54"]++;
      else if (age >= 55) faixas["55+"]++;
    }

    const percentuais = Object.entries(faixas).map(([faixa, count]) => ({
      name: faixa,
      value: parseFloat(((count / total) * 100).toFixed(2)),
    }));

    setChartData(percentuais);
  }

  useEffect(() => {
    calcularPercentualFaixaEtaria(users);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-[20rem] bg-gray-100 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={600} height={600}>
          <Tooltip
            formatter={(value: string) => {
              return `${value}%`;
            }}
          />
          <Legend
            formatter={(value, obj: LegendObjectType) => {
              if (!obj.payload || obj.payload.percent === undefined)
                return null;
              return [`${value}: `, `${obj.payload.percent * 100}%`];
            }}
          />
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {chartData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
