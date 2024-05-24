import { fetchMatches } from '@/src/actions/fetchMatches'
import TableRow from '@/app/TableRow'

export default async function Table({ query }: { query: string }) {
    const data = await fetchMatches(query)

    return (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            {data.map((item) => (
                <div key={item.card_id} className="">
                    <TableRow item={item} />
                </div>
            ))}
        </div>
    )
}
