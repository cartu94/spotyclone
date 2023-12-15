import Icons from "./Icons";
import LibraryCaseRow from "./LibraryCaseRow";
import { useState } from "react";

export default function LibraryCase() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  function toggleSearchBox() {
    setIsSearchVisible(!isSearchVisible);
  }

  return (
    <div className="overflow-hidden">
      <div className="flex justify-between p-4 group">
        <div className="text-inactive flex gap-4 items-center transition duration-300 cursor-pointer group-hover:text-active">
          <Icons.Library classes="text-2xl"></Icons.Library>
          <p className="text-xl">La tua libreria</p>
        </div>

        <div className="text-inactive flex gap-4 items-center">
          <Icons.Plus classes="text-2xl transition duration-300 cursor-pointer hover:text-active"></Icons.Plus>
          <Icons.ArrowRight classes="text-2xl transition duration-300 cursor-pointer hover:text-active"></Icons.ArrowRight>
        </div>
      </div>
      <div className="flex gap-2 px-2">
        <div className="group">
          <p className="text-active bg-background p-2 rounded-xl transition duration-300 cursor-pointer group-hover:bg-white/20">
            Playlist
          </p>
        </div>
        <div className="group">
          <p className="text-active bg-background p-2 rounded-2xl transition duration-300 cursor-pointer group-hover:bg-white/20">
            Artist
          </p>
        </div>
      </div>

      <div className="flex justify-between p-4">
        <div className="flex items-center h-12">
          <button
            className="cursor-pointer mr-1 transition duration-300 hover:text-active hover:bg-white/20 rounded-full p-2"
            onClick={toggleSearchBox}
          >
            <Icons.SearchDefault classes="text-2xl text-inactive"></Icons.SearchDefault>
          </button>
          {isSearchVisible && (
            <div className="flex justify-start group items-center gap-2 bg-[#242424] rounded-full px-4 w-[180px]  h-12 md:w-[250px] sm:w-[300px] border-2 border-transparent group-focus-within:border-active">
              <input
                className="bg-transparent text-active font-normal h-12 w-full outline-none"
                type="text"
                name="search"
                id="search"
                placeholder="Cerca..."
              />
            </div>
          )}
        </div>

        <div className="text-inactive flex items-center gap-2 transition duration-300 cursor-pointer hover:text-active">
          <p className="text-xl">List</p>
          <Icons.Menu classes="text-2xl"></Icons.Menu>
        </div>
      </div>

      <div className="p-2 flex flex-col gap-2 overflow-y-auto max-h-screen">
        <LibraryCaseRow></LibraryCaseRow>
        <LibraryCaseRow></LibraryCaseRow>
        <LibraryCaseRow></LibraryCaseRow>
        <LibraryCaseRow></LibraryCaseRow>
        <LibraryCaseRow></LibraryCaseRow>
        <LibraryCaseRow></LibraryCaseRow>
        <LibraryCaseRow></LibraryCaseRow>
        <LibraryCaseRow></LibraryCaseRow>
        <LibraryCaseRow></LibraryCaseRow>
        <LibraryCaseRow></LibraryCaseRow>
        <LibraryCaseRow></LibraryCaseRow>
        <LibraryCaseRow></LibraryCaseRow>
      </div>
    </div>
  );
}
