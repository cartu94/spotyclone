/* eslint-disable react/prop-types */
import PlayButton from "../PlayButton";

/**
 * @param {string} title the card title
 * @param {string} description the card description
 * @param {string} image the URL of the card image
*/

export default function Card({ title, description, image }) {
  return (
    <div className="flex flex-col justify-start p-4 bg-white/10 hover:bg-white/20 w-full aspect-1/1.5 rounded-lg gap-2 group transition-colors duration-300 cursor-pointer">
      <div className="w-full aspect-square relative">
        <img
          src={`${image}${Math.floor(Math.random() * 1000)}/700/700`}
          alt="image"
          className="object-cover object-center rounded-md shadow-2xl"
        />
        <div className="absolute bottom-4 right-4 opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0 duration-300 h-14 w-14">
          <PlayButton />
        </div>
      </div>

      <h1 className="font-semibold capitalize text-active text-lg">{title}</h1>
      <div className="h-12 w-full overflow-hidden text-ellipsis text-inactive">
        {description}
      </div>
    </div>
  );
}
