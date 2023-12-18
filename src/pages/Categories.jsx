import AlbumCard from "../components/categories/AlbumCard";
import Navbar from "../components/NavBar";

export default function Categories() {
  const albumsData = [
    { id: 1, title: "Musica" },
    { id: 2, title: "Podcast" },
    { id: 3, title: "Eventi dal vivo" },
    { id: 4, title: "Create per te" },
    { id: 5, title: "Nuove uscite" },
    { id: 6, title: "Il 2023 in musica" },
    { id: 7, title: "Il 2023 in podcast" },
    { id: 8, title: "Merch" },
    { id: 9, title: "Estate" },
    { id: 10, title: "Pop" },
    { id: 11, title: "Buone feste" },
    { id: 12, title: "Hip Hop" },
    { id: 13, title: "Classifiche podcast" },
    { id: 14, title: "Nuove uscite nei podcast" },
  ];

  const backgroundColors = [
    "#E02689",
    "#006351",
    "#8329e2",
    "#193462",
    "#be5d17",
    "#ed2159",
    "#1a846b",
    "#008821",
    "#8f1d31",
    "#607f1f",
    "#0078e8",
  ];

  return (
    <div className="pt-16 flex flex-col h-full relative">
      <Navbar />
      <div className="flex-col flex overflow-y-auto px-5 w-full">
        <h1 className="text-active font-bold text-start text-2xl bg-gradient-to-b py-6">
          Sfoglia tutto
        </h1>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {albumsData.map((album) => (
            <AlbumCard
              key={album.id}
              title={album.title}
              backgroundColor={
                backgroundColors[
                  Math.floor(Math.random() * backgroundColors.length)
                ]
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
