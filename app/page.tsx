import List from "./components/List"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="grid grid-cols-2 gap-4 p-4 w-2/3">
        <List 
          list={
            {
              id: "1",
              title: "My Top 5 Movies 🎥",
              items: ["Good Will Hunting", "Spiderverse", "Grand Budapest Hotel", "In Bruges", "Puss In Boots"]
            }
          }/>
        <List list={{id: '2', title: "My Top 5 TV Shows 📺", items: [""]}} />
        <List list={{id: '3', title: "My Top 5 Artists 🧑‍🎤", items: [""]}} />
        <List list={{id: '4', title: "My Top 5 Songs 🎵", items: [""]}} />
      </div>
    </main>
  );
}
