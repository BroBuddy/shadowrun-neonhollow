const HighlightKeywords = new Set([
    '¥',
    'Health',
    'Energy',
    'Heat',
    'Reputation',
    'Intel',
])

export const HighlightClass = (resource: string) => {
    return [...HighlightKeywords].some((keyword) => resource.includes(keyword))
        ? 'v-1 cursor-pointer'
        : ''
}
