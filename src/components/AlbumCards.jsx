import React from 'react';

export default function AlbumCards({ title, backgroundColor }) {
    //console.log(backgroundColor);
    return (
        <div
            className={`p-5 w-full sm:w-48 md:w-72 lg:w-96 xl:w-96 rounded-md`} // non riesco a sistemare la card per gli ipad
            style={{ backgroundColor: backgroundColor }}
        >
            <p className='text-white font-bold text-base'>{title}</p>
            <img src='https://picsum.photos/200' className='h-36 object-cover' alt='Immagine categoria, non la trovo su google'></img>
        </div>
    );
};
