import Chart from "./Chart";

export default function FinancialChart() {
    return (
        <section className="flex flex-col w-full md:flex-row justify-around relative overflow-hidden rounded-lg bg-white mt-5 px-4 pt-5 shadow sm:px-6 sm:pt-6">

            <h2 className="text-lg font-semibold absolute top-5 left-5 text-start">Resumo Financeiro</h2>

            <Chart />

            <article className="flex flex-col justify-center items-center text-center mb-3">
                <p className="text-lg font-semibold text-gray-900">R$ 200.000,00</p>

                <p className="text-sm font-medium text-gray-500">Receita Bruta</p>

                <p className="text-lg font-semibold text-gray-900 mt-2">R$ 250.000,00</p>

                <p className="text-sm font-medium text-gray-500">Receita Total pelas datas de aprovação do pedido</p>
            </article>
        </section>
    )
}