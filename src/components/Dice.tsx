import { useRef, useState } from 'react'

type DiceProps = {
    dice?: number
}

const Dice = ({ dice }: DiceProps) => {
    const defaultDice: string = '🎲'
    const [content, setContent] = useState<string>(defaultDice)
    const [isRolling, setIsRolling] = useState<boolean>(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const min = dice === 1 ? 1 : 2
    const max = dice === 1 ? 6 : 11

    const handleDiceClick = () => {
        if (isRolling) return
        runningDice()

        timeoutRef.current = setTimeout(() => {
            const number = Math.floor(Math.random() * max) + min
            setContent(number.toString())
            setIsRolling(false)

            timeoutRef.current = setTimeout(() => {
                resetDice()
            }, 1500)
        }, 300)
    }

    const runningDice = () => {
        setContent(defaultDice)
        setIsRolling(true)
    }

    const resetDice = () => {
        setContent(defaultDice)
        setIsRolling(false)

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    return (
        <div
            className={`dice z-30 cursor-pointer ${isRolling ? 'active-dice' : ''}`}
            onClick={!isRolling ? handleDiceClick : undefined}
        >
            {content}
        </div>
    )
}

export default Dice
