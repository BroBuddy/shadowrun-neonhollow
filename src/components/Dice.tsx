import { useEffect, useRef, useState } from 'react'

type DiceProps = {
    dice?: number
}

const Dice = ({ dice = 1 }: DiceProps) => {
    const defaultDice: string = '🎲'
    const [content, setContent] = useState<string>(defaultDice)
    const [isRolling, setIsRolling] = useState<boolean>(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const min = dice === 1 ? 1 : 2
    const max = dice === 1 ? 6 : 11

    const rollDice = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const handleDiceClick = () => {
        if (isRolling) return

        setIsRolling(true)
        setContent(defaultDice)

        timeoutRef.current = setTimeout(() => {
            const number = rollDice(min, max)
            setContent(number.toString())
            setIsRolling(false)

            timeoutRef.current = setTimeout(() => {
                resetDice()
            }, 1000)
        }, 300)
    }

    const resetDice = () => {
        setContent(defaultDice)
        setIsRolling(false)
        clearTimeRef()
    }

    const clearTimeRef = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        return () => {
            clearTimeRef()
        }
    }, [])

    return (
        <div
            className={`dice z-20 cursor-pointer ${isRolling ? 'active-dice' : ''}`}
            onClick={!isRolling ? handleDiceClick : undefined}
        >
            {content}
        </div>
    )
}

export default Dice
