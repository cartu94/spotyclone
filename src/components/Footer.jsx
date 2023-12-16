import Icons from "../components/Icons";

export default function Footer() {
  return (
    // <footer className="h-20 text-white p-5 absolute bottom-0 left-0 w-full font-semibold md:flex md:items-center md:justify-between">
    //   <div className="mx-auto flex flex-col gap-4 md:flex-row md:justify-between md:items-center items-center justify-between">
    //     <div className="flex items-center justify-between">
    //       <img
    //         src="src\assets\img\spotyclone.png"
    //         alt="Spotyclone Logo"
    //         className="h-7"
    //       />
    //       <p className="text-xs">
    //         <span className="text-hover-details font-bold text-lg px-2">
    //           Spotyclone
    //         </span>{" "}
    //         © 2023
    //       </p>
    //     </div>
    //     <div className="flex items-center space-x-8">
    //       <a
    //         href="#"
    //         className="text-sm hover:text-gray-300 transition duration-300"
    //       >
    //         Legal
    //       </a>
    //       <a
    //         href="#"
    //         className="text-sm hover:text-gray-300 transition duration-300"
    //       >
    //         Privacy Center
    //       </a>
    //       <a
    //         href="#"
    //         className="text-sm hover:text-gray-300 transition duration-300"
    //       >
    //         Privacy Policy
    //       </a>
    //       <a
    //         href="#"
    //         className="text-sm hover:text-gray-300 transition duration-300"
    //       >
    //         Cookies
    //       </a>
    //     </div>
    //   </div>
    // </footer>
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

