import Dice from '@/components/Dice'
import InRow from '@/components/InRow'

const getIcon = (range: string) => {
    if (range.includes('2-5')) return '🔴'
    if (range.includes('6-8')) return '🟠'
    if (range.includes('9-11')) return '🟡'
    if (range.includes('12-14')) return '🟢'
    if (range.includes('15-17')) return '🔵'
    if (range.includes('18+')) return '🟣'
    return '⚪'
}

const scrollToBottom = () => {
    setTimeout(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        })
    }, 0)
}

const formatValue = (value: number): string => {
    const prefix = value < 0 ? '' : '+'
    return `${prefix}${value}`
}

const rollDice = (dice = 1): number => {
    const min = dice === 1 ? 1 : 2
    const max = dice === 1 ? 6 : 11

    return Math.floor(Math.random() * (max - min + 1)) + min
}

const renderRoll2d6 = (text: string) => {
    if (!text.includes('Roll 2d6')) return text

    const [beforeDice, afterDice] = text.split('Roll 2d6')

    return (
        <InRow>
            {beforeDice && <span>{beforeDice}</span>}
            <span>Roll</span>
            <Dice dice={2} />
            {afterDice && <span>{afterDice}</span>}
        </InRow>
    )
}

export { getIcon, renderRoll2d6, formatValue, rollDice, scrollToBottom }
