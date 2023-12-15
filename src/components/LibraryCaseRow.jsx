export default function LibraryCaseRow() {
    return (
        <div className="bg-background w-full flex p-2 rounded-md group transition duration-300 cursor-pointer hover:bg-white/20">
            <img className="rounded-md" src="https://picsum.photos/100" alt="" />
            <div className="flex flex-col justify-center p-4 gap-2 text-active">
                <p className="text-active">Brani che ti piacciono</p>
                <p className="text-inactive">Playlist - Chill Music</p>
            </div>
        </div>
    )
}