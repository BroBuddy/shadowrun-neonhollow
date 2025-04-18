export const makeUrlsClickable = (content: any) => {
    if (!content) return

    const rulesRegex = /[ER]\d{3}[A-Z]?/g
    const transformedText = content.replace(
        rulesRegex,
        '<strong class="text-gray-500">$&</strong>'
    )

    return transformedText
}
