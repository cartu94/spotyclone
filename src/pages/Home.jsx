import NavBar from "../components/NavBar";
import HomeGreetings from "../components/HomeGreetings";
import CardRow from "../components/CardRow";

export default function Home() {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <NavBar />
      <div className="flex-col flex overflow-y-auto overflow-x-hidden">
      <HomeGreetings />
      <CardRow title={"Scelti per te"}/>
      <CardRow title={"Playlist"}/>
      <CardRow title={"Podcast"}/>
      </div>
    </div>
  )
}