/* eslint-disable react/prop-types */
import PlayButton from "../PlayButton";
export default function HomeGreetingsCard({ title }) {
  return (
    <div className="flex w-full h-[60px] min-w-[220px] bg-white/10 rounded-lg group transition-all duration-300 cursor-pointer hover:bg-white/20 relative">
      <img
        className="rounded-l-lg"
        src={`https://picsum.photos/seed/${Math.floor(
          Math.random() * 1000
        )}/100`}
        alt="greetings img"
      />
      <div className="flex items-center justify-between m-auto px-2 w-full">
        {/* Andiamo a richiamare il titolo attraverso la prop in alto */}
        <p className="text-active text-sm font-semibold">{title}</p>
        <div className="w-10 h-10 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute right-4">
          <PlayButton />
        </div>
      </div>
    </div>
  );
}
