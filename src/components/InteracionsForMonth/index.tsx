import { InteractionsForMonthGraphic } from "../Graphics/InteractionsForMonthGraphic.tsx/index.tsx";

export function InteractionsForMonth() {
  return (
    <div className="flex flex-col items-center justify-between p-4 bg-gray-100">
      <h1 className="text-xl font-semibold w-full px-4 ">Interações Mensais</h1>
      <InteractionsForMonthGraphic />
    </div>
  );
}
