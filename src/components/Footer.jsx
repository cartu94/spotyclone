export default function Footer() {
    return (
            <footer className="h-20 text-white py-4 px-4 absolute bottom-0 left-0 w-full flex ">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row items-center justify-between">
        <div className="flex items-center">
          
          <img
            src="src\assets\img\spotyclone.png"
            alt="Spotyclone Logo"
            className="h-10"
          />
          <p className="text-sm"><span className="text-hover-details font-bold text-xl px-2">Spotyclone</span> © 2023</p>
        </div>
        <div className="flex items-center space-x-8">
          <a href="#" className="text-sm hover:text-gray-300 transition duration-300">
            Legal
          </a>
          <a href="#" className="text-sm hover:text-gray-300 transition duration-300">
            Privacy Center
          </a>
          <a href="#" className="text-sm hover:text-gray-300 transition duration-300">
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:text-gray-300 transition duration-300">
            Cookies
          </a>
        </div>
      </div>
    </footer>
    )
}