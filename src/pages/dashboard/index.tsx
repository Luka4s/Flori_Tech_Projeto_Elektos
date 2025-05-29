import { useEffect } from "react";
import { AgePercentage } from "../../components/AgePercentage";
import { InteractionsForMonth } from "../../components/InteracionsForMonth";
import { LastPublication } from "../../components/LastPublication";
import { MonthlyWeightDropped } from "../../components/MonthlyWeightDropped";

export function Dashboard() {
  useEffect(() => {
    const userLogged = {
      name: "Lucas Rodrigues Seidel Silva",
      age: 22,
      email: "lucasdeveloper@gmail.com",
      phone: "(11) 99421-7053",
      discarted: 35,
    };

    const parsedUser = JSON.stringify(userLogged);

    localStorage.setItem("user", parsedUser);
  }, []);

  return (
    <div className="flex flex-col   bg-gray-200 p-6">
      <h1 className="text-4xl font-bold text-gray-700 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-y-auto">
        <InteractionsForMonth />
        <AgePercentage />
        <MonthlyWeightDropped />
        <LastPublication />
      </div>
    </div>
  );
}
