import ListGrid from "./components/ListGrid"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <h1 className="text-6xl font-bold my-4">Top Fives 🖐️</h1>
      <ListGrid />
    </main>
  );
}
