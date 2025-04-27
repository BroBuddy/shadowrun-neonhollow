export const getIcon = (range: string) => {
    if (range.includes('2-5')) return '🔴'
    if (range.includes('6-8')) return '🔴'
    if (range.includes('9-11')) return '🟡'
    if (range.includes('12-14')) return '🟡'
    if (range.includes('15-17')) return '🟢'
    if (range.includes('18+')) return '🟢'
    return '⚪'
}
