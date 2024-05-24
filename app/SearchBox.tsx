'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export default function SearchBox({ initialQuery }: { initialQuery: string }) {
    const searchParams = useSearchParams()
    const pathName = usePathname()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('query', term)
        } else {
            params.delete('query')
        }
        replace(`${pathName}?${params.toString()}`)
    }, 100)

    return (
        <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search..."
            defaultValue={initialQuery}
            onChange={(e) => handleSearch(e.target.value)}
        />
    )
}
