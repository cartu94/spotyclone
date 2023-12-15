/* eslint-disable react/jsx-no-undef */
import HomeGreetingsRow from "./HomeGreetingsRow"

export default function HomeGreetings() {
    return <div className="bg-[#170E3A] text-active w-full flex flex-col gap-4 py-4">
        <h1 className="text-4xl pl-4 mb-4 hidden md:block">Buongiorno</h1>
        <div className="flex flex-col md:flex-row gap-4 px-4">
            <HomeGreetingsRow></HomeGreetingsRow>
            <HomeGreetingsRow></HomeGreetingsRow>
            <HomeGreetingsRow></HomeGreetingsRow> 
        </div>
        <div className="flex flex-col md:flex-row gap-4 px-4">
            <HomeGreetingsRow></HomeGreetingsRow>
            <HomeGreetingsRow></HomeGreetingsRow>
            <HomeGreetingsRow></HomeGreetingsRow>
        </div>
    </div>
}