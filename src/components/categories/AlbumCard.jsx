/* eslint-disable react/prop-types */

export default function AlbumCard({ title, backgroundColor }) {
  return (
      <div
        className={`p-4 rounded-lg flex justify-start min-h-[150px] min-w-[150px] h-[12vw] w-[12vw] cursor-pointer relative overflow-hidden`}
        style={{backgroundColor: backgroundColor}}
      >
        <p className="text-white font-bold text-xl">{title}</p>
        <img
          src={`https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/100/100`}
          className="rounded-sm absolute -bottom-4 -right-4 min-h-[80px] min-w-[80px] h-[7vw] w-[7vw] rotate-[30deg] shadow-xl"
          alt="placeholder"
        ></img>
      </div>
  );
}
