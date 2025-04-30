import { rollDice } from '@/lib/helper'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Event() {
    const navigate = useNavigate()

    useEffect(() => {
        const firstRoll = rollDice(1)
        const secondRoll = rollDice(1)
        const result = `${firstRoll}${secondRoll}`
        navigate(`/event/${result}`)
    }, [navigate])

    return null
}

export default Event
