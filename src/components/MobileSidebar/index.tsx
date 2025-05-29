import {
  ArrowRight,
  CheckCircle,
  CircleHelp,
  TrendingUp,
  User,
} from "lucide-react";
import { Link } from "react-router";

interface SidebarProps {
  open?: boolean;
}

export function MobileSidebar({ open }: SidebarProps) {
  return (
    <div
      className={`fixed top-0 left-0 z-10 h-full md:flex md:flex-col 
        ${open ? "w-56" : "w-0"}
        bg-gray-800 text-white
        overflow-hidden
        transition-all duration-300
      }`}
    >
      <h2 className="text-2xl border border-gray-950 border-t-0 border-l-0 p-3 font-bold text-center">
        FLORI TECH
      </h2>
      <ul className="space-y-2 p-4 ">
        <li>
          <Link
            to={"/"}
            className="flex gap-2 items-center  justify-around p-2 rounded-lg hover:bg-gray-900"
          >
            <CheckCircle className="size-5" />
            <span className="text-base text-start flex-1 ">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/meus-dados"}
            className="flex gap-2 items-center  justify-around p-2 rounded-lg hover:bg-gray-900"
          >
            <TrendingUp className="size-5" />
            <span className="text-base text-start flex-1 ">
              Vizualizar Meus Dados
            </span>
          </Link>
        </li>
        <li>
          <Link
            to={"/ajuda"}
            className="flex gap-2 items-center  justify-around p-2 rounded-lg hover:bg-gray-900"
          >
            <CircleHelp className="size-5" />
            <span className="text-base text-start flex-1 ">Ajuda</span>
          </Link>
        </li>

        <li>
          <Link
            to={"/editar"}
            className="flex gap-2 items-center  justify-around p-2 rounded-lg hover:bg-gray-900"
          >
            <User className="size-5" />
            <span className="text-base text-start flex-1 ">
              {" "}
              Editar Meu Perfil
            </span>
          </Link>
        </li>
        <li>
          <Link
            to={"/"}
            className="flex gap-2 items-center  justify-around p-2 rounded-lg hover:bg-gray-900"
          >
            <ArrowRight className="size-5" />
            <span className="text-base text-start flex-1 ">Sair</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
