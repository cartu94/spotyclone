import NavBar from "../components/NavBar";
import HomeGreetings from "../components/home_greetings/HomeGreetings";
import CardRow from "../components/CardRow";

export default function Home() {
  return (
    <div className="pt-16 flex flex-col h-full overflow-hidden scrollbar-hide relative">
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