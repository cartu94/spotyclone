import HomeGreetingsCard from "./HomeGreetingsCard";
import { useEffect, useState } from "react";

export default function HomeGreetings() {
  const [greetings, setGreetings] = useState("Buongiorno"); // stringa "Buongiorno" con useState, in modo che possa ascoltare i cambiamenti
  const [greetingsData, setGreetingsData] = useState([]); // inizializzo un array vuoto

  // Recuperiamo il json in locale
  useEffect(() => {
    fetch("data/homegreetings.json")
      .then((res) => res.json())
      .then((data) => {
        setGreetingsData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // Diamo alla stringa "Buongiorno" una dinamicità in base all'orario reale.
  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date().getHours();
      console.log("ore:", date);
      if (date > 6 && date <= 12) {
        setGreetings("Buongiorno");
      } else if (date > 12 && date <= 18) {
        setGreetings("Buon pomeriggio");
      } else if (date > 18 && date <= 22) {
        setGreetings("Buona sera");
      } else {
        setGreetings("Buona notte");
      }
    }, 60000);

    return () => clearTimeout(interval);
  }, []);

  return (
    <div className="bg-gradient-to-b from-cyan-950 to-background text-active w-full flex flex-col px-4 py-2">
      <h1 className="text-4xl mb-8 font-bold">{greetings}</h1>
      <div className="grid gap-2 grid-cols-my-2 md:grid-cols-my-3">
        {/* Iteriamo il titolo in modo che prenda ogni volta i dati del titolo direttamente dal json */}
        {greetingsData.map((greeting) => (
          <HomeGreetingsCard key={greeting.id} title={greeting.title} />
        ))}
      </div>
    </div>
  );
}
