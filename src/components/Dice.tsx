import { useRef, useState } from 'react'

const min = 1
const max = 6

const Dice = () => {
    const [content, setContent] = useState<string>('🎲')
    const [isRolling, setIsRolling] = useState<boolean>(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleDiceClick = () => {
        if (isRolling) return

        runningDice()

        timeoutRef.current = setTimeout(() => {
            const number = Math.floor(Math.random() * max) + min
            setContent(number.toString())
            setIsRolling(false)

            if (timeoutRef.current) clearTimeout(timeoutRef.current)

            timeoutRef.current = setTimeout(() => {
                resetDice()
            }, 1000)
        }, 500)
    }

    const runningDice = () => {
        setIsRolling(true)
    }

    const resetDice = () => {
        setIsRolling(false)
        setContent('🎲')
    }

    return (
        <div
            className={`z-30 dice ${isRolling ? 'active-dice' : ''}`}
            onClick={handleDiceClick}
        >
            {content}
        </div>
    )
}

export default Dice
