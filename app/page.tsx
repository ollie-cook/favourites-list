import ListGrid from "./components/ListGrid"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center relative">
      <h1 className="text-5xl text-center sm:text-6xl font-bold mt-8">Top Fives 🖐️</h1>
      <ListGrid />
      <p className="absolute bottom-2 left-1/2 -translate-x-1/2" >Built by <a href="https://www.olliecookie.com" className="underline" target="_blank">Ollie Cook</a>&#x1f36a;</p>
    </main>
  );
}
