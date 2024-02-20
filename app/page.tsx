import List from "./components/List"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="grid grid-cols-2 gap-4 p-4 w-2/3">
        <List title="My Top 5 Movies 🎥" favourites={["Good Will Hunting", "Spiderverse", "Grand Budapest Hotel", "In Bruges", "Puss In Boots"]}/>
        <List title="My Top 5 TV Shows 📺" favourites={[""]} />
        <List title="My Top 5 Artists 🧑‍🎤" favourites={[""]} />
        <List title="My Top 5 Songs 🎵" favourites={[""]} />
      </div>
    </main>
  );
}
