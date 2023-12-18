import { Link } from "react-router-dom";

export default function Export() {
  return (
    <div className="h-screen w-screen z-50 bg-[url('./assets/img/nino_punta_il_ferro.jpg')] bg-no-repeat bg-cover bg-center fixed flex justify-center items-center top-0 left-0">
      <div className="flex flex-col gap-4 justify-center items-center bg-black/40 p-12 rounded-2xl">
        <div className="absolute top-20 left-50 flex flex-col items-center text-4xl font-bold text-active">
          <h1 className="text-8xl">Error 404</h1>
          <h2 className="">Torna da dove sei venuto!</h2>
        </div>
        <img className="w-32" src="src\assets\img\spotyclone.png" alt="" />
        <h1 className="text-details font-bold text-4xl">Spotyclone</h1>
        <p className="text-inactive text-md">Pagina non trovata!</p>
        <Link
          className="py-4 px-6 bg-active rounded-full hover:bg-details hover:text-active font-bold transition-all hover:scale-110"
          to="/"
        >
          Home
        </Link>

        <Link
          className="underline text-inactive transition-all hover:text-active"
          to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
        >
          Assistenza
        </Link>
      </div>
    </div>
  );
}
