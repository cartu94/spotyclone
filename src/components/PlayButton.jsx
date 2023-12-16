/* eslint-disable react/prop-types */
import { Play } from "./Icons";

export default function PlayButton() {
  return (
    <Play
      classes={
        `text-background shadow-xl bg-details hover:bg-hover-details hover:scale-110 rounded-full p-2 w-full h-full transition-all cursor-pointer`
      }
    />
  );
}
