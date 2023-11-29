export async function getStats() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/finances`)


    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    return data.data
}