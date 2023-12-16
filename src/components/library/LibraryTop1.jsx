import { Library, Plus, ArrowRight } from "../Icons";
export default function LibraryTop1() {
  return (
    <>
      <div className="flex justify-center lg:justify-between p-4 group h-16">
        <div className="text-inactive flex gap-2 items-center transition duration-300 cursor-pointer group-hover:text-active">
          <Library classes="text-2xl" />
          <p className=" hidden lg:block text-lg font-bold">La tua libreria</p>
        </div>

        <div className="hidden text-inactive lg:flex gap-4 items-center">
          <Plus classes="text-2xl transition duration-300 cursor-pointer hover:text-active" />
          <ArrowRight classes="text-2xl transition duration-300 cursor-pointer hover:text-active" />
        </div>
      </div>
    </>
  );
}
