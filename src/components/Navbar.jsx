import Icons from "../components/Icons";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; 

export default function Navbar() {
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();

  useEffect(() => {
    console.log("location", location.pathname);
    if (location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);

  return (
      <nav className="bg-[#170E3A] text-sm font-bold flex justify-between items-center h-16 px-5 w-full sm:px-5 py-3">
        <div className="flex justify-center items-center gap-2">
          <button className="group hidden sm:hidden xl:flex justify-center items-center bg-black rounded-full h-8 w-8">
            <Icons.SimpleArrowLeft classes="text-inactive text-lg group-hover:text-active" />
          </button>
          <button className="group hidden sm:hidden xl:flex justify-center items-center bg-black rounded-full h-8 w-8">
            <Icons.SimpleArrowRight classes="text-inactive text-lg group-hover:text-active" />
          </button>
          <div
            className={!isHome ? "flex justify-start group items-center gap-2 bg-[#242424] rounded-full p-2 h-12 w-[250px] sm:w-[300px] border-2 border-transparent group-focus-within:border-active" : "hidden"}
          >
            <Icons.SearchDefault classes="text-inactive text-lg" />
            <input
              className="bg-transparent text-active font-normal h-[48px] w-full outline-none"
              type="text"
              name="search"
              id="search"
              placeholder="Cosa vuoi ascoltare?"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <button className={isHome ? "hidden sm:hidden md:inline-flex items-center justify-center w-[170px] h-9 bg-active text-black rounded-full xl:hover:scale-[1.03] xl:duration-75" : "hidden"}>
            Esplora Premium
          </button>
          <button className="inline-flex items-center justify-center gap-2 sm:px-4 px-0 sm:w-[150px] w-8 h-8 bg-black text-active rounded-full xl:hover:scale-[1.03] xl:duration-75">
            <Icons.Download classes="text-active text-lg" />
            <p className="hidden sm:flex">Installa app</p>
          </button>
          <button className="group inline-flex items-center justify-center h-8 w-8 bg-black text-active rounded-full xl:hover:scale-110 xl:duration-75">
            <Icons.Notification classes="text-inactive text-lg lg:group-hover:text-active" />
          </button>
          <button className="rounded-full overflow-hidden h-8 w-8 xl:hover:scale-110 xl:duration-75">
            <img
              src="src\assets\img\profilePic.png"
              alt="profile pic"
              className="w-fit h-fit"
            />
          </button>
        </div>
      </nav>
    
  );
}
