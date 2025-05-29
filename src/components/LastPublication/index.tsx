import img from "../../assets/Dia Mundial da Reciclagem.jpg";
export function LastPublication() {
  return (
    <div className="flex flex-col items-center justify-between  bg-gray-100 p-4">
      <h1 className="text-xl font-semibold w-full px-4 ">
        Última Publicação Registrada
      </h1>
      <img
        src={img}
        alt="Last Publication"
        className="size-92 max-w-md rounded-lg shadow-lg mt-4 hover:cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() =>
          window.open("https://www.instagram.com/flori.tech/", "_blank")
        }
      />
    </div>
  );
}
