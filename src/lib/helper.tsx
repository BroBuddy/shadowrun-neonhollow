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
                        {parts.map((item: string, index: number) =>
                            rulesRegex.test(item) ? (
                                <Link key={index} to={`/rule/${item}`}>
                                    {item}
                                </Link>
                            ) : (
                                <span key={index}>{item}</span>
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
