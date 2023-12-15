/* eslint-disable react/prop-types */
import Icons from "../components/icons";

export default function PlayButton() {
  return (
    <Icons.Play
      classes={
        `text-background shadow-xl bg-details hover:bg-hover-details hover:scale-110 rounded-full p-2 w-14 h-14 transition-all cursor-pointer`
      }
    />
  );
}
