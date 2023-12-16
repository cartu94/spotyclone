import Icons from "./Icons";
import { Link } from "react-router-dom";

function activeSearch() {
  document.getElementById("searchDefault").classList.add("hidden");
  document.getElementById("searchActive").classList.remove("hidden");
  document.getElementById("textSearch").classList.add("text-active");
}

function clickHome() {
  document.getElementById("searchDefault").classList.remove("hidden");
  document.getElementById("searchActive").classList.add("hidden");
  document.getElementById("textSearch").classList.remove("text-active");
}

export default function SearchHome() {
  return (
    <div className="text-sm font-bold flex flex-col items-center lg:items-start gap-5 p-5 w-[90px] lg:w-[350px] bg-background rounded-xl">
      <Link to="/">
        <button
          onClick={clickHome}
          className="flex items-center gap-4 text-inactive group"
        >
          <Icons.Home classes="text-inactive text-2xl group-hover:text-active transition-all" />
          <p className="group-hover:text-active transition-all hidden lg:block">
            Home
          </p>
        </button>
      </Link>

      <Link to="/categories">
        <button
          onClick={activeSearch}
          className="flex items-center gap-4 text-inactive group"
        >
          <div id="searchDefault" className="">
            <Icons.SearchDefault classes="text-inactive text-2xl group-hover:text-active transition-all" />
          </div>
          <div id="searchActive" className="hidden">
            <Icons.SearchActive classes="text-active text-2xl" />
          </div>
          <p
            id="textSearch"
            className="group-hover:text-active transition-all hidden lg:block"
          >
            Cerca
          </p>
        </button>
      </Link>
    </div>
  );
}
