export default function LibraryCaseRow() {
  return (
    <div className="bg-background w-full lg:w-full flex justify-center lg:justify-start items-center px-0 py-2 lg:px-4 lg:py-3 gap-4 rounded-xl group transition duration-300 cursor-pointer hover:bg-white/20">
      <img
        className="h-12 w-12 rounded-lg lg:h-16 lg:w-16"
        src="https://picsum.photos/100"
        alt=""
      />
      <div className="hidden lg:flex flex-col justify-between gap-1 text-active">
        <p className="text-active">Brani che ti piacciono</p>
        <p className="text-inactive">Playlist - Chill Music</p>
      </div>
    </div>
  );
}
