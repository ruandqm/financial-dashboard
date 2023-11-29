import data from "@/app/api/data/stats.json"

export async function GET(_req, _res) {
    return Response.json(data)
}