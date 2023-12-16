import LibraryCaseRow from "./LibraryCaseRow";
import LibraryTop from "./LibraryTop";
import LibrarySearch from "./LibrarySearch";

export default function LibraryCase() {
  return (
    <div className="overflow-hidden h-full w-[90px] rounded-xl lg:w-[320px] bg-background relative pt-16 lg:pt-28 pb-4">
      <LibraryTop />
      <div className="overflow-y-auto h-full px-2">
        <LibrarySearch />
        <div className="flex flex-col gap-1">
          {Array.from({ length: 15 }).map((_, i) => (
            <LibraryCaseRow key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
