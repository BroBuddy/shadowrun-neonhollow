import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Event() {
    const navigate = useNavigate()

    const rollCube = (): number => {
        return Math.floor(Math.random() * 6) + 1
    }

    const randomEvent = () => {
        const result = `${rollCube()}${rollCube()}`
        navigate(`/event/${result}`)
    }

    useLayoutEffect(() => {
        randomEvent()
    }, [])

    return null
}

export default Event
