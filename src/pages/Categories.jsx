import SfogliaTutto from "../components/SfogliaTutto";
import AlbumCards from "../components/AlbumCards";
import Navbar from "../components/NavBar";

export default function Categories() {
  const albumsData = [
    { id: 1, title: 'Musica', },
    { id: 2, title: 'Podcast', },
    { id: 3, title: 'Eventi dal vivo', },
    { id: 4, title: 'Create per te', },
    { id: 5, title: 'Nuove uscite', },
    { id: 6, title: 'Il 2023 in musica', },
    { id: 7, title: 'Il 2023 in podcast', },
    { id: 8, title: 'Merch', },
    { id: 9, title: 'Estate', },
    { id: 10, title: 'Pop', },
    { id: 11, title: 'Buone feste', },
    { id: 12, title: 'Hip Hop', },
    { id: 13, title: 'Classifiche podcast', },
    { id: 14, title: 'Nuove uscite nei podcast', },
  ];

  const backgroundColors1 = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'yellow', 'lime', 'lightblue']; 

  return (
    <div className='flex flex-col h-full overflow-hidden'>
      <Navbar />
      <div className="flex-col flex overflow-y-auto overflow-x-hidden">
        <SfogliaTutto />
        <div className='flex p-5 gap-5 flex-col flex-wrap md:flex-row'>
          {albumsData.map((album, index) => (
            <AlbumCards
              key={album.id}
              title={album.title}
              backgroundColor={backgroundColors1[index % backgroundColors1.length]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}