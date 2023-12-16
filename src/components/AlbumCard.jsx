/* eslint-disable react/prop-types */

export default function AlbumCard({ title, backgroundColor }) {
  return (
      <div
        className={`p-2 rounded-lg flex justify-start group h-[200px] w-[200px] relative overflow-hidden`}
        style={{backgroundColor: backgroundColor}}
      >
        <p className="text-white font-bold text-xl">{title}</p>
        <img
          src={`https://picsum.photos/seed/${Math.floor(Math.random() * 1000)}/200/200`}
          className="rounded-sm absolute -bottom-2 -right-4 h-[100px] w-[100px] rotate-[30deg] shadow-xl"
          alt="placeholder"
        ></img>
      </div>
  );
}
