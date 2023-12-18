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
        <div className="lg:flex gap-6 text-sm hidden">
          <a href="https://github.com/AndreaBianco1996" target="_blank" className="hover:text-active transition-all" rel="noreferrer">Andrea Bianco</a>
          <a href="https://github.com/cartu94" target="_blank" className="hover:text-active transition-all" rel="noreferrer">Luca Carturan</a>
          <a href="https://github.com/yocopk" target="_blank" className="hover:text-active transition-all" rel="noreferrer">Andrea Marchese</a>
          <a href="https://github.com/levo1312" target="_blank" className="hover:text-active transition-all" rel="noreferrer">Ernesto Vinasco</a>
          <a href="https://github.com/davidetagini99" target="_blank" className="hover:text-active transition-all" rel="noreferrer">Davide Tagini</a>
        </div>
          <button className="lg:hidden block">
            <Icons.SimpleArrowUp classes="text-active text-lg"></Icons.SimpleArrowUp>
          </button>
      </div>
    </footer>
  );
}

