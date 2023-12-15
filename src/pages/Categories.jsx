import SfogliaTutto from "../components/SfogliaTutto";
import AlbumCards from "../components/AlbumCards";

export default function Categories() {
  const albumsData1 = [ // a json be like
    { id: 1, title: 'Musica', },
    { id: 2, title: 'Podcast', },
    { id: 3, title: 'Eventi dal vivo', },
    { id: 4, title: 'Create per te', },
    { id: 5, title: 'Nuove uscite', },
    { id: 6, title: 'Il 2023 in musica', },
    { id: 7, title: 'Il 2023 in podcast', },
  ];

  const albumsData2 = [
    { id: 8, title: 'Merch', },
    { id: 9, title: 'Estate', },
    { id: 10, title: 'Pop', },
    { id: 11, title: 'Buone feste', },
    { id: 12, title: 'Hip Hop', },
    { id: 13, title: 'Classifiche podcast', },
    { id: 14, title: 'Nuove uscite nei podcast', },
  ];

  const backgroundColors1 = ['red', 'blue', 'green', 'orange', 'purple', 'pink', 'yellow']; // per esempio, possiamo scegliere questi colori, passandoli come prop nel componente AlbumCards e ciclandoli nel map, dopo averli assegnati a una classe css per dargli il colore
  const backgroundColors2 = ['lime', 'lightblue']; 

  return (
    <div className='bg-gray-800 min-h-screen p-5'>
      <SfogliaTutto />
      <div className='flex p-5 gap-5 flex-col flex-wrap md:flex-row md:bg-red-500'>
        {albumsData1.map((album, index) => (
          <AlbumCards
            key={album.id}
            title={album.title}
            backgroundColor={backgroundColors1[index % backgroundColors1.length]}
          />
        ))}
      </div>
      <div className='flex p-5 gap-5 flex-col flex-wrap md:flex-row'>
        {albumsData2.map((album, index) => (
          <AlbumCards
            key={album.id}
            title={album.title}
            backgroundColor={backgroundColors2[index % backgroundColors2.length]}
          />
        ))}
      </div>
    </div>
  );
}