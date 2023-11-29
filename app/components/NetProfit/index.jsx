import { ArrowUpIcon, ArrowRightIcon } from "@heroicons/react/20/solid"
import Chart from "./Chart"
import Toggle from "./Toggle"

export default function NetProfit() {
    return (
        <section className="flex w-1/2 flex-col h-fit justify-around relative rounded-lg bg-white mt-5 pt-5 shadow sm:pt-6">
            <h2 className="text-lg font-semibold absolute top-5 left-5 text-start">Lucro Líquido</h2>

            <div className="flex justify-between items-center my-4 px-5">
                <div className="flex flex-col mt-5">
                    <div className="flex items-baseline">
                        <p className="text-2xl text-green-500 font-bold">R$ 1020,00</p>
                        <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                        <p className="text-green-500 text-sm">30,2%</p>
                    </div>
                    <p className="text-sm font-medium text-gray-500">A mais neste período</p>
                </div>

                <Chart />
            </div>

            <div className="border-t border-gray-200 p-3 flex justify-between">
                <div className="flex gap-2">
                    <Toggle />
                    <p className="text-sm font-medium text-gray-500">Incluir valores adicionais</p>
                </div>

                <div className="flex gap-2">
                    <p className="text-sm font-medium text-gray-700">Ver Detalhes</p>
                    <ArrowRightIcon className="h-5 w-5 flex-shrink-0 self-center text-gray-700" aria-hidden="true" />
                </div>

            </div>


        </section>
    )
}