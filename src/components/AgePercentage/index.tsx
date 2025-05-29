import { AgePercentageGraphic } from "../Graphics/AgePercentageGraphic/index.tsx";

export function AgePercentage() {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-xl font-semibold w-full px-4 ">
        Percentual de Faixa Etária
      </h1>
      <AgePercentageGraphic />
    </div>
  );
}
