import PlayButton from "./PlayButton";
export default function HomeGreetingsRow() {
  return (
    <div className="flex w-full bg-white/10 rounded-lg group transition duration-300 cursor-pointer hover:bg-white/20">
      <img className="rounded-l-lg" src="https://picsum.photos/100" alt="" />
      <div className="flex items-center justify-between m-auto px-5 w-full">
        <p className="text-active">Brani che ti piacciono</p>
        <div className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-all">
          <PlayButton />
        </div>
      </div>
    </div>
  );
}
          
