export default function LibraryCaseRow() {
  return (
    <div className="bg-background w-[90px] md:w-full flex justify-center items-center p-2 rounded-md group transition duration-300 cursor-pointer hover:bg-white/20">
      <img
        className="h-12 w-12 rounded-md md:h-20 md:w-20"
        src="https://picsum.photos/100"
        alt=""
      />
      <div className="hidden lg:flex flex-col justify-center p-4 gap-2 text-active">
        <p className="text-active">Brani che ti piacciono</p>
        <p className="text-inactive">Playlist - Chill Music</p>
      </div>
    </div>
  );
}
