import { PencilIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import type { UserData } from "../../schemas/users";

export function MyDataPage() {
  const [user, setUser] = useState<UserData>();

  const navigate = useNavigate();

  useEffect(() => {
    const userInJSON = localStorage.getItem("user");
    if (!userInJSON) {
      navigate("/");
      return;
    }
    try {
      const parsedUser = JSON.parse(userInJSON);
      setUser(parsedUser);
    } catch (error) {
      console.error("Erro ao fazer parse do usuário:", error);
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Meus Dados</h1>

      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-2 bg-white rounded-xl w-full max-w-xl shadow-md p-6">
          <div className="w-full flex justify-end">
            <button
              onClick={() => navigate("/editar")}
              className="flex gap-2 p-1  bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-200 hover:cursor-pointer active:scale-90"
            >
              Editar <PencilIcon className="w-4" />
            </button>
          </div>
          <div className=" mx-auto space-y-6">
            <div>
              <label className="block text-gray-600 font-medium">Nome</label>
              <p className="text-gray-800 text-lg">{user?.name}</p>
            </div>

            <div>
              <label className="block text-gray-600 font-medium">E-mail</label>
              <p className="text-gray-800 text-lg">{user?.email}</p>
            </div>
            <div>
              <label className="block text-gray-600 font-medium">
                Telefone
              </label>
              <p className="text-gray-800 text-lg">{user?.phone}</p>
            </div>

            <div>
              <label className="block text-gray-600 font-medium">Idade</label>
              <p className="text-gray-800 text-lg">{user?.age} anos</p>
            </div>

            <div>
              <label className="block text-gray-600 font-medium">
                Peso Descartado
              </label>
              <p className="text-gray-800 text-lg">{user?.discarted} kg</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
