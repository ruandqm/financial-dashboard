import Tabs from "./Tabs"
import { PlusIcon } from '@heroicons/react/20/solid'

export default function HeaderActions() {
    return (
        <div className="flex justify-between mt-12">
            <button
                type="button"
                className="inline-flex items-center gap-x-2 rounded-md bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 duration-150"
            >
                Filtro
                <PlusIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </button>
            <Tabs />
        </div>
    )
}