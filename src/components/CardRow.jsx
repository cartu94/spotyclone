/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import Card from "./Card";

export default function CardRow({ title }) {
  const ref = useRef(null);
  const [screenWidth, setScreenWidth] = useState(0);
  const [divWidth, setDivWidth] = useState(0);
  const [itemsNum, setItemsNum] = useState(1);

  useEffect(() => {
    // when the component gets mounted
    setScreenWidth(ref.current.offsetWidth);
    // to handle page resize
    const getWidth = () => {
      setScreenWidth(ref.current.offsetWidth);
    };
    window.addEventListener("resize", getWidth);
    // remove the event listener before the component gets unmounted
    return () => window.removeEventListener("resize", getWidth);
  }, []);

  useEffect(() => {
    if (screenWidth >= 732) {
      setItemsNum(Math.floor(screenWidth / 240));
    } else {
      setItemsNum(Math.floor(screenWidth / 182));
    }
  }, [screenWidth]);

  useEffect(() => {
    console.log("itemsNum", itemsNum, "screenWidth", screenWidth);
    if (screenWidth >= 732) {
      setDivWidth(itemsNum * 240);
    } else {
      setDivWidth(itemsNum * 182);
    }
  }, [itemsNum, screenWidth]);

  return (
    <div className={`w-[${divWidth}] flex flex-col gap-4 p-4 border-2 `}>
      <div className="flex flex-col justify-between items-start sm:items-center sm:flex-row">
        <h1 className="text-active font-bold text-2xl hover:underline cursor-pointer">
          {title}
        </h1>
        <h3 className="text-inactive font-semibold text-md hover:underline cursor-pointer">
          Mostra altro
        </h3>
      </div>

      <div ref={ref} className="w-full flex justify-center items-center gap-4">
        {Array.from({ length: itemsNum }).map((_, i) => (
          <Card
            key={i}
            title={`Daily Mix ${i + 1}`}
            description={`I DONT KNOW HOW BUT THEY FOUND ME, The Happy Fits, NOTD e altro`}
            image={`https://picsum.photos/200`}
          />
        ))}
      </div>
    </div>
  );
}
