/* eslint-disable react/prop-types */
export default function LibraryCaseRow({ title, description }) {
  return (
    <div className="bg-background w-full lg:w-full flex justify-center lg:justify-start items-center p-2 gap-4 rounded-xl group transition duration-300 cursor-pointer hover:bg-white/20">
      <img
        className="h-12 w-12 rounded-lg lg:h-16 lg:w-16"
        src={`https://picsum.photos/seed/${Math.floor(
          Math.random() * 1000
        )}/100`}
        alt=""
      />
      <div className="hidden lg:flex flex-col justify-between gap-1 text-active">
        <p className="text-active">{title}</p>
        <p className="text-inactive">{description}</p>
      </div>
    </div>
  );
}
