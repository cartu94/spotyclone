import LibraryCaseRow from "./LibraryCaseRow";
import LibraryTop from "./LibraryTop";
import LibrarySearch from "./LibrarySearch";
import { useState, useEffect } from "react";

export default function LibraryCase() {
  const [libraryCase, setLibraryCase] = useState([]); // inizializzo un array vuoto

  // Recuperiamo il json in locale
  useEffect(() => {
    fetch("data/libraryplaylist.json")
      .then((res) => res.json())
      .then((data) => {
        setLibraryCase(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="overflow-hidden h-full w-[90px] rounded-xl lg:w-[320px] bg-background relative pt-16 lg:pt-28 pb-4">
      <LibraryTop />
      <div className="overflow-y-auto h-full px-2">
        <LibrarySearch />
        <div className="flex flex-col gap-1">
          {libraryCase.map((library) => (
            <LibraryCaseRow
              key={library.id}
              title={library.title}
              description={library.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
