import { MonthlyWeightDroppedGraphic } from "../Graphics/MonthlyWeightDroppedGraphic";

export function MonthlyWeightDropped() {
  return (
    <div className="flex flex-col items-center justify-between  bg-gray-100 p-4">
      <h1 className="text-xl font-semibold w-full px-4 ">
        Peso Descartado Mensal
      </h1>
      <MonthlyWeightDroppedGraphic />
    </div>
  );
}
