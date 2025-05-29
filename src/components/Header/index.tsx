import { Menu } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  open: boolean;
  setIsOpenAction: Dispatch<SetStateAction<boolean>>;
}

export function Header({ open, setIsOpenAction }: HeaderProps) {
  return (
    <div
      className={`flex w-full items-center  md:justify-between p-4 bg-gray-800 text-white ${
        open ? "justify-end gap-20" : "justify-between"
      }`}
    >
      <Menu
        onClick={() => setIsOpenAction(!open)}
        className={`${open ? "rotate-90" : ""} hover:cursor-pointer`}
      />
      <span className="text-lg">Sair</span>
    </div>
  );
}
