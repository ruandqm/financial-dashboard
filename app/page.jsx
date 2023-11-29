import FinancialChart from "./components/FinancialChart";
import HeaderActions from "./components/HeaderActions";
import InitialStats from "./components/InitialStats";
import NetProfit from "./components/NetProfit";
import { getStats } from "./services/getStats";

export default async function Home() {

  const data = await getStats()

  return (
    <main className="flex justify-center">
      <div className="w-full max-w-screen-2xl mx-3 my-3">
        <h1 className="font-bold text-3xl">Financeiro</h1>

        <HeaderActions />

        <InitialStats data={data} />

        <div className="flex flex-col lg:flex-row gap-5">
          <FinancialChart />

          <NetProfit />
        </div>

      </div>
    </main>
  )
}
