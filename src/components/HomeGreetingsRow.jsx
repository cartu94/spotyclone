import Icons from "./Icons"
export default function HomeGreetingsRow() {
    return (
        <div className="flex flex-row items-center gap-4 w-full bg-[#27223F] rounded-md group transition duration-300 cursor-pointer hover:bg-white/20">
        <img className="rounded-l-lg" src="https://picsum.photos/100" alt="" />
        <p className="text-active">Brani che ti piacciono</p>
        <div className="flex items-center justify-end transition duration-300 opacity-0 lg:group-hover:opacity-100">
            <span className="text-white"><Icons.Play classes="bg-hover-details w-10 h-10 rounded-full"/></span>
        </div>
    </div>
)
}