/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import Card from "./Card";

/**
 * 
 * @param {string} title il titolo della riga di card
 */
export default function CardRow({ title }) {
  const ref = useRef(null);
  const [screenWidth, setScreenWidth] = useState(0);
  const [itemsNum, setItemsNum] = useState(1);
  const [playlists, setPlaylists] = useState([]);

  // console.log("isPlaylistsNotEmpty",playlists.length > 0)

  useEffect(() => {
    fetch("data/playlists.json")
      .then((res) => res.json())
      .then((data) => {
        setPlaylists([...data])
      }).catch((err) => {
        console.error(err);
      });
      // console.log("testPlaylists",playlists)
  }, []);

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

  return (
    <div className={`flex flex-col gap-4 p-4`}>
      <div className="flex flex-col justify-center sm:justify-between items-start sm:items-center sm:flex-row">
        <h1 className="text-active font-bold text-2xl hover:underline cursor-pointer">
          {title}
        </h1>
        <h3 className="text-inactive font-semibold text-md hover:underline cursor-pointer">
          Mostra altro
        </h3>
      </div>

      <div ref={ref} className="w-full flex justify-center sm:justify-between items-center gap-4">
      {playlists.length>0 &&  Array.from({ length: itemsNum }).map((_, i) => (
          <Card
            key={i}
            title={playlists[i].title}
            description={playlists[i].description}
            image={playlists[i].image}
          />
        ))}
      </div>
    </div>
  );
}
