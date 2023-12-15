/* eslint-disable react/prop-types */
import PlayButton from "./PlayButton";

export default function Card({ title, description, image }) {
  return (
    <div className="flex flex-col justify-center p-4 bg-white/10 hover:bg-white/20 max-w-[182px] md:max-w-[232px] rounded-lg gap-2 group transition-colors duration-300">
      <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] relative">
        <img
          src={image}
          alt="image"
          className="object-contain object-center rounded-lg shadow-2xl"
        />
        <div className="absolute bottom-4 right-4 opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0 duration-300">
          <PlayButton />
        </div>
      </div>

      <h1 className="font-semibold capitalize text-active">{title}</h1>
      <div className="h-18 w-[150px] md:w-[200px] text-inactive">
        <p className="">{description}</p>
      </div>
      
    </div>
  );
}
