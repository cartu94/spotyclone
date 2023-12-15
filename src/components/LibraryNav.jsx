import Icons from "../components/Icons";

export default function LibraryNav() {
  return (
    <div className="bg-transparent lg:bg-background lg:w-full font-montserrat text-sm font-bold">
      <div className="max-w-fit overflow-hidden lg:overflow-visible lg:flex lg:justify-between lg:items-center lg:max-w-full h-[80px] lg:h-full lg:p-5">
        <button className="group p-5 lg:p-0 bg-background shadow-[0_0_10px_5px_rgba(0,0,0,1)] lg:shadow-[0_0_0_0_rgba(0,0,0,1)] lg:text-inactive lg:flex lg:justify-center lg:items-center lg:gap-2 ">
          <Icons.Library classes="text-inactive text-2xl group-hover:text-active transition-all" />
          <p className="hidden lg:flex group-hover:text-active transition-all">La tua librearia</p>
        </button>
        <div className="hidden lg:flex lg:p-0 lg:gap-3">
          <button>
            <Icons.Plus classes="text-inactive text-2xl hover:text-active transition-all" />
          </button>
          <button>
            <Icons.ArrowRight classes="text-inactive text-2xl hover:text-active transition-all" />
          </button>
        </div>
      </div>
      <div className="hidden bg-background lg:h-full lg:p-5 lg:w-full h-[80px] lg:flex lg:justify-start lg:items-center">
        <button className="hidden lg:inline-flex lg:py-2 lg:px-4 lg:rounded-full lg:bg-background2 lg:text-inactive hover:text-active hover:bg-background3 transition-all">
          Playlist
        </button>
      </div>
    </div>
  );
}
