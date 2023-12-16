import { useState } from "react";
import { SearchDefault, Menu } from "../Icons";

export default function LibrarySearch() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  function toggleSearchBox() {
    setIsSearchVisible(!isSearchVisible);
  }
  return (
    <>
      <div className="hidden lg:flex justify-between items-center h-16">
        <div className="flex items-center gap-1 h-12 relative">
          <button
            className="cursor-pointer transition-all duration-300 hover:text-active hover:bg-white/10 rounded-full p-2 z-10 absolute"
            onClick={toggleSearchBox}
          >
            <SearchDefault classes="text-2xl text-inactive"></SearchDefault>
          </button>
          <div className={`before:content-[''] before:bg-background before:h-12 before:w-12 before:absolute before:rounded-full before:-left-8 ml-7 relative flex justify-start group items-center bg-white/10 rounded-e-full px-4 w-[150px] h-12 sm:w-[180px] ${isSearchVisible ? "opacity-100" : "opacity-0"} transition-all`}>
            <input
              className="bg-transparent text-active font-normal pl-4 h-12 w-full outline-none"
              type="text"
              name="search"
              id="search"
              placeholder="Cerca..."
            />
          </div>
        </div>

        <div className="text-inactive flex items-center gap-2 transition duration-300 cursor-pointer hover:text-active">
          <p className="text-md font-semibold">List</p>
          <Menu classes="text-2xl"></Menu>
        </div>
      </div>
    </>
  );
}
