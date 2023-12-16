import Icons from "../components/Icons";

export default function Footer() {
  return (
    <footer className="text-inactive font-semibold px-5 py-6 absolute bottom-0 left-0 w-full">
      <div className="flex items-center justify-between m-auto">
        <button className="flex items-center justify-between gap-2">
          <div className="h-7 w-7">
          <img src="src\assets\img\spotyclone.png" alt="Spotyclone Logo" />
          </div>
          <p className="text-lg text-[#14badf]">Spotyclone</p>
          <p className="text-xs">© 2023</p>
        </button>
        <div className="md:flex gap-6 text-sm hidden">
          <a href="" className="hover:text-active transition-all">Legal</a>
          <a href="" className="hover:text-active transition-all">Privacy Center</a>
          <a href="" className="hover:text-active transition-all">Privacy Policy</a>
          <a href="" className="hover:text-active transition-all">Cookies</a>
        </div>
          <button className="md:hidden block">
            <Icons.SimpleArrowUp classes="text-active text-lg"></Icons.SimpleArrowUp>
          </button>
      </div>
    </footer>
  );
}

