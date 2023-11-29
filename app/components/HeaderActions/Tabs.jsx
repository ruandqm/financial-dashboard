const tabs = [
    { name: 'Hoje', href: '#', current: true },
    { name: 'Ontem', href: '#', current: false },
    { name: '7 dias', href: '#', current: false },
    { name: 'Este mês', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    defaultValue={tabs.find((tab) => tab.current).name}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <nav className="flex space-x-4" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <a
                            key={tab.name}
                            href={tab.href}
                            className={classNames(
                                tab.current ? 'bg-blue-500 text-white' : 'text-gray-500 hover:text-gray-700',
                                'rounded-md p-2 text-sm font-medium uppercase'
                            )}
                            aria-current={tab.current ? 'page' : undefined}
                        >
                            {tab.name}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    )
}
