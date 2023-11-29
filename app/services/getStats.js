export async function getStats() {
    const res = await fetch(`${process.env.url}/api/finances`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    return data.data
}