import { SearchActive, SearchDefault, HomeDefault, HomeActive } from "./Icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SearchHome() {
  const [isHome, setIsHome] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // console.log("location", location.pathname);
    if (location.pathname === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [location]);

  return (
    <div className="text-sm font-bold flex flex-col items-center h-fit lg:items-start gap-5 p-5 w-[90px] lg:w-[320px] bg-background rounded-xl">
      <Link
        to="/"
        className={
          isHome
            ? "flex items-center gap-4 text-active group"
            : "flex items-center gap-4 text-inactive group"
        }
      >
        {isHome ? (
          <HomeActive classes=" text-2xl" />
        ) : (
          <HomeDefault classes="text-2xl group-hover:text-active transition-all" />
        )}
        <p className="group-hover:text-active transition-all hidden lg:block">
          Home
        </p>
      </Link>

      <Link
        to="/categories"
        className={
          !isHome
            ? "flex items-center gap-4 text-active group"
            : "flex items-center gap-4 text-inactive group"
        }
      >
        {!isHome ? (
          <SearchActive classes=" text-2xl" />
        ) : (
          <SearchDefault classes="text-2xl group-hover:text-active transition-all" />
        )}
        <p className="group-hover:text-active transition-all hidden lg:block">
          Cerca
        </p>
      </Link>
    </div>
  );
}
