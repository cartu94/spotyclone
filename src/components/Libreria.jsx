/*eslint-disable react/prop-types */
import ElementLibreria from "./ElementLibreria"


export default function Libreria() {
    
    return( <div >
        {/*sezione statica*/}
        <div class="w-1/4 bg-stone-900 shadow-2xl">
            {/*icone parte superiore*/}
            {/*icona libreria*/}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 ml-2 ">
                <path fill-rule="evenodd" d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
            </svg>

            {/*icona icona +*/}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 ml-52 -mt-8 ">
                <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
            </svg>

            {/*icona della freccia*/}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 ml-60 -mt-8 ">
                <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>



            <div class="text-2xl ml-12 -mt-8 w-40 "><h2>La tua libreria </h2></div>
            <button class="text-m p-2 border-none rounded ml-2 hover:bg-black">Artisti</button>
            <button class="text-m p-2 border-none rounded m-4 hover:bg-black">Album</button>
            <button class="text-m p-2 border-none rounded hover:bg-black">PlayList</button>
            

        </div>
        {/*sezione dinamica della libreria*/}
        <div className="w-1/4 bg-stone-900 overflow-y-auto h-72 overscroll-contain">
            <input class="ml-2 border rounded" type="text" placeholder="cerca nella libreria" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-52 -mt-6">
                <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
            </svg>

            <ElementLibreria />
            <ElementLibreria />
            <ElementLibreria />
            <ElementLibreria />
            <ElementLibreria />
            <ElementLibreria />
            <ElementLibreria />
            <ElementLibreria />
            <ElementLibreria />
            <ElementLibreria />
            <ElementLibreria />
            <ElementLibreria />

        </div>

    </div>)
    
}