import HeaderActions from "./components/HeaderActions";
import InitialStats from "./components/InitialStats";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="w-full max-w-screen-2xl mx-3 my-3">
        <h1 className="font-bold text-3xl">Financeiro</h1>

        <HeaderActions />

        <InitialStats />
      </div>
    </main>
  )
}
