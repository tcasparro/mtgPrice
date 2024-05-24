export async function fetchMatches(name: string): Promise<Card[]> {
    if (!name || name.length < 3) {
        return []
    }
    const cleanName = name.replace(/[^a-zA-Z0-9,." ']/g, '')
    const response = await fetch(
        `https://mtgscavenger.com/api/card_values?search=${encodeURIComponent(cleanName)}&key=b3e94f0b9ece`
    )
    return await response.json()
}
