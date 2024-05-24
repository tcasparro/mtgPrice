import Image from 'next/image'
import SearchBox from '@/app/SearchBox'
import Table from '@/app/Table'
import { useSearchParams } from 'next/navigation'

export default function Home({
    searchParams,
}: {
    searchParams: { query: string }
}) {
    const query = searchParams?.query ?? ''

    return (
        <main className="flex min-h-screen flex-col items-center pt-4 dark dark:bg-gray-800">
            <div className="flex w-full px-4">
                <SearchBox initialQuery={query} />
            </div>

            <Table query={query} />
        </main>
    )
}
