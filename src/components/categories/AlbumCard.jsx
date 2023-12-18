/* eslint-disable react/prop-types */

export default function AlbumCard({ title, backgroundColor }) {
  return (
      <div
        className={`p-4 rounded-lg flex justify-start w-full aspect-square cursor-pointer relative overflow-hidden`}
        style={{backgroundColor: backgroundColor}}
      >
        <p className="text-white font-bold text-xl z-20">{title}</p>
        <img
          src={`https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/100/100`}
          className="rounded-sm absolute -bottom-4 -right-4 min-w-[80px] w-[7vw] aspect-square rotate-[30deg] shadow-xl"
          alt="placeholder"
        ></img>
      </div>
  );
}
