import { useRef, useState } from 'react'

type DiceType = { label: string; min: number; max: number }

const Dice = ({ label, min, max }: DiceType) => {
    const [content, setContent] = useState<string>(label)
    const [isDisabled, setIsDisabled] = useState<boolean>(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const handleDiceClick = () => {
        setIsDisabled(false)
        setContent('')

        timeoutRef.current = setTimeout(() => {
            const number = Math.floor(Math.random() * max) + min
            setContent(number.toString())
            setIsDisabled(true)

            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }, 500)
    }

    return (
        <div
            className={`dice ${isDisabled ? 'active-dice' : ''} ${!content ? 'empty-dice' : ''}`}
            onClick={handleDiceClick}
        >
            {content}
        </div>
    )
}

export default Dice
