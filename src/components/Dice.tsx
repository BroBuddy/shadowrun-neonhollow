import { useRef, useState } from 'react'

type DiceType = { label: string; min: number; max: number }

const Dice = ({ label, min, max }: DiceType) => {
    const secondsDelay = 1
    const [content, setContent] = useState<string>(label)
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleDiceClick = () => {
        if (isDisabled) return

        const number = Math.floor(Math.random() * max) + min
        setContent(number.toString())
        setIsDisabled(true)

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            setContent(label)
            setIsDisabled(false)
        }, secondsDelay * 1000)
    }

    return (
        <div
            className={`dice ${isDisabled ? 'active-dice' : ''}`}
            onClick={handleDiceClick}
        >
            {content}
        </div>
    )
}

export default Dice
