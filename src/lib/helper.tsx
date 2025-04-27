import parse, { DOMNode, Text } from 'html-react-parser'
import { Link } from 'react-router-dom'

const rulesRegex = /([A-Z]\d{3}[A-Z]?)/g

const makeUrlsClickable = (html: string) => {
    return parse(html, {
        replace: (domNode: DOMNode) => {
            if (domNode.type === 'text') {
                const text = (domNode as Text).data
                const parts = text.split(rulesRegex)

                if (parts.length === 1) return

                return (
                    <>
                        {parts.map((part, i) =>
                            rulesRegex.test(part) ? (
                                <Link key={i} to={`/rule/${part}`}>
                                    {part}
                                </Link>
                            ) : (
                                <span key={i}>{part}</span>
                            )
                        )}
                    </>
                )
            }

            return undefined
        },
    })
}

export { makeUrlsClickable, rulesRegex }
