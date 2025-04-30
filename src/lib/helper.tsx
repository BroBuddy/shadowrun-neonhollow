import Dice from '@/components/Dice'
import InRow from '@/components/InRow'
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

const renderRoll2d6 = (text: string) => {
    if (!text.includes('Roll 2d6')) return text

    const [beforeDice, afterDice] = text.split('Roll 2d6')

    return (
        <InRow>
            {beforeDice && <span>{beforeDice}</span>}
            <span>Roll:</span>
            <Dice dice={2} />
            {afterDice && <span>{afterDice}</span>}
        </InRow>
    )
}

export { renderRoll2d6, makeUrlsClickable, rulesRegex }
