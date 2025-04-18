const rulesRegex = /[A-Z]\d{3}[A-Z]?/g

const makeUrlsClickable = (content: any) => {
    if (!content) return

    const transformedText = content.replace(
        rulesRegex,
        '<strong class="tag">$&</strong>'
    )

    return transformedText
}

export { makeUrlsClickable, rulesRegex }
