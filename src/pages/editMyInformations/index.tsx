import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import type { UserData } from "../../schemas/users";
import { useNavigate } from "react-router";

const formDataSchema = z.object({
  name: z.string().min(3, { message: "É obrigatório informar um nome válido" }),
  phone: z
    .string()
    .min(3, { message: "É obrigatório informar um numero de telefone válido" }),
  age: z.number().refine((value) => value > 0 && value <= 200, {
    message: "Informe uma idade válida (até 200 anos).",
  }),
});

type formDataType = z.infer<typeof formDataSchema>;

export function EditMyInformation() {
  const [userData, setUserData] = useState<UserData>();
  const navigate = useNavigate();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<formDataType>({
    resolver: zodResolver(formDataSchema),
  });

  useEffect(() => {
    const userInJSON = localStorage.getItem("user");
    if (!userInJSON) {
      navigate("/");
      return;
    }

    try {
      const parsedUser = JSON.parse(userInJSON);
      setUserData(parsedUser);
      reset({
        name: parsedUser.name,
        phone: parsedUser.phone,
        age: parsedUser.age,
      });
    } catch (error) {
      console.error("Erro ao fazer parse do usuário:", error);
      navigate("/");
    }
  }, [navigate, reset]);

  function onSubmit(data: formDataType) {
    const updatedUser: UserData = {
      name: data.name,
      email: userData?.email || "",
      phone: data.phone,
      age: data.age,
      discarted: userData?.discarted || 0,
    };

    setUserData(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Editar Minhas Informações
      </h1>

      <div className="w-full flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-xl shadow-md w-full max-w-xl space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Nome
            </label>
            <input
              type="text"
              id="name"
              defaultValue={userData?.name}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              {...register("name")}
            />
          </div>
          <span className="flex-1 text-center text-sm text-red-500">
            {errors.name?.message}
          </span>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              defaultValue={userData?.phone}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              {...register("phone")}
            />
          </div>
          <span className="flex-1 text-center text-sm text-red-500">
            {errors.phone?.message}
          </span>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Idade
            </label>
            <input
              type="number"
              id="age"
              min={1}
              defaultValue={userData?.age}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              {...register("age")}
            />
          </div>
          <span className="flex-1 text-center text-sm text-red-500">
            {errors.age?.message}
          </span>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <LoaderCircle className="animate-spin" />
                Salvando...
              </div>
            ) : (
              "Salvar Alterações"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
