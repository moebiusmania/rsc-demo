import List from "@/app/components/server/List";

export default function Home() {
  return (
    <main className="container">
      <header>
        <h1>React Server Components demo</h1>
      </header>

      {/* @ts-ignore */}
      <List />
    </main>
  );
}
